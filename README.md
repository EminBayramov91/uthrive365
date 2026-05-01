# U Thrive 365: описание и запуск проекта

Этот файл описывает локально скачанный проект U Thrive 365 и рабочий процесс, который поможет безболезненно переносить изменения между локальной машиной и Replit.

> Для GitHub и большинства платформ стандартное имя документации - `README.md`. Для Replit Agent также полезен отдельный файл `replit.md`, потому что Replit Agent использует его как проектную память.

## Что это за проект

U Thrive 365 - сайт и интерактивный веб-инструмент про личную энергию, саморефлексию и развитие. В проекте есть:

- маркетинговые и контентные страницы: Home, Start Here, About, Blog, Book, Contact;
- раздел Foundational Resources с модулями;
- PEM Assessment / Personal Energy Map Wheel с radar chart;
- Daily Spin / Daily Recalibration;
- Quiz и дополнительные страницы блога;
- Express API для spin-данных.

## Технологии

- Frontend: React 18, TypeScript, Vite, Wouter, TanStack Query.
- UI: Tailwind CSS, Radix UI / shadcn-style components, lucide-react, react-icons.
- Анимации и графики: framer-motion, Recharts, canvas-confetti.
- Backend: Express 5, TypeScript, tsx.
- Database: PostgreSQL через Drizzle ORM.
- Replit: Node.js 20, web, PostgreSQL 16, порт `5000`.

## Структура проекта

```text
client/              React/Vite frontend
client/src/pages/    страницы сайта
client/src/components/ общие компоненты UI, Navbar, Footer
server/              Express backend
server/index.ts      точка входа сервера
server/routes.ts     API routes
server/db.ts         подключение к PostgreSQL
shared/              общие схемы и API paths
shared/schema.ts     Drizzle schema для таблицы spins
attached_assets/     изображения и материалы из Replit
script/build.ts      production build frontend + backend
.replit              настройки запуска и деплоя на Replit
```

## Важные команды

Установка зависимостей:

```bash
npm install
```

Запуск на Replit или Linux/macOS:

```bash
npm run dev
```

Production-сборка:

```bash
npm run build
```

Запуск production-сборки:

```bash
npm run start
```

Проверка TypeScript:

```bash
npm run check
```

Применение схемы Drizzle к базе:

```bash
npm run db:push
```

## Переменные окружения

Сервер требует PostgreSQL-подключение:

```text
DATABASE_URL=postgresql://user:password@host:port/database
```

В Replit у проекта также есть `SESSION_SECRET`. В текущем коде он не используется, но его можно держать в Replit Secrets и локально задавать при необходимости. Реальные secret-значения не коммитьте в Git.

Email capture на Home использует backend endpoint `/api/subscribe`: email сохраняется в PostgreSQL и уведомление отправляется через Resend. Contact form использует backend endpoint `/api/contact` и отправляет сообщение на тот же `EMAIL_TO`. Для production/Replit нужны secrets:

```text
RESEND_API_KEY=re_xxxxxxxxx
EMAIL_FROM=U Thrive 365 <noreply@uthrive365.com>
EMAIL_TO=hello@uthrive365.com
```

Для локальной разработки без реальной отправки можно задать:

```text
EMAIL_DELIVERY_DISABLED=true
```

Если `DATABASE_URL` не задан, сервер упадет при старте в `server/db.ts` с ошибкой:

```text
DATABASE_URL must be set. Did you forget to provision a database?
```

На Replit PostgreSQL-модуль обычно предоставляет `DATABASE_URL`. Локально нужно поднять PostgreSQL самому или использовать внешнюю базу.

## Локальный запуск на Windows

Самый простой вариант для этого компьютера:

```powershell
npm run dev:local
```

Эта команда запускает локальный PostgreSQL-контейнер `uthrive365-postgres`, задает `DATABASE_URL`, отключает реальную email-отправку через `EMAIL_DELIVERY_DISABLED=true`, применяет Drizzle-схему через `npm run db:push` и затем запускает dev-сервер.

Перед запуском должен быть открыт Docker Desktop.

После запуска откройте:

```text
http://localhost:5000
```

Если PostgreSQL уже поднят другим способом, можно вручную задать переменные:

```powershell
$env:PORT="5000"
$env:DATABASE_URL="postgresql://postgres:postgres@localhost:5432/uthrive365"
$env:EMAIL_DELIVERY_DISABLED="true"
npm run db:push
npm run dev
```

## Как это запускается на Replit

В `.replit` уже настроено:

```toml
modules = ["nodejs-20", "web", "postgresql-16"]
run = "npm run dev"

[[ports]]
localPort = 5000
externalPort = 80

[env]
PORT = "5000"

[deployment]
deploymentTarget = "autoscale"
run = ["node", "./dist/index.cjs"]
build = ["npm", "run", "build"]
```

То есть:

- кнопка Run запускает `npm run dev`;
- dev-сервер слушает `0.0.0.0:5000`;
- Preview открывает сайт через внешний порт Replit;
- деплой сначала делает `npm run build`, затем запускает `node ./dist/index.cjs`.

## Текущее состояние проверки

Я проверил проект локально:

- `npm run build` проходит успешно;
- `npm run check` сейчас падает с TypeScript-ошибками.

Основные места ошибок:

- `client/src/pages/PEMWheel.tsx` - не хватает явных типов для `scores`, callbacks и некоторых props Recharts;
- `client/src/pages/StartHere.tsx` и `client/src/pages/FoundationalResources.tsx` - `PageHeader` получает `className`, но тип `PageHeaderProps` его не описывает;
- `client/src/pages/Home.tsx` - арифметика с объектами `Date` требует `.getTime()`;
- `client/src/pages/Quiz.tsx` - параметр `isYes` не типизирован;
- `client/src/pages/StartHere.tsx` - у одного варианта step используется `note`, но общий тип массива его не выводит.

Это не помешало production build, потому что Vite/esbuild собирает проект без полноценного typecheck. Но перед серьезной работой и деплоем лучше починить `npm run check`.

Также при сборке есть предупреждения:

- Browserslist data устарел: можно выполнить `npx update-browserslist-db@latest`;
- frontend bundle больше 500 kB: это не критично для запуска, но позже можно сделать code splitting.

## Как работать с Replit без проблем

Лучший вариант - сделать GitHub главным источником правды:

1. Создать приватный или публичный GitHub-репозиторий.
2. Залить туда локальный проект.
3. В Replit подключить Git provider или импортировать проект из GitHub.
4. Все изменения делать через ветки и маленькие коммиты.
5. Если что-то менялось в Replit Agent, сначала commit/push из Replit, потом `git pull` локально.
6. Если что-то менялось локально, сначала commit/push локально, потом pull/import в Replit.

Не стоит одновременно редактировать одни и те же файлы локально и в Replit без коммитов. Так чаще всего появляются конфликты и потерянные изменения.

## Что обязательно держать в Git

Коммитить:

- `package.json`;
- `package-lock.json`;
- `.replit`;
- `client/`;
- `server/`;
- `shared/`;
- `script/` и `scripts/`;
- `attached_assets/`, если проект реально использует эти картинки;
- конфиги TypeScript, Vite, Tailwind, PostCSS, Drizzle.

Не коммитить:

- `node_modules/`;
- `dist/`;
- `.env`;
- `.idea/`;
- `.local/`;
- временные архивы `*.tar.gz`.

Сейчас `.gitignore` уже закрывает основные локальные и build-папки.

## Перед отправкой изменений на Replit

Минимальный чеклист:

```bash
npm install
npm run build
```

Желательно также:

```bash
npm run check
```

Но сейчас `npm run check` требует исправления TypeScript-ошибок, описанных выше.

Если менялась база:

```bash
npm run db:push
```

На Replit проверьте:

- PostgreSQL подключен;
- `DATABASE_URL` существует в Secrets / environment;
- `.replit` сохранен в корне проекта;
- Run открывает порт `5000`;
- в Preview нет ошибок API.

## Практичная схема работы

Рекомендованный цикл:

```bash
git pull
npm install
# внести изменения
npm run build
git status
git add .
git commit -m "Describe change"
git push
```

После этого в Replit:

1. открыть Git tab;
2. сделать pull с GitHub;
3. нажать Run;
4. проверить Preview;
5. если все хорошо - Publish/Deploy.

## Особенности проекта, о которых стоит помнить

- Contact form отправляет `/api/contact`; backend валидирует поля и отправляет письмо через Resend на `EMAIL_TO` (`hello@uthrive365.com` по умолчанию).
- Home email capture отправляет `/api/subscribe`, сохраняет email в таблицу `subscribers`, отправляет уведомление через Resend и после успеха переводит пользователя на `/pem`.
- В backend есть API `/api/spins/random` и `/api/spins`, но текущая страница `DailySpin.tsx` использует локальный массив `SPIN_ENTRIES`. Если нужен единый источник данных, стоит подключить страницу к backend API.
- PostgreSQL нужен уже на старте сервера, потому что `server/db.ts` проверяет `DATABASE_URL`.

## Полезные ссылки

- Replit project configuration: https://docs.replit.com/core-concepts/workspace/app-setup/configuration
- Replit secrets: https://docs.replit.com/core-concepts/workspace/app-setup/secrets
- Replit version control: https://docs.replit.com/core-concepts/workspace/version-control
- Import to Replit: https://docs.replit.com/core-concepts/workspace/app-setup/import
- Replit Agent project memory (`replit.md`): https://docs.replit.com/core-concepts/agent/replit-dot-md

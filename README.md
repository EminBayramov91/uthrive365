# U Thrive 365

U Thrive 365 is a React and Express web application for the U Thrive 365 brand. It includes marketing pages, foundational resources, a PEM Assessment wheel, a daily recalibration experience, a contact form, and an email capture flow from the Home page.

The app is designed to run on Replit, but it can also be developed locally on Windows with Docker Desktop.

## Main Features

- Home page with hero section, content sections, book promotion, and email capture.
- Start Here, About, Foundational Resources, Book, Blog, and Contact pages.
- PEM Assessment page with a radar-style wheel visualization.
- Daily Spin page and backend spin endpoints.
- Contact form endpoint that forwards messages to Formspree.
- Home email capture endpoint that saves subscribers and forwards notifications to Formspree.
- PostgreSQL persistence through Drizzle ORM.

## Tech Stack

- Frontend: React 18, TypeScript, Vite, Wouter, TanStack Query.
- Styling/UI: Tailwind CSS, Radix UI style components, lucide-react, react-icons.
- Motion and charts: Framer Motion, Recharts, canvas-confetti.
- Backend: Express 5, TypeScript, tsx.
- Database: PostgreSQL with Drizzle ORM.
- Hosting target: Replit with Node.js 20 and PostgreSQL.

## Project Structure

```text
client/                 React/Vite frontend
client/src/components/  Shared UI, Navbar, Footer, Newsletter
client/src/pages/       Site pages and app screens
server/                 Express backend
server/index.ts         Server entry point
server/routes.ts        API routes and email delivery logic
server/db.ts            PostgreSQL connection
server/storage.ts       Database access layer
shared/                 Shared API routes and database schema
shared/schema.ts        Drizzle schema for spins and subscribers
script/build.ts         Production build script
scripts/start-local.ps1 Windows local dev helper
attached_assets/        Images and imported Replit assets
.replit                 Replit run/deployment configuration
```

## Requirements

- Node.js 20 or newer.
- npm.
- Docker Desktop for the easiest Windows local setup.
- PostgreSQL if you prefer a manual local database setup.
- Formspree forms for contact and Home email capture delivery.

## Environment Variables

The project includes `.env.example` as a safe reference. Do not commit real secrets.

The plain `npm run dev` command does not automatically load `.env` by itself. Set variables in your shell, use Replit Secrets, or use `npm run dev:local`, which sets the local development variables for you.

| Variable | Required | Purpose |
| --- | --- | --- |
| `PORT` | Recommended | Server port. Replit and local development use `5000`. |
| `DATABASE_URL` | Yes | PostgreSQL connection string used by Drizzle and the server. |
| `SESSION_SECRET` | Recommended | Reserved for session/auth-related server code. Keep it in Replit Secrets. |
| `FORMSPREE_CONTACT_ENDPOINT` | Optional | Contact form endpoint. Defaults to `https://formspree.io/f/xrejbqrk`. |
| `FORMSPREE_SUBSCRIBE_ENDPOINT` | Optional | Home email capture endpoint. Defaults to `https://formspree.io/f/xojrvdra`. |

Recommended production/Replit secrets:

```text
DATABASE_URL=postgresql://...
SESSION_SECRET=long-random-secret
```

Optional Formspree endpoint overrides:

```text
FORMSPREE_CONTACT_ENDPOINT=https://formspree.io/f/xrejbqrk
FORMSPREE_SUBSCRIBE_ENDPOINT=https://formspree.io/f/xojrvdra
```

The Formspree endpoints are not secrets. They are listed in `.env.example` for clarity and can be changed later without touching the form code.

## Local Setup on Windows

Install dependencies:

```powershell
npm install
```

Start the app with the helper script:

```powershell
npm run dev:local
```

This script:

- checks that Docker Desktop is running;
- creates or starts a local PostgreSQL 16 container named `uthrive365-postgres`;
- sets `PORT=5000`;
- sets `DATABASE_URL=postgresql://postgres:postgres@localhost:5432/uthrive365`;
- runs `npm run db:push`;
- starts the development server.

Open the site at:

```text
http://localhost:5000
```

## Manual Local Setup

If you already have PostgreSQL running, set the required variables yourself:

```powershell
$env:PORT="5000"
$env:DATABASE_URL="postgresql://postgres:postgres@localhost:5432/uthrive365"
npm run db:push
npm run dev
```

The forms use Formspree by default, so local submissions will also send notifications to the Formspree destination configured by the client.

To override the Formspree endpoints locally:

```powershell
$env:FORMSPREE_CONTACT_ENDPOINT="https://formspree.io/f/xrejbqrk"
$env:FORMSPREE_SUBSCRIBE_ENDPOINT="https://formspree.io/f/xojrvdra"
npm run dev
```

## Useful Commands

```bash
npm install
```

Install dependencies.

```bash
npm run dev
```

Start the Express and Vite development server. Environment variables must already be available in the shell or hosting environment.

```bash
npm run dev:local
```

Start the Windows local Docker/PostgreSQL workflow.

```bash
npm run db:push
```

Apply the Drizzle schema to the configured PostgreSQL database.

```bash
npm run build
```

Build the frontend and backend for production.

```bash
npm run start
```

Run the production build from `dist/index.cjs`.

```bash
npm run check
```

Run the TypeScript compiler.

## API Notes

### Contact Form

The Contact page submits to:

```text
POST /api/contact
```

The backend validates the request and forwards the submission to Formspree endpoint `https://formspree.io/f/xrejbqrk`.

### Home Email Capture

The Home newsletter/PEM capture form submits to:

```text
POST /api/subscribe
```

The backend validates the email, saves it in the `subscribers` table, forwards the submission to Formspree endpoint `https://formspree.io/f/xojrvdra`, and the frontend redirects the user to the PEM page after a successful submit.

### Daily Spin

The backend also exposes:

```text
GET /api/spins
GET /api/spins/random
```

If the `spins` table is empty on server start, a small default set is seeded automatically.

## Replit Setup

The Replit configuration is stored in `.replit`.

Run button:

```bash
npm run dev
```

Deployment build:

```bash
npm run build
```

Deployment run:

```bash
node ./dist/index.cjs
```

Replit should have these Secrets configured:

```text
DATABASE_URL
SESSION_SECRET
```

The Formspree endpoints are already configured in code. Add `FORMSPREE_CONTACT_ENDPOINT` and `FORMSPREE_SUBSCRIBE_ENDPOINT` as Replit Secrets only if the client creates new Formspree forms later.

## Working Locally and Publishing Back to Replit

Use GitHub as the source of truth.

Recommended workflow:

```bash
git pull
npm install
npm run build
git status
git add .
git commit -m "Describe the change"
git push
```

Then in Replit:

1. Open the Git tab.
2. Pull the latest changes from GitHub.
3. Press Run and check the Preview.
4. Publish/Deploy only after the app works in Preview.

Avoid editing the same files locally and in Replit at the same time without committing. That is the easiest way to create merge conflicts or lose work.

## Custom Domain Notes

The client owns `uthrive365.com` through Squarespace. The exact DNS records must come from the Replit deployment/domain settings for this app.

Recommended process:

1. The client grants access to Replit deployment/domain settings, or sends the DNS records shown by Replit.
2. The records are added in Squarespace DNS.
3. Replit verifies the domain.
4. After verification, publish the app through Replit.

Do not guess the CNAME or A records. Use the values generated by Replit for the specific deployment.

## Git Ignore Policy

Commit source code, configuration, and assets used by the app.

Do not commit:

- `.env`
- real secrets
- `node_modules/`
- `dist/`
- `.local/`
- editor folders
- temporary archives

## Pre-Push Checklist

Before pushing changes intended for Replit:

```bash
npm run build
```

If database schema changed:

```bash
npm run db:push
```

For stricter validation, also run:

```bash
npm run check
```

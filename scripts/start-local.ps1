$ErrorActionPreference = "Stop"

$containerName = "uthrive365-postgres"
$databaseUrl = "postgresql://postgres:postgres@localhost:5432/uthrive365"

function Wait-For-Postgres {
  for ($i = 1; $i -le 30; $i++) {
    docker exec $containerName pg_isready -U postgres -d uthrive365 *> $null
    if ($LASTEXITCODE -eq 0) {
      return
    }
    Start-Sleep -Seconds 2
  }

  throw "PostgreSQL did not become ready. Check Docker Desktop and container logs."
}

docker info *> $null
if ($LASTEXITCODE -ne 0) {
  throw "Docker Desktop is not running. Start Docker Desktop, wait until it is ready, then run npm run dev:local again."
}

$existingContainer = docker ps -a --filter "name=^/$containerName$" --format "{{.Names}}"
if (-not $existingContainer) {
  docker run --name $containerName `
    -e POSTGRES_PASSWORD=postgres `
    -e POSTGRES_DB=uthrive365 `
    -p 5432:5432 `
    -d postgres:16 | Out-Null
} else {
  docker start $containerName *> $null
}

Wait-For-Postgres

$env:PORT = "5000"
$env:DATABASE_URL = $databaseUrl
$env:EMAIL_DELIVERY_DISABLED = "true"

npm run db:push
npm run dev

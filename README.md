# Prisma Demo

This project demonstrates how **Prisma** can automatically generate TypeScript schemas and REST API endpoints from your database schema.
It uses:

- **Docker** to run a PostgreSQL database,
- **Prisma** for ORM and schema generation,
- **Next.js** for the API layer.

---

## Features

- **Automatic Schema Generation**: Prisma introspects your database and generates TypeScript schemas.
- **REST API Endpoints**: Endpoints are automatically created for each model.
- **Dockerized Database**: Easily spin up a local PostgreSQL instance using Docker.

---

## Installation

### 1. Install Docker

- Download Docker from [docker.com](https://www.docker.com/products/docker-desktop/).
- Start Docker Desktop after installation.

### 2. Install Dependencies

Run the following in the project root:

```bash
npm install
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AdiBarHalevi/prisma-demo.git
cd prisma-demo
```

### 2. Start the Database

```bash
npm run db:up
```

This launches a PostgreSQL database container (see `docker-compose.yml` for configuration).

### 3. Configure Environment Variables

Copy the example environment file and adjust values if needed:

```bash
cp .env.example .env
```

Make sure the `.env` file has the correct `DATABASE_URL` (credentials are in `docker-compose.yml`).

### 4. Sync Database Schema

Pull the schema from the running database into Prisma:

```bash
npx prisma db pull
```

This updates `prisma/schema.prisma` to reflect the database structure.

### 5. Generate Prisma Client & Schemas

```bash
npx prisma generate
```

This generates the Prisma client and TypeScript types in `prisma/generated/`.

### 6. Run the Development Server

```bash
npm run dev
```

The API is now available at [http://localhost:3000/api](http://localhost:3000/api).

---

## API Endpoints

API routes are automatically generated for each model (e.g. `src/app/api/actors/`).
Use tools like **Postman** or **Swagger UI** to explore available endpoints.

---

## Demo Route

To test the setup, a demo route for **actors** is included.

- ✅ Valid request:
  [http://localhost:3000/api/actors?first_name=PENELOPE](http://localhost:3000/api/actors?first_name=PENELOPE)

- ❌ Invalid request:
  [http://localhost:3000/api/actors?bad_param=injectSQL](http://localhost:3000/api/actors?bad_param=injectSQL)

---

## Useful Commands

- Start database:

  ```bash
  docker-compose up -d
  ```

- Stop database:

  ```bash
  docker-compose down
  ```

- Pull schema:

  ```bash
  npx prisma db pull
  ```

- Generate client/schemas:

  ```bash
  npx prisma generate
  ```

- Run dev server:

  ```bash
  npm run dev
  ```

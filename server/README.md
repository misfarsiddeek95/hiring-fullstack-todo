# Todo Application - Server

This is the backend API for the Todo app, built with NestJS and Prisma ORM.

## 🚀 Tech Stack

- **Framework:** NestJS
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL

## 💻 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v16 or higher)
- Yarn package manager
- PostgreSQL database

### Database Configuration

The application uses PostgreSQL with the following credentials:

- **Username:** `myuser`
- **Password:** `mypassword`
- **Port:** `5432`

> **Note:** For demo purposes, the `.env` file has been included in this directory with pre-configured database credentials. In production, this should never be committed to version control.

### Installation & Running

```bash
# Install dependencies
yarn install

# Generate Prisma Client
npx prisma generate

# Run Prisma migrations to set up your database
npx prisma migrate dev

# Start the NestJS server in watch mode
yarn start:dev
```

The server will be running at `http://localhost:3000`.

## 📊 Prisma Commands

Here are some useful Prisma commands:

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database (WARNING: deletes all data)
npx prisma migrate reset
```

## 🔗 Frontend Connection

This backend API is designed to work with the React frontend client. Make sure to start the client application after the server is running.

Refer to the main README or the client README for frontend setup instructions.

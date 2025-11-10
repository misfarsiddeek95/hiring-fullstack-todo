# Hiring Fullstack Todo Application

This repository contains the fullstack code for a Todo application. The project is split into two separate applications:

- `/client`: A React (Vite) front-end application.
- `/server`: A NestJS back-end API with PrismaORM.

## 🚀 Tech Stack

### Client (Frontend)

- **Framework:** React
- **Language:** TypeScript
- **Build Tool:** Vite
- **UI Library:** HeroUI
- **Styling:** Tailwind CSS
- **Data Fetching:** Axios
- **Routing:** React Router

### Server (Backend)

- **Framework:** NestJS
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** (Please specify, e.g., PostgreSQL, MySQL)

## 💻 Getting Started

To run this project, you must run both the `client` and `server` applications simultaneously in two separate terminals.

> **Note:** For demo purposes, `.env` files have been included in the relevant directories. In production, these should never be committed to version control.

### Database Configuration

The application uses PostgreSQL with the following credentials:

- **Username:** `myuser`
- **Password:** `mypassword`
- **Port:** `5432`

These credentials are already configured in the `.env` file located in the `/server` directory.

### Terminal 1: Run the Server (Backend)

```bash
# Navigate to the server folder
cd server

# Install server dependencies
yarn install

# Generate Prisma Client
npx prisma generate

# Run Prisma migrations to set up your database
npx prisma migrate dev

# Start the NestJS server in watch mode
yarn start:dev
```

The server will typically be running at `http://localhost:3000`.

### Terminal 2: Run the Client (Frontend)

```bash
# Navigate to the client folder from the root
cd client

# Install client dependencies
yarn install

# Start the Vite development server
yarn run dev
```

The client will typically be available at `http://localhost:5173` and will connect to the server.

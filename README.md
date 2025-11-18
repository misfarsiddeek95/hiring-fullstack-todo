# 🚀 Fullstack Todo Monolith

A production-ready monolithic application built with Nx, featuring a NestJS backend and a React frontend. This project demonstrates a type-safe, scalable architecture using modern web technologies.

## 🛠 Tech Stack

### Monorepo Tooling

- **Nx** (Workspace management & CLI)

### Backend (Server)

- **Framework**: NestJS
- **Database**: MySQL
- **ORM**: Prisma
- **Validation**: class-validator & class-transformer
- **Architecture**: Controller-Service-Repository pattern

### Frontend (Client)

- **Framework**: React (Vite)
- **UI Library**: Material UI (MUI)
- **State/Network**: Axios with Interceptors & Optimistic UI updates
- **Feedback**: Global Toast Context

## ⚡️ Getting Started

Follow these steps to set up the project locally.

### 1. Prerequisites

Ensure you have the following installed:

- Node.js (LTS version recommended)
- MySQL (Running locally or via Docker)

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd <project-name>
npm install
```

### Environment Configuration

Create a `.env` file in the root directory (or inside `apps/server/` depending on your specific Prisma setup).

```bash
# MySQL Connection String
# Format: mysql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL="mysql://root:password@localhost:3306/todo_db"
```

### Database Initialization

Run the Prisma migrations to create the database tables:

```bash
# Applies the migration to your MySQL database
npx prisma migrate dev --name init
```

### Running the Application

You can run the client and server individually in separate terminals.

#### Start the Backend (API)

```bash
npx nx serve server
```

URL: http://localhost:3000/api

#### Start the Frontend (UI)

```bash
npx nx serve client
```

URL: http://localhost:4200

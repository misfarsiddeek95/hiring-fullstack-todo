# 🖥️ API Server (NestJS)

The backend service for the Todo application. It follows a Controller-Service-Repository pattern and utilizes Prisma for database interactions.

## 🔑 Key Features

- **REST API**: Standard CRUD operations for Todo management.
- **Validation Pipes**: Automatically validates incoming DTOs using class-validator to ensure data integrity.
- **CORS Enabled**: Configured to allow cross-origin requests from the React frontend.
- **Global Prefix**: All routes are prefixed with `/api` (e.g., `http://localhost:3000/api/todos`).
- **Data Abstraction**: Uses a dedicated TodoService to handle business logic separate from the Controller.

## 🗄️ Database & Prisma

This project uses MySQL as the database provider and Prisma as the ORM.

### ⚠️ Important Note:

We use a custom output path for the generated Prisma Client to ensure compatibility within the Nx monorepo structure.

### Essential Commands:

```bash
# Generate Prisma Client (Run this after any schema change)
npx prisma generate

# Run Migrations (Applies changes to the DB)
npx prisma migrate dev
```

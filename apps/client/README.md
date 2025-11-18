# 💻 Client Application (React + MUI)

The frontend interface for the Todo application, built with React, Vite, and Material UI. It features a responsive design and a professional user experience.

## 🌟 Features

- **Material UI Components**: Utilizes professional components like Dialog (Modal), List, Snackbar, and Fab for a polished UI.
- **Optimistic UI**: Checkbox toggles update the UI instantly (0ms latency) before waiting for the server response, providing a snappy feel.
- **Global Feedback**: A custom ToastContext handles Success/Error/Info notifications application-wide.
- **Axios Interceptors**: Centralized error handling and request logging are configured in `lib/api.ts`.

## ⚙️ Configuration

The application relies on environment variables for API connection.

### Environment Variables

If you need to point to a different API URL (e.g., for production), create a `.env` file in `apps/client/`:

```env
# Default is http://localhost:3000/api
VITE_API_URL=http://localhost:3000/api
```

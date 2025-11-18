import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // LOGGING
    console.log(`[Request] ${config.method?.toUpperCase()} - ${config.url}`);

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    const url = error.config?.url;

    console.error(`[API Error] ${status} on ${url}:`, error.response?.data);

    switch (status) {
      case 400:
        // Bad Request (Validation errors from NestJS)
        console.warn('Validation Error:', error.response?.data);
        break;
      case 401:
        // Unauthorized
        console.error('Unauthorized! Redirecting to login...');
        // window.location.href = '/login';
        break;
      case 403:
        // Forbidden
        console.error('You do not have permission to perform this action.');
        break;
      case 404:
        console.error('Resource not found.');
        break;
      case 500:
        console.error('Server error. Please try again later.');
        break;
      default:
        console.error('Network Error or Unknown Error');
    }

    return Promise.reject(error);
  }
);

export default apiClient;

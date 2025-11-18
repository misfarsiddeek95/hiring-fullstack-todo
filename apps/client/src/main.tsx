import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { ToastProvider } from './context/ToastContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './contexts';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import { MoonPayProvider } from '@moonpay/moonpay-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <MoonPayProvider
            apiKey={import.meta.env.VITE_MOONPAY_API_KEY || ''}
        >
          <BrowserRouter>
            <App />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </BrowserRouter>
        </MoonPayProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
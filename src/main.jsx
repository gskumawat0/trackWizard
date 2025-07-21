import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Context from './assets/Pages/Context.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_GOOGLE_DOMAIN}
      clientId={import.meta.env.VITE_GOOGLE_CLIENTID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Context>
        <App />
      </Context>
    </Auth0Provider>
  </StrictMode>,
);

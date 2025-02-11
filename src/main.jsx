import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";


Sentry.init({
  dsn: "https://9d189d31e2f45c559dfd79d0075bbe7b@o4508507988885504.ingest.de.sentry.io/4508800310313040",
  integrations: [],
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


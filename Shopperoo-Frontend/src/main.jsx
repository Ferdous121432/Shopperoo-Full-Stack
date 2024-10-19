/* eslint-disable */

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.jsx";
import SpinnerFullPage from "./components/SpinnerFullPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Suspense fallback={<SpinnerFullPage />}>
        <App />
      </Suspense>
    </AuthProvider>
  </StrictMode>,
);

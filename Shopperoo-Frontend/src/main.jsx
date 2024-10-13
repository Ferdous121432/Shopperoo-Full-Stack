/* eslint-disable */

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./payment/StripeProvider.js";

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
  </StrictMode>
);

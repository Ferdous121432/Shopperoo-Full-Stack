/* eslint-disable */
// CheckoutForm.js
import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Layout from "../components/Layout";
import SpinnerFullPage from "../components/SpinnerFullPage";

import { createCheckoutSession } from "../api/apiCheckout";
import { baseURL, checkoutURL } from "../api/apiURL";
import { getProductById } from "../api/apiProduct";
import { useAuth } from "../context/AuthProvider";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      const response = await fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      });

      const paymentIntent = await response.json();

      if (paymentIntent.error) {
        setError(paymentIntent.error);
      } else {
        setSuccess(true);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {error && <div>{error}</div>}
      {success && <div>Payment Successful!</div>}
    </form>
  );
};

export default CheckoutForm;

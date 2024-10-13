/* eslint-disable */
// StripeProvider.js
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51PydHRHmFLUIiS12y2K1u4xtVJH69D5Noh7YqWwVenC6AqSlAeSZhIC9fsHLN4Z0VZVW4mNIxZi5oLDCZzoMJJ5r009Uqk7srq"
);

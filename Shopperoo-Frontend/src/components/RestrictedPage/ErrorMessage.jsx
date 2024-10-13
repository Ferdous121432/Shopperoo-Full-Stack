/* eslint-disable */
import React from "react";

function ErrorMessage({ title, message }) {
  return (
    <section className="flex flex-col items-center mt-8">
      <h1 className="text-base font-medium text-black">{title}</h1>
      <p className="mt-1 text-sm text-neutral-500">{message}</p>
    </section>
  );
}

export default ErrorMessage;

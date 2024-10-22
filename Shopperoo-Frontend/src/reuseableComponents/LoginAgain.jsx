import React from "react";
import Button from "./Button";

const LoginAgain = () => {
  return (
    <div className="mx-12 my-24 flex flex-col items-center justify-center gap-6">
      <h1>You are not logged in</h1>
      <p>Please log in to continue.</p>
      <Button
        color="#065f46"
        handleClick={() => (window.location.href = "/signin")}
      >
        Go to Login
      </Button>
    </div>
  );
};

export default LoginAgain;

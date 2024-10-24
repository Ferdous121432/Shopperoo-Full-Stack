/* eslint-disable */
import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import Constants from "../../../constants";
import Button from "../../reuseableComponents/Button";

function SignInForm() {
  const { login, state } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "admin@a.com",
    password: "test1234",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      // if (state.isAuthenticated) {
      //   navigate("/userprofile");
      // }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <section className="mt-8 flex w-4/5 max-w-[600px] flex-col justify-center overflow-hidden rounded-3xl border border-solid border-stone-500 border-opacity-50 bg-white px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
      <div className="flex w-full max-w-[450px] flex-col items-center justify-center">
        <h1 className="text-zinc-800 text-center text-2xl font-medium md:text-3xl">
          Sign in
        </h1>
        <form
          className="mt-6 flex w-full flex-col text-sm md:mt-12 md:text-lg"
          onSubmit={handleSubmit}
        >
          {state.isAuthenticated && <Navigate to="/userprofile" />}
          <label htmlFor="email" className="text-zinc-800">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 rounded border border-solid border-stone-500 p-2"
          />
          <label htmlFor="password" className="text-zinc-800 mt-4">
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-2 rounded border border-solid border-stone-500 p-2"
          />
          <div className="mt-6 flex w-full flex-col items-center justify-center">
            <Button color={Constants.YELLOW_PRIMARY}>Log in</Button>
            <p className="mt-2 gap-2.5 py-2 pr-2 text-stone-500">
              By continuing, you agree to the{" "}
              <a href="#" className="text-neutral-900 underline">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="#" className="text-neutral-900 underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </form>

        <div className="max-md:mt-10 mt-12 flex w-full flex-wrap justify-between gap-5 text-right text-neutral-900">
          <a href="#">Other issue with sign in</a>
          <a href="#">Forget your password</a>
        </div>
      </div>
    </section>
  );
}

export default SignInForm;

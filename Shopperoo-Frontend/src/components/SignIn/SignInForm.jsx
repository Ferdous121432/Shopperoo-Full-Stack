/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import axios from "axios";

function SignInForm() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "admin@a.com",
    password: "test1234",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  // const credentials = {
  //   email: "admin@a.com",
  //   password: "test1234",
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <section className="flex overflow-hidden flex-col justify-center px-14 py-10 mt-8 w-full rounded-3xl border border-solid border-stone-500 border-opacity-50 max-md:px-5 bg-white">
      <div className="flex flex-col justify-center items-center w-full max-w-[528px] max-md:max-w-full">
        <h1 className="text-3xl font-medium text-center text-zinc-800">
          Sign in
        </h1>
        <form
          className="flex flex-col mt-12 w-full max-md:mt-10"
          onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-base text-zinc-800">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-2 border border-solid border-stone-500 rounded"
          />
          <label htmlFor="password" className="mt-4 text-base text-zinc-800">
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-2 p-2 border border-solid border-stone-500 rounded"
          />
          <div className="flex flex-col justify-center items-center mt-6 w-full max-md:max-w-full">
            <button
              type="submit"
              className="flex overflow-hidden flex-col justify-center items-center px-16 py-4 w-full text-2xl font-medium text-center text-black bg-neutral-900 rounded-[40px] max-md:px-5 max-md:max-w-full">
              <span className="gap-2 self-stretch">Log in</span>
            </button>
            <p className="gap-2.5 py-2 pr-2 mt-2 text-base text-stone-500 max-md:max-w-full">
              By continuing, you agree to the{" "}
              <a href="#" className="underline text-neutral-900">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-neutral-900">
                Privacy Policy.
              </a>
            </p>
          </div>
        </form>

        <div className="flex flex-wrap gap-5 justify-between mt-12 w-full text-base text-right text-neutral-900 max-md:mt-10">
          <a href="#">Other issue with sign in</a>
          <a href="#">Forget your password</a>
        </div>
      </div>
    </section>
  );
}

export default SignInForm;

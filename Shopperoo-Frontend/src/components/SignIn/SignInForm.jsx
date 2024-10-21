/* eslint-disable */
import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const { login } = useAuth();
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
      navigate("/userprofile");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <section className="max-md:px-5 mt-8 flex w-full flex-col justify-center overflow-hidden rounded-3xl border border-solid border-stone-500 border-opacity-50 bg-white px-14 py-10">
      <div className="max-md:max-w-full flex w-full max-w-[528px] flex-col items-center justify-center">
        <h1 className="text-zinc-800 text-center text-3xl font-medium">
          Sign in
        </h1>
        <form
          className="max-md:mt-10 mt-12 flex w-full flex-col"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="text-zinc-800 text-base">
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
          <label htmlFor="password" className="text-zinc-800 mt-4 text-base">
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
          <div className="max-md:max-w-full mt-6 flex w-full flex-col items-center justify-center">
            <button
              type="submit"
              className="max-md:px-5 max-md:max-w-full flex w-full flex-col items-center justify-center overflow-hidden rounded-[40px] bg-emarald-primary px-16 py-4 text-center text-2xl font-medium text-white-primary"
            >
              <span className="gap-2 self-stretch">Log in</span>
            </button>
            <p className="max-md:max-w-full mt-2 gap-2.5 py-2 pr-2 text-base text-stone-500">
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

        <div className="max-md:mt-10 mt-12 flex w-full flex-wrap justify-between gap-5 text-right text-base text-neutral-900">
          <a href="#">Other issue with sign in</a>
          <a href="#">Forget your password</a>
        </div>
      </div>
    </section>
  );
}

export default SignInForm;

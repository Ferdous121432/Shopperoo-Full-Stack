/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthProvider";
import { frontendURL } from "../../../frontendURL/frontendURL";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { avatar } from "@material-tailwind/react";

function RegistrationForm() {
  const { signup } = useAuth();

  const [formData, setFormData] = React.useState({
    firstName: "Ferdous",
    lastName: "Azam",
    email: "admin@a.com",
    password: "test1234",
    passwordConfirm: "test1234",
    role: "admin",
    dateOfBirth: "13 july 1990",
    phoneNumber: "01521427421",
    userName: "atsss",
    avatar: "default.jpg",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    if (formData.password !== formData.passwordConfirm) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  }, [formData.password, formData.passwordConfirm]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(formData);
    // window.location.href = frontendURL("signin");
  };

  return (
    <div className="bg-grey-lighter flex min-h-screen flex-col">
      <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
        <div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="mb-6">
              <input
                type="password"
                className="border-grey-light mb-2 block w-full rounded border p-3"
                name="passwordConfirm"
                placeholder="Confirm Password"
                value={formData.passwordConfirm}
                onChange={handleChange}
              />
              {!passwordMatch && (
                <p className="mb-8 text-xs italic text-red-500">
                  Passwords do not match
                </p>
              )}
              {passwordMatch &&
                formData.password &&
                formData.passwordConfirm && (
                  <p className="mb-8 text-xs italic text-green-500">
                    Passwords match
                  </p>
                )}
            </div>
            {/* Mui date picker */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={dayjs(formData.dateOfBirth)}
                onChange={(newValue) => {
                  setFormData({ ...formData, dateOfBirth: newValue });
                }}
              />
            </LocalizationProvider>
            <button
              type="submit"
              className="hover:bg-green-dark my-1 mt-8 w-full rounded bg-green-200 py-3 text-center text-slate-200 focus:outline-none"
            >
              Create Account
            </button>
          </form>
          <div className="text-grey-dark mt-4 text-center text-sm">
            By signing up, you agree to the
            <a
              className="border-grey-dark text-grey-dark border-b no-underline"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="border-grey-dark text-grey-dark border-b no-underline"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="border-blue text-blue border-b no-underline"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;

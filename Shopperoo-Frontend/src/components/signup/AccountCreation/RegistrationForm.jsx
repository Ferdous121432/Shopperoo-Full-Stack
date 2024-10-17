/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthProvider";
import { frontendURL } from "../../../frontendURL/frontendURL";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function RegistrationForm() {
  const { signup } = useAuth();

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    dateofbirth: "1998-12-12",
    phoneNumber: "01521427421",
    userName: "ferdouss",
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
    console.log("jdjs");
    signup(formData);
    window.location.href = frontendURL("signin");
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="mb-6">
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-2"
                name="passwordConfirm"
                placeholder="Confirm Password"
                value={formData.passwordConfirm}
                onChange={handleChange}
              />
              {!passwordMatch && (
                <p className="text-red-500 text-xs italic mb-8 ">
                  Passwords do not match
                </p>
              )}
              {passwordMatch &&
                formData.password &&
                formData.passwordConfirm && (
                  <p className="text-green-500 text-xs italic mb-8">
                    Passwords match
                  </p>
                )}
            </div>
            {/* Mui date picker */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={dayjs(formData.dateofbirth)}
                onChange={(newValue) => {
                  setFormData({ ...formData, dateofbirth: newValue });
                }}
              />
            </LocalizationProvider>
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-200 text-slate-200 hover:bg-green-dark focus:outline-none my-1 mt-8">
              Create Account
            </button>
          </form>
          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#">
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue"
            href="../login/">
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;

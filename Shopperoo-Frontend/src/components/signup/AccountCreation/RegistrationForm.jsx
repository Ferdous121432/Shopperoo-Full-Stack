/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthProvider";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { avatar } from "@material-tailwind/react";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import Constants from "../../../../constants";
import Button from "../../../reuseableComponents/Button";

function RegistrationForm() {
  const { signup, state } = useAuth();

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
  const [error, setError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(null);

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
      console.log("Signup successful:", response);
      // Handle successful signup (e.g., redirect to another page)

      // window.location.href = frontendURL("signin");
    } catch (error) {
      console.error("Signup failed:", error);
      setError(error.message);
    }
  };

  //Handle Form Response

  useEffect(() => {
    if (state.error) {
      setError(state.error);
      console.log("Error:", state.error);
    }
  }, [state.error]);

  useEffect(() => {
    if (state.signupData) {
      setSignupSuccess(true);
      console.log("SignUp", state.signupData);
    }
  }, [state.signupData]);

  signupSuccess && <Navigate to="/signin" />;

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   signup(formData);
  //   // window.location.href = frontendURL("signin");
  // };

  const navigation = useNavigation();
  console.log(navigation);

  return (
    <div className="bg-grey-lighter flex min-h-screen w-full flex-col">
      <div className="container mx-auto flex flex-1 flex-col items-center justify-start px-2">
        <div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl">Sign up</h1>
          <form onSubmit={handleSubmit}>
            {signupSuccess && <Navigate to="/signin" />}
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

            <div className="flex items-center justify-start py-10">
              <Button color={Constants.YELLOW_PRIMARY}>Create Account</Button>
            </div>
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
        <div className="text-grey-dark mt-6 flex items-center justify-center">
          Already have an account?
          <a
            className="border-b pl-4 text-lg font-semibold text-blue-500 no-underline hover:text-yellow-primary"
            href="/signin"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;

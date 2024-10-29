/* eslint-disable */
import React from "react";

import SignInForm from "../components/SignIn/SignInForm";
import Divider from "../components/SignIn/Divider";
import CreateAccountButton from "../components/SignIn/CreateAccountButton";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

function SignInPage() {
  const { state } = useAuth();
  console.log(state.loading);
  return (
    <Layout>
      {state.isAuthenticated && <Navigate to="/userprofile" />}
      <main className="m-auto mt-6 flex w-full max-w-full flex-col items-center justify-start self-center">
        <SignInForm />
        <Divider text="New to our community" />
        <CreateAccountButton />
      </main>
    </Layout>
  );
}

export default SignInPage;

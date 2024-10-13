/* eslint-disable */
import React from "react";
import axios from "axios";

import { AuthProvider, useAuth } from "../context/AuthProvider";
import SignInForm from "../components/SignIn/SignInForm";
import Divider from "../components/SignIn/Divider";
import CreateAccountButton from "../components/SignIn/CreateAccountButton";
import Layout from "../components/Layout";
import Dashboard from "./Dashboard";

function SignInPage() {
  const { state } = useAuth();

  return (
    <Layout>
      {state.isAuthenticated ? (
        <Dashboard />
      ) : (
        <main className="flex m-auto my-[4rem] flex-col justify-center items-center self-center max-w-full w-[640px]">
          <SignInForm />
          <Divider text="New to our community" />
          <CreateAccountButton />
        </main>
      )}
    </Layout>
  );
}

export default SignInPage;

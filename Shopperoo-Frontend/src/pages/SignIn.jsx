/* eslint-disable */
import React from "react";

import SignInForm from "../components/SignIn/SignInForm";
import Divider from "../components/SignIn/Divider";
import CreateAccountButton from "../components/SignIn/CreateAccountButton";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthProvider";

function SignInPage() {
  return (
    <Layout>
      <main className="m-auto my-[4rem] flex w-[640px] max-w-full flex-col items-center justify-center self-center">
        <SignInForm />
        <Divider text="New to our community" />
        <CreateAccountButton />
      </main>
    </Layout>
  );
}

export default SignInPage;

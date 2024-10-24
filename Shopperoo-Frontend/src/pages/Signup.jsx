/* eslint-disable */
import React from "react";
import Layout from "../components/Layout";
import RegistrationForm from "../components/signup/AccountCreation/RegistrationForm";
import IllustrationImage from "../components/signup/AccountCreation/IllustrationImage";

function AccountCreation() {
  return (
    <Layout>
      <main className="m-auto my-6 flex w-full items-start justify-center">
        <section className="flex w-4/5 max-w-[700px] overflow-hidden rounded-3xl border border-solid border-stone-500 border-opacity-50 bg-white pb-14">
          <div className="flex w-full min-w-[320px] justify-center">
            <RegistrationForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default AccountCreation;

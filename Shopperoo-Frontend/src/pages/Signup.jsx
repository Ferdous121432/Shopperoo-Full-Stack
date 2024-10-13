/* eslint-disable */
import React from "react";
import Layout from "../components/Layout";
import RegistrationForm from "../components/signup/AccountCreation/RegistrationForm";
import IllustrationImage from "../components/signup/AccountCreation/IllustrationImage";

function AccountCreation() {
  return (
    <Layout>
      <main className="flex m-auto my-[4rem] flex-col w-full max-w-[1017px] max-md:max-w-full">
        <section className="overflow-hidden py-14 pl-14 bg-white rounded-3xl border border-solid border-stone-500 border-opacity-50 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <RegistrationForm />
            </div>
            <IllustrationImage />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default AccountCreation;

/* eslint-disable */
import React from "react";
import ErrorMessage from "../components/RestrictedPage/ErrorMessage";
import Button from "../components/RestrictedPage/Button";
import Layout from "../components/Layout";

function RestrictedPage() {
  return (
    <Layout>
      <main className="flex overflow-hidden flex-col items-center px-32 py-32 max-md:px-5 max-md:py-24">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5016736ef768d2a65e3e24eedef2f45586ef60099dc99794b073a54a7247d8b?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
          alt="Restricted access illustration"
          className="object-contain max-w-full aspect-square w-[334px]"
        />
        <ErrorMessage
          title="Restricted Page"
          message="You don't have permission to access this page."
        />
        <Button text="Go back to home" />
      </main>
    </Layout>
  );
}

export default RestrictedPage;

/* eslint-disable */
import React from 'react';
import InputField from './InputField';
import SelectField from './SelectField';

function BillingDetails() {
  return (
    <div className="flex flex-col mt-9 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-4xl font-semibold text-black">Billing details</h2>
      <div className="mt-9 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <InputField label="First Name" />
          <InputField label="Last Name" />
        </div>
      </div>
      <InputField label="Company Name (Optional)" />
      <SelectField label="Country / Region" options={['Sri Lanka']} />
      <InputField label="Street address" />
      <InputField label="Town / City" />
      <SelectField label="Province" options={['Western Province']} />
      <InputField label="ZIP code" />
      <InputField label="Phone" />
      <InputField label="Email address" type="email" />
      <textarea
        className="px-7 py-7 mt-16 mb-0 max-w-full text-base bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 w-[453px] max-md:px-5 max-md:mt-10 max-md:mb-2.5"
        placeholder="Additional information"
      ></textarea>
    </div>
  );
}

export default BillingDetails;
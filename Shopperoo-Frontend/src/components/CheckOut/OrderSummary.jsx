/* eslint-disable */
import React from "react";

function OrderSummary({ quantity, product, handleMakePayment }) {
  const subtotal = product.price * quantity;
  return (
    <div className="flex flex-col px-10 py-20 mx-auto w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full text-base font-medium text-black max-md:mt-10">
              <h3 className="text-2xl">Product</h3>
              <div className="flex gap-2.5 items-center self-stretch mt-3.5 text-xs">
                <div className="grow self-stretch text-base text-neutral-400">
                  {product.name}
                </div>
                <div className="self-stretch my-auto">X</div>
                <div className="self-stretch my-auto">{quantity}</div>
              </div>
              <div className="mt-6">Subtotal</div>
              <div className="mt-6">Total</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <div className="flex flex-col items-end pl-9 text-base font-light text-black max-md:pl-5">
                <h3 className="text-2xl font-medium">Subtotal</h3>
                <div className="mt-3.5 max-md:mr-1">{subtotal}</div>
                <div className="mt-6">{subtotal}</div>
              </div>
              <div className="mt-4 text-2xl font-bold text-yellow-600">
                {subtotal}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="shrink-0 mt-8 max-w-full h-px border border-solid border-zinc-300 w-[527px] max-md:mr-1" />
      <PaymentOptions />
      <PrivacyPolicy />
      <button
        onClick={handleMakePayment}
        className="self-center px-16 py-4 mt-10 max-w-full text-xl text-black rounded-2xl border border-black border-solid w-[318px] max-md:px-5">
        Place order
      </button>
    </div>
  );
}

function PaymentOptions() {
  return (
    <>
      <div className="flex gap-4 self-start mt-6 text-base text-black max-md:ml-0.5">
        <div className="flex shrink-0 my-auto w-3.5 h-3.5 bg-black rounded-full" />
        <div className="basis-auto">Direct Bank Transfer</div>
      </div>
      <div className="mt-3 text-base font-light text-neutral-400 max-md:mr-1 max-md:max-w-full">
        Make your payment directly into our bank account. Please use your Order
        ID as the payment reference. Your order will not be shipped until the
        funds have cleared in our account.
      </div>
      <div className="flex gap-4 self-start mt-6 text-base font-medium text-neutral-400 max-md:ml-0.5">
        <div className="flex shrink-0 my-auto w-3.5 h-3.5 rounded-full border border-solid border-neutral-400" />
        <div className="basis-auto">Direct Bank Transfer</div>
      </div>
      <div className="flex gap-4 self-start mt-3 text-base font-medium text-neutral-400 max-md:ml-0.5">
        <div className="flex shrink-0 my-auto w-3.5 h-3.5 rounded-full border border-solid border-neutral-400" />
        <div className="basis-auto">Cash On Delivery</div>
      </div>
    </>
  );
}

function PrivacyPolicy() {
  return (
    <div className="mt-6 text-base font-light text-black max-md:mr-1 max-md:max-w-full">
      Your personal data will be used to support your experience throughout this
      website, to manage access to your account, and for other purposes
      described in our <span className="font-semibold">privacy policy.</span>
    </div>
  );
}

export default OrderSummary;

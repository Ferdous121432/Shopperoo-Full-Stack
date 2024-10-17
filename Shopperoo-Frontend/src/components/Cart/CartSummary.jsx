/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

const CartSummary = ({ subtotal, total, handleCheckout }) => {
  return (
    <div className="flex flex-col px-20 pt-4 pb-20 mx-auto w-full bg-orange-50 max-md:px-5 max-md:mt-10">
      <h2 className="self-center text-3xl font-semibold text-black">
        Cart Totals
      </h2>
      <div className="flex gap-5 justify-between mt-16 max-md:mt-10">
        <div className="flex flex-col self-start text-base font-medium text-black whitespace-nowrap">
          <div>Subtotal</div>
          <div className="self-start mt-8">Total</div>
        </div>
        <div className="flex flex-col">
          <div className="self-end text-base text-neutral-400">{subtotal}</div>
          <div className="mt-8 text-xl font-medium text-yellow-600">
            {total}
          </div>
        </div>
      </div>
      <button
        onClick={handleCheckout}
        className="px-14 py-4 mt-11 mr-2.5 ml-3 text-xl text-black rounded-2xl border border-black border-solid max-md:px-5 max-md:mt-10 max-md:ml-2.5">
        Check Out
      </button>
    </div>
  );
};

export default CartSummary;

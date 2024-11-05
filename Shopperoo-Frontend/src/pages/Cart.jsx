/* eslint-disable */
import Layout from "../components/Layout";
import React from "react";
import Banner from "../components/Cart/Banner";
import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummary";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import { useAuth } from "../context/AuthProvider";
import CartItemHeader from "../components/Cart/CartItemHeader";
import { makeMultiplePayments } from "../api/apiCheckout";
import Breadcrumb from "../reuseableComponents/Breadcrumb";
import LoginAgain from "../reuseableComponents/LoginAgain";
import Button from "../reuseableComponents/Button";

// const cartItems = [
//   {
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/599dd8b1316917b2c76708914c16d92f36426232dbac16f71595abadde4eb742?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
//     name: "Asgaard sofa",
//     price: "Rs. 250,000.00",
//     quantity: 1,
//     subtotal: "Rs. 250,000.00",
//   },
// ];

const Cart = () => {
  const { state } = useAuth();
  const cart = state.cartData ? state.cartData.cartItems : [];
  const totalPrice = state.cartData ? state.cartData.totalPrice : 0;
  console.log(cart.length);
  console.log(totalPrice);

  const handleCheckout = () => {
    makeMultiplePayments(cart, state.token);
  };

  if (cart.length === 0) {
    return (
      <Layout>
        <div
          className="flex flex-col items-center justify-center gap-4 py-10"
          style={{ height: "50vh" }}
        >
          <div>No items in cart</div>
          <Button handleClick={() => (window.location.href = "/")}>
            Continue Shopping
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden bg-white pb-12">
      <Layout>
        <>
          <Breadcrumb name="Cart" />
          <main className="max-md:px-5 max-md:max-w-full z-10 -mt-1.5 w-full bg-white px-20 py-16">
            <div className="max-md:flex-col flex gap-5">
              <div className="max-md:ml-0 max-md:w-full flex w-[68%] flex-col">
                <div className="max-md:mt-10 max-md:max-w-full flex w-full flex-col">
                  <CartItemHeader />
                  <div className="max-md:mt-10 max-md:mr-2.5 max-md:max-w-full mr-6 mt-14">
                    {cart.map((item) => (
                      <CartItem key={item._id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="max-md:ml-0 max-md:w-full ml-5 flex w-[32%] flex-col">
                <CartSummary
                  subtotal={totalPrice}
                  total={totalPrice}
                  handleCheckout={handleCheckout}
                />
              </div>
            </div>
          </main>
          <FeatureSection />
        </>
      </Layout>
    </div>
  );
};

export default Cart;

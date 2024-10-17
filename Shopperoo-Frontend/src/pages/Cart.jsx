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
  console.log(cart);
  console.log(totalPrice);

  const handleCheckout = () => {
    makeMultiplePayments(cart, state.token);
  };

  return (
    <div className="flex overflow-hidden flex-col pb-12 bg-white">
      <Layout>
        <Banner />
        <main className="z-10 px-20 py-16 -mt-1.5 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                <CartItemHeader />
                <div className="mt-14 mr-6 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                  {cart.map((item) => (
                    <CartItem key={item._id} item={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
              <CartSummary
                subtotal={totalPrice}
                total={totalPrice}
                handleCheckout={handleCheckout}
              />
            </div>
          </div>
        </main>
        <FeatureSection />
      </Layout>
    </div>
  );
};

export default Cart;

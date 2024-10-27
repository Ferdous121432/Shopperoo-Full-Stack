/* eslint-disable */
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BillingDetails from "../components/CheckOut/BillingDetails";
import OrderSummary from "../components/CheckOut/OrderSummary";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/apiProduct";
import SpinnerFullPage from "../components/SpinnerFullPage";
import { makePayment } from "../api/apiCheckout";
import { useAuth } from "../context/AuthProvider";

function CheckoutPage() {
  const { state } = useAuth();
  const { id } = useParams();
  const queryParams = new URLSearchParams(window.location.search);
  const quantity = queryParams.get("quantity");
  const [product, setProduct] = useState(null);

  const productDetails = {
    product_id: product._id,
    image: product.imageCover.split("/").slice(-1).join(),
    quantity: quantity,
    productName: product.name,
    price: product.price,
    subtotal: product.price * quantity,
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(id);
        setProduct(fetchedProduct.data.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleMakePayment = async () => {
    makePayment(productDetails, state.token);
  };

  if (!product) {
    return <SpinnerFullPage />;
  }

  return (
    <div className="flex flex-col overflow-hidden bg-white pb-12">
      <Layout>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebe5bf593d0bacf83c999db9295be0fb791a675551c59ff97286405620db1dc2?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
          className="max-md:max-w-full aspect-[4.57] w-full object-contain"
          alt="Banner image"
        />
        <main className="max-md:px-5 max-md:pb-24 max-md:max-w-full flex w-full flex-col items-start bg-white px-20 pb-32 pt-16">
          <div className="max-md:max-w-full w-full max-w-[1168px] self-end">
            <div className="max-md:flex-col flex gap-5">
              <div className="max-md:ml-0 max-md:w-full flex w-[43%] flex-col">
                <BillingDetails />
              </div>
              <div className="max-md:ml-0 max-md:w-full ml-5 flex w-[57%] flex-col">
                <OrderSummary
                  quantity={quantity}
                  product={product}
                  handleMakePayment={handleMakePayment}
                />
              </div>
            </div>
          </div>
        </main>
        <FeatureSection />
      </Layout>
    </div>
  );
}

export default CheckoutPage;

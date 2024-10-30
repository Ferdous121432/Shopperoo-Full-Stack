/* eslint-disable */
import React from "react";
import ProductCard from "../../reuseableComponents/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Constants from "../../../constants";

const products = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e98631ae2f66dffb40e81f4ed9492e0d8a842811cfb6ddc4d156a5f63e9f3f2e?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    discount: "-30%",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fbe3154f8a774dfb24ed753b8bcead165866d2889fb3b7bb928f50dcefc449e1?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fbe3154f8a774dfb24ed753b8bcead165866d2889fb3b7bb928f50dcefc449e1?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    discount: "-50%",
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/00b059d80057ee55fde92459d54a41dbefb1617462a2c493d350949b6e308f86?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    newProduct: true,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7c0d3cc2ded6e6716913fbc713a249d8a7d69a8b2edbc60d3a1f4b1576e5b1f0?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3a9cc27e8a47d6d68b089c2b1f33a748a7e09b3c622cbeefd09f72d0fe0839ed?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    newProduct: true,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/62ce68c6dacbeb0e18c2372028e3604397c6834d547b04fbe77b5ac08bcfa647?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    discount: "-50%",
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8874c1e241b98a084a41eeca8cc7aa4bfbc17731513b4d3616496709f1695296?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    newProduct: true,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
  },
];

function ProductsSection() {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1285,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 645,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mt-[1rem] flex flex-col items-center justify-center">
      <h2 className="mb-4 text-center text-[2.5rem] font-bold leading-tight text-neutral-700">
        Our Products
      </h2>
      <div className="relative m-auto mt-[0.5rem] w-full max-w-[1600px] flex-wrap items-center justify-center gap-6 px-4 md:px-10">
        {/* <div className="w-full items-center justify-center text-xl text-red-800"> */}
        <button
          className="transform-left z-10"
          onClick={() => slider?.current?.slickPrev()}
        >
          <ArrowBackIcon
            sx={{
              color: Constants.EMARALD_PRIMARY,
              backgroundColor: "rgba(253, 230, 138, .8)",
              borderRadius: "50%",
              justifySelf: "center",
              alignSelf: "center",
              fontSize: "2rem",
              zIndex: "10",
            }}
          />
        </button>
        <Slider ref={slider} {...settings}>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </Slider>
        <button
          className="transform-right z-10"
          onClick={() => slider?.current?.slickNext()}
        >
          <ArrowForwardIcon
            sx={{
              color: Constants.EMARALD_PRIMARY,
              backgroundColor: "rgba(253, 230, 138, .8)",
              borderRadius: "50%",
              justifySelf: "center",
              alignSelf: "center",
              fontSize: "2rem",
              zIndex: "10",
            }}
          />
        </button>
      </div>
      {/* <button className="text-base max-md:px-[0.3125rem] mb-12 mt-8 w-[15.3125rem] max-w-full border border-solid border-yellow-600 bg-white px-[1rem] py-[0.1875rem] font-semibold text-yellow-600">
        Show More
      </button> */}
    </section>
  );
}

export default ProductsSection;

/* eslint-disable */
import React from "react";
import ProductCard from "../../reuseableComponents/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Constants from "../../../constants";

function ProductsSection({ title, products, righttoLeft }) {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: righttoLeft, // right to left

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
        {title}
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
      <button className="text-base max-md:px-[0.3125rem] mb-12 mt-8 w-[15.3125rem] max-w-full border border-solid border-yellow-600 bg-white px-[1rem] py-[0.1875rem] font-semibold text-yellow-600">
        Explore More
      </button>
    </section>
  );
}

export default ProductsSection;

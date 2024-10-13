/* eslint-disable */
import React from 'react';

function HoverProductCard({ image, name, description, price }) {
  return (
    <article className="flex flex-col self-stretch my-auto font-semibold min-w-[240px] w-[285px]">
      <div className="flex flex-col bg-neutral-700 bg-opacity-70">
        <div className="flex relative flex-col px-px w-full text-base aspect-[0.947]">
          <img loading="lazy" src={image} alt={name} className="object-cover absolute inset-0 size-full" />
          <div className="flex relative flex-col px-4 pt-44 pb-8 aspect-[0.944] max-md:pt-24">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f9ed36df6977e99fac5da6a611ba3c611c07a835476320dca53461322dd9f2?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="" className="object-cover absolute inset-0 size-full" />
            <div className="flex relative flex-col justify-center items-center">
              <button className="flex flex-col max-w-full text-yellow-600 w-[202px]">
                <span className="px-14 py-3 bg-white max-md:px-5">Add to cart</span>
              </button>
              <div className="flex gap-5 items-center mt-6 text-white whitespace-nowrap">
                <button className="flex gap-0.5 justify-center items-center self-stretch my-auto">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4584593536347ecaca13f44bf185dcf278693f9adc12627cc6e2f5c76abc9640?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                  <span className="self-stretch my-auto">Share</span>
                </button>
                <button className="flex gap-0.5 justify-center items-center self-stretch my-auto">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8494e7f7ef54ccce23bf07f40a3aca1f58f6bcbe1fcde67704c20645b4a51e64?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                  <span className="self-stretch my-auto">Compare</span>
                </button>
                <button className="flex gap-0.5 justify-center items-center self-stretch my-auto">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/72a703eeab5badffd2221b2339458be82ea8364ca6de909de5deee859079d211?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                  <span className="self-stretch my-auto">Like</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start pt-4 pr-7 pb-8 pl-4 w-full bg-gray-100 text-neutral-700 max-md:pr-5">
        <h3 className="text-2xl leading-tight">{name}</h3>
        <p className="mt-2 text-base font-medium text-zinc-500">{description}</p>
        <div className="gap-4 self-stretch mt-2 text-xl">{price}</div>
      </div>
    </article>
  );
}

export default HoverProductCard;
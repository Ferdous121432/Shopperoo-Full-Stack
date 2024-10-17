/* eslint-disable */
import React from "react";

function TrendingProducts() {
  const products = [
    {
      name: "Apple iPhone 13",
      item: "#FXZ-4567",
      price: "$999.29",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/08543d48e7a9f577b4d6d0d46a9ac36d319fc83838e8538d96cd62e18651783f?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    },
    {
      name: "Nike Air Jordan",
      item: "#FXZ-3456",
      price: "$72.40",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/86996dbdb6d56f5fa7d9cc883df6c5b4681d83ef613088748cd5e5c68c7c6c68?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    },
    {
      name: "Beats Studio 2",
      item: "#FXZ-9485",
      price: "$99.90",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/86996dbdb6d56f5fa7d9cc883df6c5b4681d83ef613088748cd5e5c68c7c6c68?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    },
    {
      name: "Apple Watch Series 7",
      item: "#FXZ-2345",
      price: "$249.99",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/86996dbdb6d56f5fa7d9cc883df6c5b4681d83ef613088748cd5e5c68c7c6c68?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    },
    {
      name: "Amazon Echo Dot",
      item: "#FXZ-8959",
      price: "$79.40",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/86996dbdb6d56f5fa7d9cc883df6c5b4681d83ef613088748cd5e5c68c7c6c68?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    },
    {
      name: "PlayStation Console",
      item: "#FXZ-7892",
      price: "$129.48",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f55228c372499f79a9bcdfdf825a2ba98a86386020fdf47cdba8ffc0c046d520?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
    },
  ];

  return (
    <section className="flex flex-col w-[33%] max-md:w-full">
      <div className="flex flex-col mx-auto w-full bg-white rounded-2xl h-[466px] max-md:mt-7">
        <div className="flex items-start px-6 pt-6 w-full max-md:px-5">
          <h2 className="flex-1 shrink basis-0 min-w-[240px] text-lg font-semibold tracking-tight leading-none text-zinc-800">
            Trending Products
          </h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a636f0e1802509ae91f8f73edf8417658576be3d8490c535a0d7a53ca4d24cb8?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
            className="object-contain shrink-0 aspect-square w-[22px]"
            alt=""
          />
        </div>
        <div className="flex flex-col px-6 pt-4 pb-6 w-full max-md:px-5">
          {products.map((product, index) => (
            <div key={index} className="flex gap-4 items-center mt-5 w-full">
              <div className="flex flex-col justify-center self-stretch px-2.5 py-1.5 my-auto w-[46px]">
                <img
                  loading="lazy"
                  src={product.image}
                  className="object-contain aspect-square w-[34px]"
                  alt={product.name}
                />
              </div>
              <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
                <div className="text-base font-bold leading-snug text-zinc-800">
                  {product.name}
                </div>
                <div className="text-sm leading-loose text-neutral-400">
                  {product.item}
                </div>
              </div>
              <div className="self-stretch my-auto text-base font-medium leading-none text-right text-zinc-800">
                {product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingProducts;

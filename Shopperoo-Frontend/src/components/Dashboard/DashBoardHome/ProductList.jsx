/* eslint-disable */
import React from "react";

function ProductList() {
  const products = [
    { name: "Apple iPhone 13", orders: 506, status: "Stock", price: "$999.29" },
    { name: "Nike Air Jordan", orders: 506, status: "Stock", price: "$72.40" },
    { name: "Beats Studio 2", orders: 506, status: "Stock", price: "$99.90" },
    {
      name: "Apple Watch Series 7",
      orders: 506,
      status: "Out",
      price: "$249.99",
    },
    { name: "Amazon Echo Dot", orders: 506, status: "Stock", price: "$79.40" },
  ];

  return (
    <section className="flex flex-col w-[67%] max-md:w-full">
      <div className="flex flex-col mx-auto w-full bg-white rounded-2xl max-md:mt-7 max-md:max-w-full">
        <div className="flex flex-wrap items-start px-6 pt-6 w-full text-lg font-semibold tracking-tight leading-none text-zinc-800 max-md:px-5 max-md:max-w-full">
          <h2 className="flex-1 shrink min-w-[240px] max-md:max-w-full">
            Best Selling Products
          </h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a636f0e1802509ae91f8f73edf8417658576be3d8490c535a0d7a53ca4d24cb8?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
            className="object-contain shrink-0 aspect-square w-[22px]"
            alt=""
          />
        </div>
        <div className="flex flex-col p-6 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap w-full text-sm font-medium uppercase bg-gray-50 border-b border-solid border-b-zinc-300 text-neutral-400 max-md:max-w-full">
            <div className="flex-1 shrink gap-1 self-stretch px-5 py-2 h-full whitespace-nowrap border-0 border-solid border-zinc-300 min-w-[240px] w-[260px]">
              Product
            </div>
            <div className="flex-1 shrink gap-1 self-stretch py-2 pr-2.5 pl-5 h-full border-0 border-solid basis-[11px] border-zinc-300">
              Total Order
            </div>
            <div className="flex-1 shrink gap-1 self-stretch px-5 py-2 h-full whitespace-nowrap border-0 border-solid border-zinc-300">
              Status
            </div>
            <div className="flex-1 shrink gap-1 self-stretch px-5 py-4 my-auto whitespace-nowrap border-0 border-solid border-zinc-300">
              Price
            </div>
          </div>
          Continuing from where we left off:
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-4 items-center mt-5 w-full max-md:max-w-full">
              <div className="flex flex-col justify-center self-stretch px-2.5 py-1.5 my-auto w-[46px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/08543d48e7a9f577b4d6d0d46a9ac36d319fc83838e8538d96cd62e18651783f?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
                  className="object-contain aspect-[0.76] w-[26px]"
                  alt={product.name}
                />
              </div>
              <div className="self-stretch my-auto text-base font-bold leading-snug text-zinc-800 w-[202px]">
                {product.name}
              </div>
              <div className="self-stretch my-auto text-base font-medium leading-none text-zinc-800 w-[129px]">
                {product.orders}
              </div>
              <div
                className={`flex gap-2 items-center self-stretch my-auto text-base font-medium leading-none ${product.status === "Stock" ? "text-green-500" : "text-red-600"} whitespace-nowrap w-[127px]`}>
                <div
                  className={`flex shrink-0 self-stretch my-auto w-2 h-2 ${product.status === "Stock" ? "bg-green-500" : "bg-red-600"} rounded-full`}></div>
                <div className="self-stretch my-auto w-[129px]">
                  {product.status}
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

export default ProductList;

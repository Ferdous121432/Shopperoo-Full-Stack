/* eslint-disable */
import React from "react";

function RecentOrders() {
  const orders = [
    {
      id: "#6548",
      customer: "Joseph Wheeler",
      status: "Pending",
      total: "$999.29",
    },
    {
      id: "#6548",
      customer: "Joseph Wheeler",
      status: "Completed",
      total: "$72.40",
    },
    {
      id: "#6548",
      customer: "Joseph Wheeler",
      status: "Pending",
      total: "$99.90",
    },
    {
      id: "#6548",
      customer: "Joseph Wheeler",
      status: "Pending",
      total: "$249.99",
    },
    {
      id: "#6548",
      customer: "Joseph Wheeler",
      status: "Completed",
      total: "$79.40",
    },
  ];

  return (
    <section className="flex flex-col w-[67%] max-md:w-full">
      <div className="flex flex-col mx-auto w-full bg-white rounded-2xl min-h-[420px] max-md:mt-7 max-md:max-w-full">
        <div className="flex flex-wrap items-start px-6 pt-6 w-full text-lg font-semibold tracking-tight leading-none text-zinc-800 max-md:px-5 max-md:max-w-full">
          <h2 className="flex-1 shrink min-w-[240px] max-md:max-w-full">
            Recent Orders
          </h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a636f0e1802509ae91f8f73edf8417658576be3d8490c535a0d7a53ca4d24cb8?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
            className="object-contain shrink-0 aspect-square w-[22px]"
            alt=""
          />
        </div>
        <div className="flex flex-col px-6 pt-6 w-full text-base font-medium h-[296px] text-zinc-800 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap w-full text-sm uppercase whitespace-nowrap bg-gray-50 border-b border-solid border-b-zinc-300 text-neutral-400 max-md:max-w-full">
            <div className="flex-1 shrink gap-1 self-stretch px-5 py-2 h-full border-0 border-solid border-zinc-300">
              ID
            </div>
            <div className="flex-1 shrink gap-1 self-stretch py-2 pr-2.5 pl-5 h-full border-0 border-solid basis-[11px] border-zinc-300">
              Customer
            </div>
            <div className="flex-1 shrink gap-1 self-stretch px-5 py-2 h-full border-0 border-solid border-zinc-300">
              Status
            </div>
            <div className="flex-1 shrink gap-1 self-stretch px-5 py-4 my-auto border-0 border-solid border-zinc-300">
              Total
            </div>
          </div>
          {orders.map((order, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-8 items-center px-4 py-2 mt-5 w-full leading-none max-md:max-w-full">
              <div className="flex-1 shrink self-stretch my-auto font-semibold basis-0">
                {order.id}
              </div>
              <div className="flex-1 shrink self-stretch my-auto basis-0">
                {order.customer}
              </div>
              <div
                className={`flex-1 shrink gap-2 self-stretch my-auto ${order.status === "Completed" ? "text-green-500" : "text-yellow-400"} whitespace-nowrap w-[129px]`}>
                {order.status}
              </div>
              <div className="flex-1 shrink self-stretch my-auto basis-0">
                {order.total}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentOrders;

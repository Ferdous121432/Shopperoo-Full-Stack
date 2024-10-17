/* eslint-disable */
import React from "react";
import OrderRow from "./OrderRow";

function OrderTable() {
  const orders = [
    {
      id: "#6548",
      created: "2 min ago",
      customer: "Joseph Wheeler",
      total: "$654",
      profit: "$154",
      profitPercentage: "16%",
      status: "Pending",
    },
    {
      id: "#6548",
      created: "2 min ago",
      customer: "Joseph Wheeler",
      total: "$654",
      profit: "$154",
      profitPercentage: "16%",
      status: "Pending",
    },
    {
      id: "#6548",
      created: "2 min ago",
      customer: "Joseph Wheeler",
      total: "$654",
      profit: "$154",
      profitPercentage: "16%",
      status: "Pending",
    },
    {
      id: "#6548",
      created: "2 min ago",
      customer: "Joseph Wheeler",
      total: "$654",
      profit: "$154",
      profitPercentage: "16%",
      status: "Pending",
    },
    {
      id: "#6548",
      created: "2 min ago",
      customer: "Joseph Wheeler",
      total: "$654",
      profit: "$154",
      profitPercentage: "16%",
      status: "Pending",
    },
    {
      id: "#6548",
      created: "2 min ago",
      customer: "Joseph Wheeler",
      total: "$654",
      profit: "$154",
      profitPercentage: "16%",
      status: "Pending",
    },
    {
      id: "#6548",
      created: "2 min ago",
      customer: "Joseph Wheeler",
      total: "$654",
      profit: "$154",
      profitPercentage: "16%",
      status: "Pending",
    },
    {
      id: "#6548",
      created: "2 min ago",
      customer: "Joseph Wheeler",
      total: "$654",
      profit: "$154",
      profitPercentage: "16%",
      status: "Pending",
    },
    {
      id: "#6548",
      created: "2 min ago",
      customer: "Joseph Wheeler",
      total: "$654",
      profit: "$154",
      profitPercentage: "16%",
      status: "Pending",
    },
    {
      id: "#6548",
      created: "2 min ago",
      customer: "Joseph Wheeler",
      total: "$654",
      profit: "$154",
      profitPercentage: "16%",
      status: "Pending",
    },
  ];

  return (
    <section className="flex flex-col pt-2 mt-4 bg-white rounded-2xl max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap items-start pr-6 pl-4 w-full text-sm font-medium uppercase border-b border-violet-100 text-neutral-400 max-md:pr-5 max-md:max-w-full">
          <div className="flex-1 shrink gap-1 self-stretch px-5 py-4">
            Order id
          </div>
          <div className="flex-1 shrink gap-1 self-stretch px-5 py-4 whitespace-nowrap w-[61px]">
            Created
          </div>
          <div className="flex-1 shrink gap-1 self-stretch px-5 py-4 whitespace-nowrap">
            customer
          </div>
          <div className="flex-1 shrink gap-1 self-stretch px-5 py-4 whitespace-nowrap">
            total
          </div>
          <div className="flex-1 shrink gap-1 self-stretch px-5 py-4 whitespace-nowrap">
            profit
          </div>
          <div className="flex-1 shrink gap-1 self-stretch px-5 py-4 whitespace-nowrap">
            Status
          </div>
          <div className="flex gap-1 py-3.5 min-h-[48px]" />
        </div>
        {orders.map((order, index) => (
          <OrderRow key={index} {...order} />
        ))}
      </div>
    </section>
  );
}

export default OrderTable;

/* eslint-disable */
import React from "react";

function OrderTable() {
  const orders = [
    { id: "#5089", date: "31 March 2023", total: "$1200", status: "Pending" },
    { id: "#5089", date: "31 March 2023", total: "$1200", status: "Completed" },
    { id: "#5089", date: "31 March 2023", total: "$1200", status: "Pending" },
    { id: "#5089", date: "31 March 2023", total: "$1200", status: "Pending" },
    { id: "#5089", date: "31 March 2023", total: "$1200", status: "Completed" },
  ];

  return (
    <section className="flex flex-col w-[59%] max-md:w-full">
      <div className="flex flex-col mx-auto w-full bg-white rounded-2xl max-md:mt-7 max-md:max-w-full">
        <div className="flex flex-wrap items-start px-6 pt-6 max-md:px-5">
          <h2 className="flex-1 shrink basis-0 min-w-[240px] text-lg font-semibold tracking-tight leading-none text-zinc-800 max-md:max-w-full">
            Reports
          </h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ce08cf3fb82a85cb5631c571aeeae1c053a30ed40e91012398675cd70f8e385?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
            className="object-contain shrink-0 aspect-square w-[22px]"
            alt=""
          />
        </div>
        <div className="flex flex-wrap gap-5 items-start self-center mt-6 max-md:max-w-full">
          <StatItem value="24k" label="Customers" isActive={true} />
          <StatItem value="3.5k" label="Total Products" />
          <StatItem value="2.5k" label="Stock Products" />
          <StatItem value="0.5k" label="Out of Stock" />
          <StatItem value="250k" label="Revenue" />
        </div>
        <div className="flex flex-col px-2.5 mx-6 mt-12 text-sm leading-loose text-center whitespace-nowrap text-zinc-600 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 w-full max-md:max-w-full">
            <div className="flex flex-col justify-between items-end">
              <div className="text-right">50k</div>
              <div className="mt-4">40k</div>
              <div className="mt-4">30k</div>
              <div className="mt-4">20k</div>
              <div className="mt-4">10k</div>
              <div className="mt-4">0k</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8a52245-7244-4d34-9015-ff7ee0a36cab?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
              className="object-contain flex-1 shrink self-start w-full aspect-[2.63] basis-0 min-w-[240px] max-md:max-w-full"
              alt="Sales chart"
            />
          </div>
          <div className="flex w-full min-h-[1px] max-md:max-w-full" />
          <div className="flex flex-wrap gap-10 justify-between items-center pt-2.5 pl-16 w-full max-md:pl-5 max-md:max-w-full">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="self-stretch my-auto">
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label, isActive = false }) {
  const borderClass = isActive
    ? "border-blue-600 border-b-[3px]"
    : "border-b border-violet-100";
  return (
    <div
      className={`flex flex-col justify-center px-2 py-4 whitespace-nowrap ${borderClass} w-[100px]`}>
      <div className="text-2xl font-bold leading-none text-zinc-800">
        {value}
      </div>
      <div className="mt-2 text-sm font-medium tracking-tight leading-none text-neutral-400">
        {label}
      </div>
    </div>
  );
}

export default OrderTable;

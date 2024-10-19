/* eslint-disable */
import React from "react";
import StatCard from "./StatCard";
import Chart from "./Chart";
import OrderTable from "./OrderTable";
import ProductList from "./ProductList";
import TrendingProducts from "./TrendingProducts";
import TodayOrder from "./TodayOrder";
import RecentOrders from "./RecentOrders";
import Dashboard from "../Dashboard";

function DashboardHome() {
  return (
    // <Dashboard>
    <main className="flex flex-col">
      {/* <header className="flex flex-col w-full max-md:mr-0.5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-2.5 justify-center py-3 w-full rounded-md shadow-sm min-h-[62px] max-md:max-w-full">
          <h1 className="flex-1 shrink gap-2.5 self-stretch h-full text-2xl font-bold leading-none whitespace-nowrap min-w-[240px] text-zinc-800 max-md:max-w-full">
            Dashboard
          </h1>
          <div className="flex gap-6 items-center self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d68676d1c19fcea6ab48a48328c3ea25cebac8d81f7956bf491ad55c1f98dda3?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
              className="object-contain shrink-0 self-stretch my-auto w-7 aspect-[0.76]"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cce7854098ee9a51b5057eaf692425ad571d96a8ea8d5e66bc71e40bf365424c?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[38px]"
              alt=""
            />
          </div>
        </div>
      </header> */}
      <section className="mt-6 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <StatCard
            title="Total Sales & Costs"
            period="Last 7 days"
            mainValue="$350K"
            secondaryValue="$235K"
            change={8.56}
            changeText="vs last 7 days"
          />
          <Chart
            title="Sessions"
            period="Last 7 days"
            value="16.5K"
            change={-3}
            changeText="vs last 7 days"
          />
        </div>
      </section>
      <section className="mt-6 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <StatCard
            title="Total Orders"
            period="Last 7 days"
            mainValue="25.7K"
            change={6}
            changeText="vs last 7 days"
            chartSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/503b5082-6b53-486b-ab9e-64433b91e457?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
          />
          <StatCard
            title="Total Profit"
            period="Last 7 days"
            mainValue="50K"
            change={12}
            changeText="vs last 7 days"
            chartSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5df1c0b3-5444-425b-8726-5571b9979843?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
          />
          <StatCard
            title="Discounted Amount"
            period="Last 7 days"
            mainValue="12K"
            change={-2}
            changeText="vs last 7 days"
            chartSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1940d18a-eeab-41df-b0bd-e04850599e5f?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0"
          />
        </div>
      </section>
      <section className="mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <OrderTable />
          <TrendingProducts />
        </div>
      </section>
      <section className="mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <TodayOrder />
          <RecentOrders />
        </div>
      </section>
    </main>
    // </Dashboard>
  );
}

export default DashboardHome;

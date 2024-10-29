/* eslint-disable */
import React, { useEffect } from "react";
import { useState } from "react";
import cookie from "js-cookie";

import { useAuth } from "../context/AuthProvider";
import Button from "../reuseableComponents/Button";
import CustopTabs from "../components/SingleProduct/CustomTabs";
import UserDetails from "../components/UserDashboard/UserDetails";
import UserOrders from "../components/UserDashboard/UserOrders";
import Layout from "../components/Layout";
import { getOrdersByUser } from "../api/order";
import SpinnerFullPage from "../components/SpinnerFullPage";

const UserDashboard = () => {
  const { state, dispatch, logout } = useAuth();
  const userData = state.userData ? state.userData : [];
  console.log(userData);
  const [loading, setLoading] = useState(true);

  const user = {
    avatar: userData.avatar,
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    window.location.href = "/signin";
  };

  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // User orders

  const [orders, setOrders] = React.useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const orders = await getOrdersByUser(state.token);
        setOrders(orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Tab data
  const tabData = [
    {
      label: "User Details",
      slug: "user-details",
      value: "0",
      // content: userDetails,
      content: <UserDetails />,
    },
    {
      label: "My Orders",
      slug: "my-orders",
      value: "1",
      content: <UserOrders orders={orders} />,
    },
    {
      label: "Wishlist",
      slug: "wishlist",
      value: "2",
      content:
        "This is the reviews content. Here you can add customer reviews and ratings.",
    },
    {
      label: "Reviews",
      slug: "reviews",
      value: "3",
      content:
        "This is the reviews content. Here you can add customer reviews and ratings.",
    },
  ];

  //  data loading error
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    if (!userData) {
      const timer = setTimeout(() => {
        <SpinnerFullPage />;
        setLoadingError(true);
      }, 5000); // 5 seconds timeout

      return () => clearTimeout(timer);
    }
  }, [userData]);

  if (loadingError) {
    return (
      <Layout>
        <div className="items-center justify-center align-middle">
          Error loading page
        </div>
      </Layout>
    );
  }

  return (
    <div className="relative flex max-w-[1200px] flex-col justify-center gap-4 md:gap-10 lg:mx-20 lg:gap-16 lg:py-20">
      <div className="flex w-full justify-center py-14 md:py-20">
        <img
          className="w-[100px] rounded-full md:w-[200px]"
          src={user.avatar}
          alt="User Avatar"
        />
      </div>
      <div className="flex max-w-[1200px] justify-center">
        <CustopTabs
          tabData={tabData}
          flexDirection="column"
          orientation={window.innerWidth < 800 ? "vertical" : "horizontal"}
        />
      </div>
      <div className="flex w-full justify-center">
        <Button handleClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default UserDashboard;

/* eslint-disable */
import React, { useEffect } from "react";
import { useState } from "react";
import cookie from "js-cookie";

import { useAuth } from "../context/AuthProvider";
import Button from "../reuseableComponents/Button";
import CustopTabs from "../components/SingleProduct/CustomTabs";

const UserDashboard = () => {
  const { state, dispatch, logout } = useAuth();
  const userData = state.userData ? state.userData : [];
  console.log(userData);

  const user = {
    address: userData.address,
    avatar: userData.avatar,
    cart: userData.cart || [],
    created_at: userData.created_at,
    dateOfBirth: userData.dateOfBirth,
    email: userData.email,
    firstName: userData.firstName,
    fullName: userData.fullName,
    id: userData.id,
    lastName: userData.lastName,
    phoneNumber: userData.phoneNumber,
    role: userData.role,
    updated_at: userData.updated_at,
    userName: userData.userName,
    _id: userData._id,
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

  const userDetails = (
    <div>
      <div>
        <h2>{user.fullName}</h2>
        <p>
          <strong>Username:</strong> {user.userName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {user.phoneNumber}
        </p>
        <p>
          <strong>Date of Birth:</strong>{" "}
          {new Date(user.dateOfBirth).toLocaleDateString()}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Address</h3>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Account Information</h3>
        <p>
          <strong>Account Created:</strong>{" "}
          {new Date(user.created_at).toLocaleString()}
        </p>
        <p>
          <strong>Last Updated:</strong>{" "}
          {new Date(user.updated_at).toLocaleString()}
        </p>
      </div>
    </div>
  );

  console.log(userDetails);

  const tabData = [
    {
      label: "User Details",
      value: "0",
      content: userDetails,
    },
    {
      label: "My Orders",
      value: "1",
      content:
        "This is the description content. Here you can add a detailed description of the product.",
    },
    {
      label: "Wishlist",
      value: "2",
      content:
        "This is the reviews content. Here you can add customer reviews and ratings.",
    },
    {
      label: "Reviews",
      value: "3",
      content:
        "This is the reviews content. Here you can add customer reviews and ratings.",
    },
  ];

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
      <div className="items-center justify-center align-middle">
        Error loading page
      </div>
    );
  }

  return (
    <div className="relative flex max-w-[1200px] flex-col justify-center gap-4 md:gap-10 lg:mx-20 lg:gap-16 lg:py-20">
      <div className="flex w-full justify-center">
        <img
          className="w-[100px] rounded-full md:w-[200px]"
          src={user.avatar}
          alt="User Avatar"
        />
      </div>
      <div className="flex justify-center">
        <CustopTabs
          tabData={tabData}
          flexDirection={window.innerWidth < 768 ? "column" : "row"}
          orientation={"vertical"}
        />
      </div>
      <div className="flex w-4/5 justify-center">
        <Button handleClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default UserDashboard;

/* eslint-disable */
import React from "react";
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

  const handleLogout = () => {
    logout();
    cookie.remove("token");
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

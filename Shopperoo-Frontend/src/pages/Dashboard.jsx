/* eslint-disable */
import React from "react";
import cookie from "js-cookie";
import { useAuth } from "../context/AuthProvider";

const Dashboard = () => {
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
    __v: userData.__v,
    _id: userData._id,
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>User Dashboard</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={user.avatar}
          alt="User Avatar"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        />
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
      <button
        onClick={() => {
          logout();
          cookie.remove("token");
          window.location.href = "/signin";
        }}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

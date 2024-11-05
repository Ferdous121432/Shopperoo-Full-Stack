import React from "react";
import UserDashboard from "./UserDashboard";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthProvider";
import LoginAgain from "../reuseableComponents/LoginAgain";

export default function UserProfile() {
  const { state } = useAuth();
  return (
    <Layout>
      <div className="flex w-full justify-center">
        <UserDashboard />
      </div>
    </Layout>
  );
}

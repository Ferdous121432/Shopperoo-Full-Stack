/* eslint-disable */
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
// import jwt from "jwt-decode";
import { useAuth } from "../context/AuthProvider";

export default function About() {
  const [jwt, setJwt] = useState(null);
  const { state } = useAuth();

  useEffect(() => {
    const token = Cookies.get("jwt");
    setJwt(token);
    console.log(token);
  }, []);

  return <div>{jwt ? <p>JWT: {jwt}</p> : <p>No JWT found</p>}</div>;
}

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState("");
  const loginEmailRef = useRef();
  const passRef = useRef();
  const LOCAL_STORAGE_KEY = "token";
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  function handleLogin() {
    const loginEmail = loginEmailRef.current.value;
    const password = passRef.current.value;
    const qs = require("qs");
    axios
      .post(
        "https://edeaf-api-staging.azurewebsites.net/connect/token",
        qs.stringify({
          grant_type: "password",
          client_id: "web-dashboard",
          client_secret: "SuperSecretPassword",
          scope: "openid profile role email offline_access adminApi mobileApi",
          username: loginEmail,
          password: password,
        })
      )
      .then((response) => {
        const token = response.data.access_token;
        console.log(token);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(token));
        navigate("/register");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Login");
  }

  return (
    <div>
      <h1>Sign in</h1>
      <input ref={loginEmailRef} type="text" placeholder="email" />
      <input ref={passRef} type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

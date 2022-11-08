import React, { useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();
  const LOCAL_STORAGE_KEY = "token";
  let currUser = null;
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://edeaf-api-staging.azurewebsites.net/v1/admin/Users/current",
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)),
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        currUser = response.data.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleUpdate() {
    const name = nameRef.current.value;
    const surname = surnameRef.current.value;
    const email = emailRef.current.value;
    const role = roleRef.current.value;
    console.log(name, surname, email, role);
    console.log(localStorage.getItem(LOCAL_STORAGE_KEY));

    const qs = require("qs");
    axios
      .put(
        `https://edeaf-api-staging.azurewebsites.net/v1/admin/Users/${currUser.id}`,
        {
          name: name,
          lastname: surname,
          email: email,
          role: role,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)),
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleHome() {
    navigate("/home");
  }

  return (
    <div>
      <h1>Update</h1>
      <input ref={nameRef} type="text" placeholder="Enter name" />
      <input ref={surnameRef} type="text" placeholder="Enter surname" />
      <input ref={emailRef} type="text" placeholder="Enter email" />
      <input ref={roleRef} type="text" placeholder="Enter role" />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleHome}>Home</button>
    </div>
  );
}

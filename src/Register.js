import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();
  const LOCAL_STORAGE_KEY = "token";
  let navigate = useNavigate();

  function handleHome() {
    navigate("/home");
  }

  function handleRegister() {
    const name = nameRef.current.value;
    const surname = surnameRef.current.value;
    const email = emailRef.current.value;
    const role = roleRef.current.value;
    console.log(name, surname, email, role);
    console.log(localStorage.getItem(LOCAL_STORAGE_KEY));

    const qs = require("qs");
    axios
      .post(
        "https://edeaf-api-staging.azurewebsites.net/v1/admin/Users",
        {
            name: name,
            surname: surname,
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

  function handleUpdate(){
    navigate("/update");
  }

  return (
    <div>
      <h1>Invite user</h1>
      <input ref={nameRef} type="text" placeholder="name" />
      <input ref={surnameRef} type="text" placeholder="surname" />
      <input ref={emailRef} type="text" placeholder="email" />
      <input ref={roleRef} type="text" placeholder="role" />
      <button onClick={handleRegister}>Invite</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleHome}>Home</button>
    </div>
  );
}

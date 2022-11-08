import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditTag() {
  const tag = JSON.parse(localStorage.getItem("tagId"));
  const nameRef = useRef();
  const colorRef = useRef();
  let navigate = useNavigate();

  function handleUpdate() {
    console.log(tag.id);
    axios
      .put(
        "https://edeaf-api-staging.azurewebsites.net/admin/Tags/" + tag.id,
        {
          name: nameRef.current.value,
          color: colorRef.current.value,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/tags");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleCancel() {
    navigate("/tags");
  }

  return (
    <div>
      <h2>{tag.name}</h2>
      <input ref={nameRef} type="text" placeholder="Edit Tag Name" />
      <input ref={colorRef} type="text" placeholder="Edit Tag color" />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

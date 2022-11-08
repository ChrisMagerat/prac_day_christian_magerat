import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const LOCAL_STORAGE_KEY = "token";
  let navigate = useNavigate();
  let [catData, setCatDat] = useState([]);

  useEffect(() => {
    axios
      .get("https://edeaf-api-staging.azurewebsites.net/v1/admin/Categories", {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)),
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setCatDat(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleTags() {
    navigate("/tags");
  }

  function handleAddWord() {
    navigate("/addword");
  }

  return (
    <div>
      <h1>Categories</h1>
      <h3>You can click on the different categories</h3>
      <Category catData={catData} />
      <button onClick={handleAddWord}>Add Word</button>
      <button onClick={handleTags}>Tags</button>
    </div>
  );
}

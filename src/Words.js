import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Word from './Word';

export default function Words() {
    let navigate = useNavigate();
    const [wordData, setWordData] = useState([]);
    const LOCAL_STORAGE_KEY2 = "catId";
    const categoryID = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2));

    useEffect(() => {
        if (categoryID === null) {
            navigate('/home');
        }else{
            axios
            .get(`https://edeaf-api-staging.azurewebsites.net/v1/admin/Words`, {
                headers: {
                    Authorization:
                        "Bearer " + JSON.parse(localStorage.getItem("token")),
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {   
                console.log(response.data.data.items);
                setWordData(response.data.data.items);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [])

    function handleHome() {
        navigate("/home");
    }

  return (
    <div>
        <h1>Words</h1>
        <Word wordData={wordData}/>
        <button onClick={handleHome}>Home</button>
    </div>
  )
}

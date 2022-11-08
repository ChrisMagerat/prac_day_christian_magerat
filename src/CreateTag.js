import React, {useRef} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateTag() {
    const navigate = useNavigate();
    const nameRef = useRef();
    const colorRef = useRef();

    function handleCreate(){
        axios.post("https://edeaf-api-staging.azurewebsites.net/v1/admin/Tags", {
            name: nameRef.current.value,
            color: colorRef.current.value
        }, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            console.log(response);
            navigate("/tags");
        })
        .catch((error) => {
            console.log(error);
        });
    }

  return (
    <div>
        <h1>CreateTag</h1>
        <input ref={nameRef} type="text" placeholder="Tag Name" />
        <input ref={colorRef} type="text" placeholder="Tag Color" />
        <button onClick={handleCreate}>Create</button>
    </div>
  )
}

import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PrintTag({tag}) {
    const navigate = useNavigate();
    function handleDelete() {
        console.log(tag.id);
        axios.delete('https://edeaf-api-staging.azurewebsites.net/v1/admin/Tags/' + tag.id, {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log(response);
            navigate('/tags');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    function handleEdit() {
        console.log(tag.id);
        localStorage.setItem('tagId', JSON.stringify(tag));
        navigate('/edittag');
    }

  return (
    <div>
        <h2>{tag.name}</h2>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Tag from './Tag';

export default function Tags() {
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://edeaf-api-staging.azurewebsites.net/v1/admin/Tags', {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            setTags(response.data.data.items);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    function handleHome() {
        navigate('/home');
    }

    function handleCreateTag() {
        navigate('/createtag');
    }

  return (
    <div>
        <h1>Tags</h1>
        <Tag tags={tags} />
        <h3>Create a Tag</h3>
        <button onClick={handleCreateTag}>Create Tag</button>
        <button onClick={handleHome}>Home</button>
    </div>
  )
}

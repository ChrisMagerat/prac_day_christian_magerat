import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CatName({name}) {
    const LOCAL_STORAGE_KEY2 = "catId";
    let navigate = useNavigate();
    function handleClick() {
        localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(name.id));
        navigate('/words');
    }
  return (
    <div>
        <h2 onClick={handleClick}>{name.name}</h2>
    </div>
  )
}

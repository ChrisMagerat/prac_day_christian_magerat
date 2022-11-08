import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddWord() {
    let navigate = useNavigate();

    function handleHome() {
        navigate('/home');
    }

  return (
    <div>
        <h1>Add Word</h1>
        
        <button onClick={handleHome}>Home</button>
    </div>
  )
}

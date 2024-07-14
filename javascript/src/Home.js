// src/Home.js
import React from 'react';
import axios from 'axios';
import './css/Home.css';
import TypeWriter from './TypeWriter';

function Home() {

    const handleClick = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/some-function');
            console.log(response.data);
            } 
        catch (error) {
            console.error(error); 
            }
    };
  
  return (
    <div className='Home'>
        <header className="Home-header">
            <h1>Hello, there</h1>
            <h1><TypeWriter content='Hello, there' speed={250} /></h1>
            <p>Welcome, Daniel</p>
        </header>
        
      <button className='wotdButton' onClick={handleClick}>Call Backend Function</button>
    </div>



  );
}

export default Home;

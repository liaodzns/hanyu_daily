// src/Home.js
import React from 'react';
import axios from 'axios';

function Home() {
  const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/some-function');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div>
      <h1>Home Page</h1>
      <p>Welcome, Daniel</p>
      <button onClick={handleClick}>Call Backend Function</button>
    </div>



  );
}

export default Home;

// src/Home.js
import React,  { useState }  from 'react';
import axios from 'axios';
import './css/Home.css';
import TypeWriter from './TypeWriter';
// import { Link } from 'react-router-dom';

function Home() {
  const [wordData, setWordData] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('hanyu2'); // Default level

    const fetchWord = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/generate-word', { level: selectedLevel});
            console.log(response.data);
            setWordData(response.data);
            } 
        catch (error) {
            console.error('Error fetching word:', error); 
            }
    };

    const resetChosen = async () => {
      try {
        await axios.post('http://localhost:8000/api/reset-chosen', {
          level: selectedLevel
        });
        alert('Reset successful');
      } catch (error) {
        console.error('Error resetting chosen words:', error);
      }
    };
  
  return (
    <div className='Home'>
        <header className="Home-header">
            <h1><TypeWriter content='Hello, there' speed={250} /></h1>
            <p>Welcome</p>
            <div className="level-selector">
              <label htmlFor="level">Choose a level:</label>
              <select
                id="level"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="hanyu2">Hanyu 2</option>
                <option value="hanyu3">Hanyu 3</option>
                <option value="hanyu4">Hanyu 4</option>
                <option value="hanyu5">Hanyu 5</option>
                <option value="hanyu6">Hanyu 6</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <p>Click the button below to receive a word:</p>
            <button className='wotdButton' onClick={fetchWord}>Click here {/* <Link to="/random" className="nav-link">Click Here</Link> */}</button>
            {wordData && (
              <div className="word-container">
                <p>{wordData.pinyin}</p>
                <h2>{wordData.hanyu}</h2>
                <p>"{wordData.translation}"</p>
              </div>
            )}

            <button className='resetButton' onClick={resetChosen}>Reset</button>
        </header>
    </div>
  );
}

export default Home;

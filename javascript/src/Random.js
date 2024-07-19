import React from 'react';
import './css/Random.css';
import axios from 'axios';

function Random() {

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
        <div className='Random'>
        <header className='Random-header'>
            <h1 className='Random-title'>The word is:</h1>
            <p className='Random-me'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id neque urna. 
            Sed egestas diam vel imperdiet varius. Morbi commodo leo ac diam ultricies, eu condimentum felis dignissim. 
            Curabitur venenatis lorem vitae facilisis imperdiet. Pellentesque nec urna eu felis volutpat fermentum. 
            Duis nec feugiat erat. Morbi iaculis condimentum nisl eget interdum. Vivamus vitae lacinia nisi. 
            Etiam neque massa, accumsan quis fringilla et, auctor at massa.
            </p>
        </header>

    </div>
  );
}

export default Random;

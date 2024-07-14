// src/About.js
import React from 'react';
import './css/About.css';

function About() {
  return (
    <div className='About'>
      <header className='About-header'>
        <h1 className='About-title'>About Me</h1>
        <p className='About-me'>
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

export default About;

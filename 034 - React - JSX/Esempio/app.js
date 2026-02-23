import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = '';
const background = <img class='background' alt='ocean' src='/images/ocean.jpg'/>;

const showBackground = true;

function displayFact(e) {
  const target = animals[e.target.alt].facts
  const funFact = target[Math.floor(Math.random() * target.length)];
  document.getElementById('fact').innerHTML = funFact;
}

const images = []
for(let i = 0; i < Object.keys(animals).length; i++) {
    const name = Object.keys(animals)[i];
    const animal = (
      <img key={name} 
      className='animal'
      alt={name}
      src={animals[name].image}
      aria-label={name}
      role='button'
      onClick={displayFact}/>
    );
    images.push(animal);
}

const animalFacts = (
  <div>
    <h1>
      {title || 'Click an animal for a fun fact'}
    </h1>
    {showBackground && background}
    <div className='animals'>
      {images}
    </div>
    <p id='fact'></p>
  </div>
);

root.render(animalFacts);
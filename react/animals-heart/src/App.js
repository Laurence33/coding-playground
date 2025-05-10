import './App.css';
import React, { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}



function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals(prevAnimals => {
      return [...prevAnimals, getRandomAnimal()];
    });
  }

  return <div className="app">
    <button onClick={handleClick}>Add Animal</button>
    <div className="animal-list">
      {animals.map((animal, index) => (<AnimalShow key={index} type={animal} />))}
    </div>
  </div>
}

export default App;
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

  return <>
    <button onClick={handleClick}>Add Animal</button>
    {animals.map((animal, index) => (<AnimalShow key={index} type={animal} />))}
  </>
}

export default App;
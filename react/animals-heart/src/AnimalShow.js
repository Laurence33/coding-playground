
import { useState } from 'react';
import bird from './assets/svg/bird.svg';
import cat from './assets/svg/cat.svg';
import cow from './assets/svg/cow.svg';
import dog from './assets/svg/dog.svg';
import gator from './assets/svg/gator.svg';
import heart from './assets/svg/heart.svg';
import horse from './assets/svg/horse.svg';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator, heart, horse
}
function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0)
  const handleClick = () => {
    setClicks(prev => prev + 1);
  }
  return <div onClick={handleClick}>
    <img alt={type} src={svgMap[type]} />
    <img alt='heart' src={heart} style={{
      width: 10 + 10 * clicks + 'px'
    }} />
  </div>
}

export default AnimalShow;
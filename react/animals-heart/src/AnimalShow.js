
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
  return <div>
    <img alt={type} src={svgMap[type]} />
  </div>
}

export default AnimalShow;
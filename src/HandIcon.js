import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const HANDICON_IMAGE = {
  rock: rockImg, scissor: scissorImg, paper: paperImg
};

function HandIcon({value}) {
  const src = HANDICON_IMAGE[value];
  const alt = `${value}`;
  return <img src={src} alt={alt} />
}

export default HandIcon;
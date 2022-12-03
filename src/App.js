import { useState } from "react";
import Dice from "./Dice";
import HandIcon from "./HandIcon";
import HandButton from "./HandButton";
import Button from "./Button";
import { compareHand, generateRandomHand, random } from './utils';

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function App() {
  const [hand, setHand] = useState('rock');
  const [otherHand, setOtherHand] = useState('rock')

  const handleClick = (value) => console.log(value);

  const handleButtonClick = (nextHand) => {
    setHand(nextHand);
    setOtherHand(generateRandomHand());
  }

  const handleClearClick = () => {
    setHand('rock');
    setOtherHand('rock');
  };

  // const handleRollClick = () => {
  //   const nextNum = random(6);
  //   setNum(nextNum);
  // }


  return (
    <div>
      <div>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand} />
        vs
        <HandIcon value={otherHand} />
      </div>
      <HandButton onClick={handleButtonClick} value='rock'/>
      <HandButton onClick={handleButtonClick} value='scissor'/>
      <HandButton onClick={handleButtonClick} value='paper'/>
    </div>
  );
}

export default App;
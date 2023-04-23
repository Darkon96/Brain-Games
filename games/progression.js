import readlineSync from 'readline-sync';
import { username, randomInteger } from '../src/index.js';

const progression = () => {
  const names = username();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3;) {
    let num = randomInteger(1, 50);
    const step = randomInteger(1, 10);
    const lengthArr = randomInteger(5, 15);
    const del = randomInteger(0, lengthArr - 1);
    let arr = [num];
    for (let y = 0; y < lengthArr - 1; y += 1) {
      num += step;
      arr.push(num);
    }
    const saveNum = arr[del];
    arr[del] = '..';
    arr = arr.toString().replaceAll(',', ' ');
    console.log(`Question: ${arr}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === saveNum) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${saveNum}'.`);
      console.log(`Let's try again, ${names}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${names}!`);
    }
  }
};

export default progression;

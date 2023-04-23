import readlineSync from 'readline-sync';
import { username, randomInteger } from '../src/index.js';

const testPrime = (n) => {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let x = 2; x < n; x += 1) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const names = username();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3;) {
    const num = randomInteger(1, 20);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const question = (((answer === 'yes') && ((testPrime(num) === true))) || ((answer === 'no') && ((testPrime(num) === false))));
    if (question) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log('\'Yes\' is wrong answer ;(. Correct answer was \'No\'.');
      console.log(`Let's try again, ${names}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${names}!`);
    }
  }
};

export default prime;

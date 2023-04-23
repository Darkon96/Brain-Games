/* eslint-disable import/extensions */

import { randomInt, getGcd } from '../src/utils/functions.js';
import game from '../src/index.js';

const highBorderOfNumbers = 100;
const minMultiplyer = 2;
const maxMultiplyer = highBorderOfNumbers / 10;

const task = 'Find the greatest common divisor of given numbers.';

const getRandomNumbersForGame = () => {
  const multy = randomInt(minMultiplyer, maxMultiplyer);
  const num1 = multy * randomInt(2, 10);
  let num2 = num1;
  while (num1 === num2) {
    num2 = multy * randomInt(2, 10);
  }
  return { num1, num2 };
};

const getGreatestCommonDivisor = (n1, n2) => {
  const minNumber = n1 < n2 ? n1 : n2;
  let divisor = minNumber;
  while (divisor > 2) {
    if ((getGcd(n1, divisor) === true) && (getGcd(n2, divisor) === true)) {
      break;
    }
    divisor -= 1;
  }
  return divisor;
};

const getData = () => {
  const { num1, num2 } = getRandomNumbersForGame();
  const answer = String(getGreatestCommonDivisor(num1, num2));
  const question = `${num1} ${num2}`;
  return { question, answer };
};

const gcd = () => game(task, getData);

export default gcd;

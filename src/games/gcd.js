import getRandomNumber from '../utils/functions.js';
import runEngine from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

function getGCD(x, y) {
  if (y > x) return getGCD(y, x);
  if (!y) return x;
  return getGCD(y, x % y);
}

const generateRound = () => {
  const number1 = getRandomNumber(2, 100);
  const number2 = getRandomNumber(2, 100);
  const answer = String(getGCD(number1, number2));
  const question = `${number1} ${number2}`;
  return { question, answer };
};

const runGCD = () => runEngine(task, generateRound);

export default runGCD;

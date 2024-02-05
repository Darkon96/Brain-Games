import { getRandomNumber} from '../utils/functions.js';
import game from '../index.js';

const highBorderOfNumbers = 100;
const minMultiplyer = 2;
const maxMultiplyer = highBorderOfNumbers / 10;

const task = 'Find the greatest common divisor of given numbers.';

const getRandomNumbersForGame = () => {
  const multy = getRandomNumber(minMultiplyer, maxMultiplyer);
  const number1 = multy * getRandomNumber(2, 10);
  let number2 = number1;
  while (number1 === number2) {
    number2 = multy * getRandomNumber(2, 10);
  }
  return { number1, number2 };
};

function getGreatestCommonDivisor(x, y) {
  if (y > x) return getGreatestCommonDivisor(y, x);
	if (!y) return x;
	return getGreatestCommonDivisor(y, x % y);
}

const getData = () => {
  const { number1, number2 } = getRandomNumbersForGame();
  const answer = String(getGreatestCommonDivisor(number1, number2));
  const question = `${number1} ${number2}`;
  return { question, answer };
};

const gcd = () => game(task, getData);

export default gcd;

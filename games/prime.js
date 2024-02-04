import { randomInt } from '../src/utils/functions.js';
import game from '../src/index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getData = () => {
  const question = randomInt(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

const prime = () => game(task, getData);

export default prime;

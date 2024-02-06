import getRandomNumber from '../utils/functions.js';
import runEngine from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};
const runEven = () => runEngine(task, generateRound);

export default runEven;

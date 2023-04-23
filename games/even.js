/* eslint-disable import/extensions */

import { randomInt } from '../src/utils/functions.js';
import game from '../src/index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getData = () => {
  const question = randomInt(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};
const even = () => game(task, getData);

export default even;

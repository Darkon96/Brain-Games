import { getRandomNumber } from '../utils/functions.js';
import game from '../index.js';

export const task = 'What number is missing in the progression?';

const getData = () => {
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 15);
  const indexOfHiddenNumber = getRandomNumber(0, length - 1);
  const firstMember = getRandomNumber(1, 20);
  const answer = String(firstMember + indexOfHiddenNumber * step);
  let question = '';
  for (let i = 0; i < length; i += 1) {
    const currentMember = firstMember + i * step;
    if (i !== indexOfHiddenNumber) {
      question = `${question}${currentMember} `;
    } else {
      question = `${question}.. `;
    }
  }
  question = question.trim();
  return { question, answer };
};

const progression = () => game(task, getData);

export default progression;

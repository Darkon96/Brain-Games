import { getRandomNumber, getProgression } from '../utils/functions.js';
import game from '../index.js';

export const task = 'What number is missing in the progression?';

const getData = () => {
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 15);
  const firstMember = getRandomNumber(1, 20);
  const arrayProgression = getProgression(step, length, firstMember);

  const indexOfHiddenNumber = getRandomNumber(0, length - 1);
  const answer = String(arrayProgression[indexOfHiddenNumber]);
  arrayProgression[indexOfHiddenNumber] = '..';
  const question = arrayProgression.toString().replaceAll(',', ' ');

  return { question, answer };
};

const progression = () => game(task, getData);

export default progression;

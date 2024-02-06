import getRandomNumber from '../utils/functions.js';
import runEngine from '../index.js';

export const task = 'What number is missing in the progression?';

function getProgression(step, length, firstMember) {
  const progression = [firstMember];
  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
}

const generateRound = () => {
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 15);
  const firstMember = getRandomNumber(1, 20);
  const progression = getProgression(step, length, firstMember);

  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, answer };
};

const runProgression = () => runEngine(task, generateRound);

export default runProgression;

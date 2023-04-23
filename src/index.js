/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';

const roundsCount = 3;

const game = (task, getQuestion) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(task || '');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  if (!task) {
    return;
  }
  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, answer } = getQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!\n');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`\nLet's try again, ${userName}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};

export default game;

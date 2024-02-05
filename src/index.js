/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';

const roundsCount = 3;

const game = (task, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, answer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;

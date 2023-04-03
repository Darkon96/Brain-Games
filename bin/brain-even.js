#!/usr/bin/env node
import readlineSync from 'readline-sync';

const game = () => {
    console.log('Welcome to the Brain Games!');
    const names = readlineSync.question('May I have your name? ');
    console.log(`Hello ${names}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3;) {
    const num = Math.round(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    if (((num % 2 === 0) && (answer === 'yes')) || ((num % 2 !== 0) && (answer === 'no'))) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${names}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${names}!`);
    }
  }
};
game();

export default game;

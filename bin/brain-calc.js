#!/usr/bin/env node
import readlineSync from 'readline-sync';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const names = readlineSync.question('May I have your name? ');
  console.log(`Hello ${names}!`);

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3;) {
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
    const op = Math.ceil(Math.random() * 3);
    let str = '';
    let num = 0;
    switch (op) {
      case 1:
        num = num1 + num2;
        str = '+';
        break;
      case 2:
        num = ((num1 > num2) ? (num1 - num2) : (num2 - num1));
        str = '-';
        break;
      default:
        num = num1 * num2;
        str = '*';
        break;
    }
    if ((op === 2) && (num1 < num2)) {
      (console.log(`Question: ${num2} ${str} ${num1}`));
    } else {
      (console.log(`Question: ${num1} ${str} ${num2}`));
    }
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === num) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${num}'.`);
      console.log(`Let's try again, ${names}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${names}!`);
    }
  }
};
calc();

export default calc;

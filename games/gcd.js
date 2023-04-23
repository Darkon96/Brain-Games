import readlineSync from 'readline-sync';
import { username, gcdCalc } from '../src/index.js';

const gcd = () => {
    const names = username();
      console.log('Find the greatest common divisor of given numbers.');
      for (let i = 0; i < 3;) {
        const num1 = Math.round(Math.random() * 100);
        const num2 = Math.round(Math.random() * 100);
        console.log(`Question: ${num1} ${num2}`);
        const answer = readlineSync.question('Your answer: ');
        const question = gcdCalc(num1, num2);
        if (answer == question) {
          console.log('Correct!');
          i += 1;
        } else {
          console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'.`);
          console.log(`Let's try again, ${names}!`);
          break;
        }
        if (i === 3) {
          console.log(`Congratulations, ${names}!`);
        }
      }
    };

export default gcd;
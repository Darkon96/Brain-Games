import readlineSync from 'readline-sync';
import username from '../src/index.js' 

const even = () => {
  const names = username();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3;) {
      const num = Math.round(Math.random() * 100);
      console.log(`Question: ${num}`);
      const answer = readlineSync.question('Your answer: ');
      const question = ((num % 2 === 0) && (answer === 'yes')) || ((num % 2 !== 0) && (answer === 'no'));
      if (question) {
        console.log('Correct!');
        i += 1;
      } else {
        console.log(`'Yes' is wrong answer ;(. Correct answer was 'No'.`);
        console.log(`Let's try again, ${names}!`);
        break;
      }
      if (i === 3) {
        console.log(`Congratulations, ${names}!`);
      }
    }
  };

  export default even;
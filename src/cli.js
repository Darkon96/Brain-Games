import readlineSync from 'readline-sync';

const question = () => {
  const names = readlineSync.question('May I have your name? ');
  console.log(`Hello ${names}!`);
};

export default question;

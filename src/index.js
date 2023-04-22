import readlineSync from 'readline-sync';

const username = () => {
  console.log('Welcome to the Brain Games!');
  const names = readlineSync.question('May I have your name? ');
  console.log(`Hello ${names}!`);
  return names;
};

export default username;
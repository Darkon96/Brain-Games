import readlineSync from 'readline-sync';

const username = () => {
  console.log('Welcome to the Brain Games!');
  const names = readlineSync.question('May I have your name? ');
  console.log(`Hello ${names}!`);
  return names;
};

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export { username, randomInteger };

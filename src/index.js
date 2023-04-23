import readlineSync from 'readline-sync';

const username = () => {
  console.log('Welcome to the Brain Games!');
  const names = readlineSync.question('May I have your name? ');
  console.log(`Hello ${names}!`);
  return names;
};

const gcdCalc = (a, b) => {
  if (a == 0)
      return b;
  return gcdCalc(b % a, a);
}


export { username, gcdCalc };
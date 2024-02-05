/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';

const question = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
};

export default question;

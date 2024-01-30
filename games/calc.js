/* eslint-disable import/extensions */

import { randomInt } from '../src/utils/functions.js';
import game from '../src/index.js';

const task = 'What is the result of the expression?';
const operators = '+-*';

const calculateExpression = (x, operator, y) => {
  switch (operator) {
    case '*':
      return x * y;
    case '+':
      return x + y;
    case '-':
      return x - y;
    default:
      return null;
  }
};

const getData = () => {
  const num1 = randomInt(0, 100);
  const num2 = randomInt(0, 100);
  const operation = operators.charAt(randomInt(0, operators.length - 1));
  const answer = String(calculateExpression(num1, operation, num2));
  const question = `${num1} ${operation} ${num2}`;
  return { question, answer };
};
const calc = () => game(task, getData);

export default calc;

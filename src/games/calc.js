import getRandomNumber from '../utils/functions.js';
import runEngine from '../index.js';

const task = 'What is the result of the expression?';
const operators = '+-*';

const calculate = (x, operator, y) => {
  switch (operator) {
    case '*':
      return x * y;
    case '+':
      return x + y;
    case '-':
      return x - y;
    default:
      throw new Error(`Unknown operator in switch: '${operator}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operation = operators.charAt(getRandomNumber(0, operators.length - 1));
  const answer = String(calculate(number1, operation, number2));
  const question = `${number1} ${operation} ${number2}`;
  return { question, answer };
};
const runCalc = () => runEngine(task, generateRound);

export default runCalc;

/* eslint-disable import/extensions */

function getRandomNumber(min, max) {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

export default getRandomNumber;

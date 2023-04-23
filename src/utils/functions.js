/* eslint-disable import/extensions */

export const randomInt = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getGcd = (n1, n2) => Number.isInteger(n1 / n2);

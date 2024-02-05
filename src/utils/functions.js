/* eslint-disable import/extensions */

export function getRandomNumber(min, max) {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}

export function getGCD(x, y) {
  if (y > x) return getGCD(y, x);
  if (!y) return x;
  return getGCD(y, x % y);
}

export function getProgression(step, length, firstMember) {
  const progression = [firstMember];
  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
}

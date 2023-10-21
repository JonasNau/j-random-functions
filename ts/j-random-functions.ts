/**
 * Returns a random float number between min and max including the minimum number and excluding the maximum number
 * @param min the minimum number
 * @param max the maximum number
 * @returns
 */
export function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
/**
 * Returns a random integer between 0 and the max number (max is exclusive)
 * @param max
 * @returns
 */
export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
/**
 * Returns a random number between min and max
 * The maximum is exclusive and the minimum is inclusive
 * @param min
 * @param max
 * @returns
 */
export function getRandomIntBetween(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  max = max + 1;
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Returns a random integer between min (inclusive) and max (exclusive) except one defined number
 * @param min
 * @param max
 * @param except
 * @returns
 */
export function getRandomNumberBetweenExcept(
  min: number,
  max: number,
  except: number
) {
  let maxTries = 100;
  let currentTry = 0;
  let currentNumber: number = min;
  while (currentTry <= maxTries) {
    currentTry++;
    currentNumber = getRandomIntBetween(min, max);
    if (currentNumber != except) {
      break;
    }
  }
  return currentNumber;
}

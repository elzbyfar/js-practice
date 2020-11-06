// Given a non-negative integer, return the minimum number of steps to reduce it to zero if you can only divide by 2 or subtract by 1.

const reduceToZero = (n) => {
  let count = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n -= 1;
    }

    count++;
  }

  return count;
};

console.log(reduceToZero(100));

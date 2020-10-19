const intParser = (encoded, i, n) => {
  // Guard against i falling out of bounds
  if (i - (n - 1) < 0) {
    return null;
  }

  let ints = [encoded[i]];

  for (let j = 1; j < n; j++) {
    ints.push(encoded[i - j]);
  }
  return parseInt(ints.join(""));
};

const inTwoDigitRange = (twoDigits) => {
  return (
    (twoDigits >= 65 && twoDigits <= 90) ||
    (twoDigits >= 97 && twoDigits <= 99) ||
    twoDigits === 32
  );
};

const inThreeDigitRange = (threeDigits) => {
  return threeDigits && threeDigits >= 100 && threeDigits <= 122;
};

function decode(encoded) {
  // Write your code here
  const validASCII = [];

  for (let i = encoded.length - 1; i >= 1; i--) {
    // Two Digit Handling
    let twoDigits = intParser(encoded, i, 2);
    if (inTwoDigitRange(twoDigits)) {
      validASCII.push(twoDigits);
      i -= 1;
      continue;
    }

    // Three Digit Handling
    let threeDigits = intParser(encoded, i, 3);
    if (inThreeDigitRange(threeDigits)) {
      validASCII.push(threeDigits);
      i -= 2;
    }
  }

  return String.fromCharCode(...validASCII);
}

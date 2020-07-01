const pyramid = (input) => {
  let matrix = [];
  for (let i = input; i > 0; i--) {
    let symbols = [];
    for (let j = 0; j < i; j++) {
      symbols.push("#");
    }
    matrix.unshift(symbols);
  }

  let parse = matrix
    .map((arr) => {
      return arr.join("");
    })
    .join("\n");

  return parse;
};

console.log(pyramid(5));

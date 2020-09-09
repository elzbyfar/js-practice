let str = "foo bar";

const revString = (str) => {
  let rev = str.split("");
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    [rev[i], rev[j]] = [rev[j], rev[i]];
  }
  return rev.join("");
};

console.log(revString(str));

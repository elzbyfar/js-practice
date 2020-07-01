const test1 = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
];
const test2 = [
  [-3, -2],
  [-1, -2],
  [2, -2],
  [-2, -2],
  [0, -2],
];
const test3 = [
  [0, 0],
  [0, 1],
  [0, -1],
];
const test4 = [
  [2, 1],
  [4, 2],
  [6, 3],
];

const test5 = [
  [0, 1],
  [1, 3],
  [-4, -7],
  [5, 11],
];

const test6 = [
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7],
];

// const checkStraightLine = (coordinates) => {
//   let xDiff = 0;
//   let yDiff = 0;
//   let xCheck = new Set();
//   let yCheck = new Set();

//   if (coordinates.length === 1) {
//     return true;
//   }

//   for (let i = 1; i < coordinates.length; i++) {
//     xDiff = coordinates[i][0] - coordinates[i - 1][0];
//     yDiff = coordinates[i][1] - coordinates[i - 1][1];
//     xCheck.add(xDiff);
//     yCheck.add(yDiff);
//   }
//   for (let i=0; i< Array.from(xCheck).length;
//   Array.from(yCheck)

//   if (xCheck.size === 1 && xCheck.has(0)) {
//     return true;
//   }
//   if (yCheck.size === 1 && yCheck.has(0)) {
//     return true;
//   }
//   return xCheck.size === 1 && yCheck.size === 1;
// };

//FIRST TRY
// const checkStraightLine = (coordinates) => {
//   let difference;
//   let check = 1;

//   for (let i = 1; i < coordinates.length; i++) {
//     difference = coordinates[i][0] - coordinates[i - 1][0];
//     if (difference === coordinates[i][1] - coordinates[i - 1][1]) {
//       check +=1;
//     }
//   }

//   return check === coordinates.length;
// };

//SECOND TRY
// const checkStraightLine = (coordinates) => {
//   let xPath = 1;

//   let difference = coordinates[1][0] - coordinates[0][0];

//   if (difference === coordinates[1][1] - coordinates[0][1]) {
//     for (let i = 1; i < coordinates.length; i++) {
//       if (difference === coordinates[i][1] - coordinates[i - 1][1]) {
//         xPath += 1;
//       }
//     }
//   } else if (difference === 0) {
//     let xDifference = 0;
//     difference = coordinates[1][1] - coordinates[0][1];
//     for (let i = 1; i < coordinates.length; i++) {
//       if (xDifference === coordinates[i][0] - coordinates[i - 1][0]) {
//         xPath += 1;
//       }
//     }
//   }

//   return xPath === coordinates.length;
// };

//THIRD TRY
const checkStraightLine = (coordinates) => {
  const b = new Set();

  for (let i = 1; i < coordinates.length; i++) {
    let x1 = coordinates[i - 1][0];
    let x2 = coordinates[i][0];
    let y1 = coordinates[i - 1][1];
    let y2 = coordinates[i][1];

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    let m = yDiff / xDiff;
    b.add(-(m * x1 - y1));
  }

  return b.size === 1;
};

console.log(checkStraightLine(test3));

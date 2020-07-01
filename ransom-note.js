let ransomNote = "aab";
let magazine = "baa";

const canConstruct = (ransomNote, magazine) => {
  let inMagazine = new Set();
  let magazineArray = magazine.split("");
  let ransomArray = ransomNote.split("");

  ransomArray.forEach((letter, index) => {
    if (magazine)
      if (magazine.includes(letter)) {
        inMagazine.add(letter + index);
        magazine = magazine.split("");
        magazine.splice(magazine.indexOf(letter), 1);
        magazine = magazine.join("");
      }
  });

  return inMagazine.size === ransomNote.length;
};

console.log(canConstruct(ransomNote, magazine));

//WORKING
// const canConstruct = (ransomNote, magazine) => {
//   let inMagazine = new Set();
//   let ransomArray = ransomNote.split("");

//   ransomArray.forEach((letter, index) => {
//     if (magazine.includes(letter)) {
//       inMagazine.add(letter + index);
//       magazine = magazine.split("");
//       magazine.splice(magazine.indexOf(letter), 1);
//       magazine = magazine.join("");
//     }
//   });

//   return inMagazine.size === ransomNote.length;
// };

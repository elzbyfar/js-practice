const words = ["cat", "dog", "bird", "car", "ax", "baby"];

const str = "asoinouhoivuhoiruhgvsdcsd";
// const str = "tcabnihjs";
// const str = "tbcanihjs";
// const str = "baykkjl";
// const str = "bbabylkkj";

//n = number of words in `words`
//m = maximal string length of each word
// time: O(n^2) + O(m^3)
// space: O(n)*3

const find_embedded_word = (words, str) => {
  const mapWords = {};

  for (let word of words) {
    mapWords[word] = {};
    for (let letter of word) {
      if (mapWords[word][letter]) {
        mapWords[word][letter] += 1;
      } else {
        mapWords[word][letter] = 1;
      }
    }
  }

  const mapLetters = {};

  for (let letter of str) {
    if (mapLetters[letter]) {
      mapLetters[letter] += 1;
    } else {
      mapLetters[letter] = 1;
    }
  }

  for (let key in mapWords) {
    let counter = 0;
    for (let k of key) {
      if (mapLetters[k] >= mapWords[key][k]) {
        counter += 1;
      }
    }
    if (counter === key.length) {
      return key;
    }
  }

  return null;
};

console.log(find_embedded_word(words, str));

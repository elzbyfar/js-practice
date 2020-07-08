  // 1. Write a function that takes two strings, s1 and s2 and returns the longest common subsequence of s1 and s2

  // EXAMPLES: 
  // "ABAZDC", "BACBAD" => "ABAD"
  // "AGGTAB", "GXTXAYB" => "GTAB"
  // "ABBA", "ABCABA" => "ABBA"
  // "aaaa", "aa" => "aa"
  // "", "..." => ""

const longestCommonSequence = (s1, s2) => {
  let firstString = s1.split("")
  let secondString = s2.split("")
  let commonLetters = [];
  
  firstString.forEach(letter => {
    let foundMatch = false

    secondString.forEach(secondLetter => {

      if (foundMatch) {
        return;
      }
      if (!foundMatch && (letter === secondLetter)) {
        foundMatch = true
        secondString.shift()
        commonLetters.push(letter)
        return;
      }
    })
  })



  let answer = commonLetters.join("")
  return answer
}


console.log(longestCommonSequence("ABAZDC", "BACBAD")) //ABAD
console.log(longestCommonSequence("AGGTAB", "GXTXAYB")) //GTAB
console.log(longestCommonSequence("ABBA", "ABCABA")) //ABBA
console.log(longestCommonSequence("aaaa", "aa")) //aa
// Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation.

 

// Example 1:

// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
// Example 2:

// Input: num = 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 

// Constraints:

// The given integer num is guaranteed to fit within the range of a 32-bit signed integer.
// num >= 1
// You could assume no leading zero bit in the integer’s binary representation.
// This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/



const findComplement = (num) => {
  const bits = []
  let e = 31
  while (e >= 0) {
    if (num < 2**e) {
      e -= 1
      bits.push(1)
    } else {
      num -= 2**e
      bits.push(0)
      e -= 1
    }
  }
  
  for (let i=0; i < bits.length; i++) {
    if (bits[i] === 0) {
      const complementBits = bits.splice(i, bits.length - i)
      if (!complementBits.includes(1)) {
        return 0
      }
      for (let k = 0; k < complementBits.length; k++) {
        if (complementBits[k] === 1) {
          const outputBits = complementBits.splice(k, complementBits.length - k)
          return outputBits.reverse().map((b, i) => {
            if (b === 1) {
              return 2**i
            } else {
              return 0
            }
          }).reduce((acc,nxt) => acc + nxt, 0)
        }
      }
    }
  }

}

console.log(findComplement(5))
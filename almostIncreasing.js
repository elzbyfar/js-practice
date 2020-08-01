// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

const ex1 = [10, 1, 2, 3, 4, 5]
const ex2 = [1, 2, 5, 3, 5]
const ex3 = [1, 1, 1, 2, 3]
const ex4 = [1, 1, 2, 3, 4, 4] //false
const ex5 = [2, 3, 5, 8, 7]
const ex6 = [1, 2, 1, 2] //false

function almostIncreasingSequence(sequence) {
  let count = 0
  let seq = sequence

  for (let i=0; i<seq.length; i++) {
    if (seq[i+1] <= seq[i]) {
      count += 1;
      if (seq[i+1] <= seq[i-1] && seq[i+2] <= seq[i]) {
        return false
      }
    }

  }

  return count <= 1
}

console.log(almostIncreasingSequence(ex4))
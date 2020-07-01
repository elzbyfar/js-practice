let array = [5, 0, 1, 3, 4, 1, 0, 1]
let array2 = [5, 0, 1, 3, 4, 2, 0, 1]

const jumps = (array) => {

  let nonZeros = {}

  for (let i=0; i< array.length; i++) {
    if (array[i] > 0) {
      nonZeros[i] = array[i]
    }
  }

  let goodStep = []

  // for (let i=0; i < nonZeros.length; i++) {
  //   if (nonZeros[i][1] >= nonZeros[i+1][1]) {
  //     goodStep.push(nonZeros[i])
  //   }
  // }

  return nonZeros
} 


console.log(jumps(array))
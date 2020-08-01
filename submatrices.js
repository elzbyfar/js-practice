function sortByBeauty(numbers, size) {

  let subMatrices = []
  
  
  for (let i=0; i<numbers.length; i++) {
      let firstInnerMatrix = []
      let secondInnerMatrix = []
      for (let j=0; j<numbers[i].length; j++) {
          if (j < size) {
              firstInnerMatrix.push(numbers[i][j])
          } else {
              secondInnerMatrix.push(numbers[i][j])
          }
      }
      subMatrices = [...subMatrices, firstInnerMatrix, secondInnerMatrix]
  }
  
  
  for (let i=0; i<size; i++) {
      
  }
  
  

console.log(subMatrices)


}


// // Configuração
// const myArr = [2, 3, 4, 5, 6];

// // Altere apenas o código abaixo desta linha
// let total = 0
// console.log(myArr.length);
// for(let i = 0; i < myArr.length; i++){ 
//     total += myArr[i]
// }
// console.log(total);

function multiplyAll(arr) {
    let product = 1;
    // Altere apenas o código abaixo desta linha
      for(let i=0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
              product *= arr[i][j]
              
        }
      }
    // Altere apenas o código acima desta linha
    return product;
  }
  
  
console.log(multiplyAll([[1], [2], [3]]))



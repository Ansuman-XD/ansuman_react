

// double the number 
const arr = [1, 2, 3, 4, 5];
const doubledArr = [];

// for(i=0;i<arr.length;i++){
//     doubledArr.push(arr[i]*2);
    
// }

arr.forEach(n => {
    doubledArr.push(n * 2);
  });

console.log(doubledArr);


// arr.forEach(number => {
//   doubledArr.push(number * 2);
// });
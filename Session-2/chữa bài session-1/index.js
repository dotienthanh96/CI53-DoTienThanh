function checkPrime(number) {
  if (number < 2) return false;
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) count++;
  }
  return count == 2;
}

function filterPrime(array) {
    for(let number of array) {
        if (checkPrime(number)) {
            console.log(number)
        }
    }
}
let str = prompt("Nhập vào dãy số") ;
let arr = str.split (',');

let numbers = arr.map(function(number) {
    return Number(number);
}
)
// console.log(numbers)
filterPrime(numbers)

// for ( let i = 0 ; i < arr.length ; i ++ ) {
//     arr[i] = Number(arr[i]);
// }

// filterPrime(arr)
// forEach không thể break
// let arr = [0, 1, 2, 3, 4, 5, 6];
// arr.forEach(function (element, index) {});

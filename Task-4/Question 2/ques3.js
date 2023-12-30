// 2) c.sum of all numbers using arrow function

let sum = (arr) =>{
let sum1=0;
for(let i=0; i<arr.length; i++){
    sum1 = sum1 + arr[i]
}
return sum1
}
console.log(sum([1,2,3,4,5]))


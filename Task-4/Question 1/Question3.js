//1) c.Sum of all numbers in an array using Anonymous Function

const sum = function(arr){
    let sum1=0;
    for(let i=0; i<arr.length; i++){
        sum1 = sum1 + arr[i]
    }
    return sum1
}
console.log(sum([1,2,3,4,5]))


//1) c.Sum of all numbers in an array using IIFE Function

let summ = (function(sum){
    let sum1=0;
    for(let i=0; i<sum.length; i++){
        sum1 = sum1 + sum[i]
    }
    return sum1
})([1,2,3,4,5,6])
console.log(summ)
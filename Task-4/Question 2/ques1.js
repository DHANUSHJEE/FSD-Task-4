// Print odd number in an array

const Oddnum = (arr) => {
   for (let i in arr) {
      if (arr[i] % 2 != 0) {
         console.log(arr[i])
      }
   }
}
console.log(Oddnum([1, 2, 3, 4, 5, 6, 7]))
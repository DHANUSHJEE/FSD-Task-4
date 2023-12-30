// 1) a.Finding OddNumbers USing Anonymous functions

const Oddno = function(array){
    for(let i in array){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }

  console.log(Oddno([1,2,3,4,5,6,7,]))


  // 1) a.Finding OddNumbers USing IIFE functions

let total = (function(arr){
    for(let ind in arr){
        if(arr[ind]%2!=0){
           console.log(arr[ind])
        } 
   }
})([1,2,3,4,5,6,67])
console.log(total)
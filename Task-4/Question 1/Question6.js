// 1) g.Remove duplicates from the array using anonymous function

let duplicate = function(arr){
    val=[]
    for(let i=0;i<arr.length;i++){
      if( val.indexOf(arr[i])==-1){
        val.push(arr[i])
      }
    }return val
}
console.log(duplicate([1,1,12,3,3,4,5,65,65,55,55,3,4,566,6775,65543,53,656,56]))


// 1) g.Remove duplicates from the array using IIFE function

let dupli = (function(ar){
    value=[]
    for(let i=0;i<ar.length;i++){
      if( value.indexOf(ar[i])==-1){
        value.push(ar[i])
      }
    }return value
})([1,1,12,3,3,4,5,65,65,55,55,3,4,566])
console.log(dupli)

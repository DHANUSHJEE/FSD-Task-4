//1) e. Return all the pallidrome in the array using Anonymous function

let pallidrome = function(arr){
    val=[]
    for(var i=0;i<arr.length;i++){
        let check = arr[i].split("").reverse().join("")
        if(arr[i]==check){
            val.push(arr[i])
        }
    }return val
}
console.log(pallidrome(["sos","raw","pop"]))


//1) e. Return all the pallidrome in the array using IIFE function

let ques = (function(obj){
    Val=[]
    for(let i=0;i<obj.length;i++){
        let Check = obj[i].split("").reverse().join("")
        if(obj[i]==Check){
            Val.push(obj[i])
        }
    }return Val
})(["sos","raw","pop","lol"])
console.log(ques)


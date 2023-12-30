// 2)e.Return all the palindromes in an array using arrow functions

let pallidrome = (arr) => {
    val=[]
    for(var i=0;i<arr.length;i++){
        let check = arr[i].split("").reverse().join("")
        if(arr[i]==check){
            val.push(arr[i])
        }
    }return val
}
console.log(pallidrome(["sos","raw","pop"]))


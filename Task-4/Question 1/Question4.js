// 1) d.return all the prime numbers in an array using Anonymous function

let prime = function(num){
    final=[]
    for(let i=0;i<num.length;i++){
    isprime=true
    for(let j=2;j<num[i]/2;j++){
        if(num[i]%j==0){
            isprime=false
        }
    }
    if(isprime){
        final.push(num[i])
    }
}
return final
}

console.log(prime([1,2,3,4,5,6,7,8,11]))


// 1) d.return all the prime numbers in an array using IIFE function

let Prime =(function(val){
    Final=[]
    for(let i=0;i<val.length;i++){
    isprime=true
    for(let j=2;j<val[i]/2;j++){
        if(val[i]%j==0){
            isprime=false
        }
    }
    if(isprime){
        Final.push(val[i])
    }
}
return Final
})(([1,2,3,4,5,6,7,8,11,13,17,21]))

console.log(Prime)


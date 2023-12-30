// 2)d.Return all the prime numbers in an array using arroe function

let prime = (num) => {
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

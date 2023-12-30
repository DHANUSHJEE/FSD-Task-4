// 1) b.Connect all strings to tittle caps USing Anonymous functions

let str=function(string){
      let arr=[];
   string=string.toLowerCase().split(" ");
   
   for(i=0;i<string.length;i++)
   {
      arr.push(string[i].charAt(0).toUpperCase() + string[i].slice(1));
   }
    return console.log(...arr)
};
(str("my name is dhanush"));


// 1) b.Connect all strings to tittle caps USing IIFE functions

(function(str1){
    let array=[];
   str1=str1.toLowerCase().split(" ");
   
   for(i=0;i<str1.length;i++)
   {
      array.push(str1[i].charAt(0).toUpperCase() + str1[i].slice(1));
   }
    return console.log(...array);
})("I love coding");

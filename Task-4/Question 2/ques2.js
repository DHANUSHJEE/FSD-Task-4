// 2)b. Convert all the strings to title caps in a string array using arrow function

let title = (string) =>{
    let arr=[];
    string=string.toLowerCase().split(" ");
    
    for(i=0;i<string.length;i++)
    {
       arr.push(string[i].charAt(0).toUpperCase() + string[i].slice(1));
    }
     return console.log(...arr);
 };
 (title("my name is dhanush"));

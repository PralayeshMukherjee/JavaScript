// different between prompt and alert
// prompt take the data and alert said something
let a = prompt("Enter the Number");
a = Number.parseInt(a);
console.log(typeof a);
console.log(a);
// alert("stop")
if(a>0){
    alert("Greate Number");
}else if(a<0){
    alert("Lesser Number");
}else{
    alert("0 is the number");
}
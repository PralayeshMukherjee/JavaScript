// write a program to print the marks of a student in an object using for loop  obj{ harry:98, rohan:70, aakash:7}
// write the program in Q1 using for in loop
// write a program to print "try again" until the user enters the corrent number
// write a function to find mean of 5 numbers

let obj = {
    harry: 98,
    rohan: 70,
    aakash: 8
}
// for each
for(const key in obj){
    console.log(key+": "+obj[key]);
}
// for loop
for(let i=0;i<Object.keys(obj).length;i++){
    console.log("The key value pair is :"+Object.keys(obj)[i]+" => "+obj[Object.keys(obj)[i]]);
}

// let number = 6;
// let test = prompt("Enter number:- ");
// test = Number.parseInt(test);
// while(test!=number){
//     test = Number.parseInt(prompt("try again:- "));
// }

const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5;
}

let a = Number.parseInt(prompt("Enter 1st number:- "));
let b = Number.parseInt(prompt("Enter 2nd number:- "));
let c = Number.parseInt(prompt("Enter 3nd number:- "));
let d = Number.parseInt(prompt("Enter 4nd number:- "));
let e = Number.parseInt(prompt("Enter 5nd number:- "));

let result = mean(a,b,c,d,e);
console.log("The mean value is :- "+result);

let boy1 = "raj";
let boy2 = "anjan";

let sentance = `${boy1} is a friend of ${boy2}`; // ${boy2}:- templat liarel   `:- back tick
console.log(sentance);
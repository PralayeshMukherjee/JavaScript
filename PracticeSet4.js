// Q1) what will the following print in js Console.log("har\"".lenght)
console.log("har\"".length); // " \" " count as single character this is called escape character

// Q2) Explore the includes, start with & end with functions of a string
let a = "Welcome to JavaScript";
let check1 = a.includes("to");
console.log(check1);
let check2 = a.includes("e",1);
console.log(check2);
let check3 = a.includes("Java",-1);
console.log(check3);

console.log(a.endsWith("JavaScript"));
console.log(a.startsWith("Welcome"));

// Q3) write a program to convert a given string to lowercase
let theString = "Hey JavaScript my name is Pralayesh";
console.log(theString.toLowerCase());

// Q4) extract the amount out of this string " Please give Rs 1000"
let amount = " Please give Rs 1000";
console.log(amount.slice(amount.length-4));

// Q5) try to change the 4th character of a given string were you able to do it
console.log(amount.replace(3,"d")); //I can't change the string because Strings are immutable
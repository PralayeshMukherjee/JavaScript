                        //  SET 1
//Q1) create a variable of type string and try to add a number to it

// in string every thing concat
let a = "raj";
a = a + 55;
console.log(a);

// Q2) find the data type of Q1

console.log(typeof a); //string

// Q3) create a const object in javascript and can you change it to hold a number 

const obj = {
    name: "Raj", //"name":"raj" is also corrent in js
    section: "A"
}
console.log(obj);
//obj = 9; // no I cann't change an object into a number or anything
// console.log(obj);

// Q4) Try to add a new key to create object in problem 3 were you able to do it?

obj["friend"] = "subham";
obj["name"] = "pralayesh";// it is happan but obj is a constant datatype WTF??? it is happan because obj is pointing to {name: "Raj",section: "A"} if I want to modify something in the object then obj doesnot take any action against me
console.log(obj);

// Q5) write a js program to create a word meaning dictionary of 5 words.
const dict = {
    appreciate: "o enjoy something or to understand the value of somebody/something",
     
    beautiful: "very pretty or attractive; giving pleasure to the senses" //like that add more 3
}

console.log(dict["appreciate"]);
console.log(dict.beautiful); //another way to access object elements
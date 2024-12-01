// premitive data type  (nn bb ss u)
// let a = null;
// let b = 7;
// let c = true;
// let d = BigInt("234") + BigInt("4");
// let e = "Raj";
// let f = Symbol("I am a symbol");
// let g = undefined;
// console.log(a, b, c, d, e, f, g);
// console.log(typeof g);

// object (non premetive data type) like hashmap in java
const item = {
    "Raj": true,
    "rohan": false
}
console.log(item["Raj"]);

// Operators in js
let a = 45;
let b = 6;
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
console.log("a**b = ",a**b);
console.log("a%b = ",a%b);
console.log("a++ = ",a++);
console.log("++a = ",++a);

a += 10;
console.log("a = "+a);

let comp1 = 7;
let comp2 = "7";
console.log("comp1==comp2",comp1==comp2);
console.log("comp1===comp2",comp1===comp2);
console.log("comp1!=comp2",comp1!=comp2);
console.log("comp1!==comp2",comp1!==comp2);

// '==' compare with data
// '===' compare with datatype
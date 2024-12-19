console.assert("raj"!=false); //used to assert
console.assert("raj"==false);
console.clear();//clear the console
console.log("log");//outputs a message to the console
const person= {
    firstName: "raj",
    lastName: "mukherjee",
    age: 20,
    eyeColor: "black"
};
console.table(person);//display data in tabular form
console.warn("Stop here");//used for warning
console.error("resticted area");//used for error
console.info("hey");//used for special information
console.time("raj");
console.timeEnd("raj");//show how many time need to pring raj but first we shoud use console.time(data)

console.time("forLoop");
for(let i=0;i<5;i++){
    console.log("me");
}
console.timeEnd("forLoop");
//by this method we can compare any two code execution time
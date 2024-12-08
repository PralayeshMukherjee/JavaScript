// Array.from
let me = "Raj";
let arr = Array.from(me);//make a character array where elements are the every character of the string
console.log(arr);

// for...of
let num = [3,4,23,6];
for(let i of num){
    console.log(i);//for...of gives only the values in the array
}
// for...in
// let num = [3,4,23,6];
for(let i in num){
    console.log(i);//for..in gives only the keys means index of the array
}

// actually foreach take three inputs value,index and array. same for map
console.log("map");
let mark = [45,23,21];
let a = mark.map((value)=>{
    console.log(value);
    return value+1;
})//it tepically return a new array with same elements that you put and also you can modify the old array elements and return
//we use foreach when we want to perform any operations on the existing elements of the array & we use map when we want to make a new array
//basically map make a new array and foreach is a loop to traverse the elements in the array
console.log(a);

let b = mark.map((value,index,array)=>{
    console.log(value,index,array);
    return value+1;
})
console.log(b);

//first it pring every value and it's index and the hole array and then modify and return the new array

let arr2 = [54,34,21,543,432,32];
let lessThan100Array = arr2.filter((value)=>{
   return value<100;
})//it filter all the elements where the condition is satisfied and return a new array and it cannot modify the original array
console.log(lessThan100Array);

console.log("reduce method");
let arr3 = [1,2,3,4,5,6,32,12,true,"raj"];
let newArr3 = arr3.reduce((h1,h2)=>{
    return h1+h2;
});
console.log(newArr3);
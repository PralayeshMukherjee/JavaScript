let a = [1,3,4,null,false,"Not prasent"]; //it can hold multiple type of value
console.log(a);
console.log(a.length);
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}
console.log(a[6]);//undefine

a[2] = 54; //change the value in the array
console.log(a);

a[6] = true; //add a new value in the array
console.log(a);

console.log(typeof a); //object


//              METHODS IN ARRAY

let num = [1,2,3,4,5];
let b = num.toString();

console.log(num, typeof num);

console.log(b, typeof b);

let c = num.join("_");
console.log(c, typeof c);

let popingOutElementInTheArray = num.pop(); // poping out the last element in the array like pop method in DSA, it is also return the popping out element
console.log(num);
console.log(" popping out the element is:- "+popingOutElementInTheArray);
let pushingInTheArray = num.push(6);
console.log(num);
console.log(pushingInTheArray);

let r = num.shift(); //remove or popping out the first element from the array and return the element which is popping out
console.log(r,num);// it is also modify the original array

let e = num.unshift(10);// add a new element in the begining of the array like pushing and return the modified original array length
console.log(e,num);// modify the original array

console.log(num, num.length);
delete num[0];//delete is an operator not a method like typeof, it delete the element in the array but still it cannot modify the lenght of the array
console.log(num,num.length);

let number1 = [1,2,3,4,5];
let number2 = [10,20,30,40,50];
let numArray = number1.concat(number2); //return a new array which is first array concat with second array, it can merge more than 2 array
console.log(numArray);

let sortedArray = num.sort(); //it sort the array
console.log(sortedArray);//it return the sorted order array
console.log(num);//it also modify the original array
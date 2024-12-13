// 1) create an array of numbers and take input from the user to add numbers to this array
// 2) keep adding numbers to the array in 1 until 0 is added to the array
// 3) filter for numbers divisible by 10 from a given array
// 4) create an array of sqare of given numbers
// 5) use reduce the calculate multiplication of a given number from an array of first n natural numbers. (n being the number whose multiplication needs to be calculated)

let arr = [];
let n = prompt("Enter the numbers of element you want to insert: ");
n = Number.parseInt(n);
for(let i=0;i<n;i++){
    let temp = Number.parseInt(prompt(`Enter the element ${i}`));
    if(temp==0){
        alert("You enter 0 so loop is break");
        break;
    }else{
        arr[i] = temp;
    }
}
arr.forEach((element)=>{
    console.log(element);
})
for(let i of arr){
    console.log(i);
}

let divisableBy10 = arr.filter((value)=>{
    return value%10==0;
})
console.log(divisableBy10);

let squer = arr.map((value)=>{
    return value*value;
})
console.log(squer);

let reduceArray = arr.reduce((value1, value2)=>{
    return value1*value2;
})
console.log(reduceArray);
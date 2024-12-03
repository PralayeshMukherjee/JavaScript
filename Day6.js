
let compare = (a,b) => {
    return a-b;
}
let num = [551,22,3,14,5,6,7,8,229];
num.sort(compare);//  it compare by subtract two number a-b gives me assending order and b-a gives decending order
console.log(num);

num.reverse();// it reverse the original array
console.log(num);

let deletedValue = num.splice(2,3,1021,1022,1023,1024); //first parameter for from where start the pointer, second parameter for how many element you want to delete from the original array, and rest parameter is insert element in the original array   And it also return all deleted value from the original array in the from of array
console.log(num);
console.log(deletedValue);


let c = num.slice(4,6); //copy from i=4 to i=n(here 6) - 1;
let v = num.slice(3); //it return a new array which is from the ith index of the original array
console.log(num);// it doesnot modify the original array
console.log(v);
console.log(c);
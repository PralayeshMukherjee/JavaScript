let num = [3,4,23,6];

// normal for loop
for(let i=0;i<num.length;i++){
    console.log(num[i]);
}

// for each loop in array
num.forEach((element)=> {
    console.log(element);
});
// square elements of the array and print
num.forEach((element)=> {
    console.log(element * element);
});
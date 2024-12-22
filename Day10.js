alert("Ente the value of a "); // pop up a message
let a = prompt("Enter the value of a : "); //take the input form the use and store it in a variable in the form of string
document.write(a+" ");//write the value of a in web not console
document.write(typeof a);
let b = prompt("Enter value: ","it is a default value");//we can set a default value in a prompt but we can modify it
document.write(b);

let c = prompt("Enter the value for c: ");
let write = confirm("Do you want to print the value of c");
// if you click ok the write value is true else false
if(write){
    document.write(c);
}else{
    document.write("don't allowed to write");
}
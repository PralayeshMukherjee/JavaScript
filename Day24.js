console.log(document.cookie);
document.cookie = "name=raj0909";
document.cookie = "name1S=raj0909";
console.log(document.cookie);
document.cookie = "name=raj";
console.log(document.cookie);
let key = prompt("Enter your key");
let value = prompt("Enter your value");
document.cookie = `${key}=${value}`
console.log(document.cookie);
let key1 = prompt("Enter your key");
let value1 = prompt("Enter your value");
document.cookie = `${encodeURIComponent(key1)}=${encodeURIComponent(value1)}`
console.log(decodeURIComponent(key1)+" "+decodeURIComponent(value1));
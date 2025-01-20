let a = document.getElementById('example');
console.log(a.innerHTML);
a.innerHTML = '<p>Hey raj</p>'
console.log(a.innerHTML);
let b = document.getElementById('example');
console.log(b.outerHTML);
b.outerHTML = "<h1>Raj</h1>";
console.log(b.outerHTML);

let first = a;
let att = first.getAttribute("class");
console.log(att);
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));
first.setAttribute("class","raj");
console.log(first.getAttribute("class"));
first.removeAttribute("class");

let c = document.getElementById("container");
c.innerHTML = c.innerHTML + "<h1>hey my name is raj</h1>"

let a = setTimeout(function(){alert("hey it is time out")},2000);
let b = prompt("Are you want to exit the time out y/n => ");
if(b=="n"){
    clearTimeout(a);
}else{
    setTimeout(function(){alert("hey it is time out")},2000);
}
console.log(a);
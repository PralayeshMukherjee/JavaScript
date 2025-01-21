// let first = document.getElementsByClassName("container")[0];
// first.onclick = () =>{
//     alert('hey this is raj');
// }

let second = document.getElementById('btn');

let user = prompt('Enter your fav number');
let n = parseInt(user);
let a = second.addEventListener('click',function(){
    prompt('enter number')
    alert(`hello world ${n}`);
})
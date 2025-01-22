// let promise = new Promise(function(resolve,reject){
//     alert("hey");
//     resolve(56);
// })

// the promise object returned by the new promise constructor has two properties i) State ii) result
// console.log("hello world");
// setTimeout(function(){
//     console.log("hello raj");
// },2000);
// console.log("my name is JavaScript");
// console.log(promise);

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am a promise and execute alert and it is fullfilled ");
        resolve(true);
    },4000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am a promise and execute alert and it is fullfilled ");
        reject(new Error("I am a rejected"));
    },4000)
})
p1.then((value)=>{
    console.log(value);
})
// p2.catch((error)=>{
//     console.log("some error occur");
// })
// p2.then((value)=>{
//     console.log(value);
// })
p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})
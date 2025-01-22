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

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("I am a promise and execute alert and it is fullfilled ");
//         resolve(true);
//     },4000)
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("I am a promise and execute alert and it is fullfilled ");
//         reject(new Error("I am a rejected"));
//     },4000)
// })
// p1.then((value)=>{
//     console.log(value);
// })
// p2.catch((error)=>{
//     console.log("some error occur");
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// },(error)=>{
//     console.log(error);
// })

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log("code execute after 2 second");
//         resolve(56)
//     },2000);
// })
// p1.then((value)=>{
//     console.log(value);
//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("resolve after 2 second");
//             resolve(34)
//         },2000)
//     })
//     return p2;
// }).then((value)=>{
//     console.log("we are done");
//     return 2;
// }).then(()=>{
//     console.log("done dona done done");
// })

const loadScript = (url)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = url;
        document.body.appendChild(script);
        script.onload = ()=>{
            resolve(1);
        }
        script.onerror = ()=>{
            reject(new Error("script is undefine!"));
        }
    })
}
let p1 = loadScript("https://ccdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
p1.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
})
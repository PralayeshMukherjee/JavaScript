// Q1) Write a program to load a javascript file in a browser using promises. Use then() to display an alert when the load is completed

const loadScript1 = (url)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = url;
        document.body.appendChild(script);
        script.onload = ()=>{
            resolve("loaded Successfully");
        }
        script.onerror = ()=>{
            reject(new Error("denied loading"));
        }
    })
}
let p1 = loadScript1("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");

p1.then((value)=>{
    alert(value);
}).catch((error)=>{
    alert(error)
})

// Q2) Write the same program from previous question and use async/await syntax

const loadScript2 = async (url)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = url;
        document.body.appendChild(script);
        script.onload = ()=>{
            resolve(url);
        }
    })
}
const main = async ()=>{
    let a = await loadScript2("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
    alert(a);
}
main();

// Q3) Craete a promise which rejects after 3 second use an async/await ot get its value. Use a try catch to handle its error

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("throw a new error!"));
    },3000);
})
const valueFucntion = async ()=>{
    try{
        let a = await p2;
        alert(a);
    }catch(error){
        alert(error);
    }
}
valueFucntion();

// Q4) Write a program using Promise.all() inside an async/await to await 3 promises. Compare its result with the case where we await these promises one by one.

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am promise 1");
        resolve("Promise 1 resolve");
    },1000);
})
let p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am promise 2");
        resolve("Promise 2 resolve");
    },2000);
})
let p5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am promise 3");
        resolve("Promise 3 resolve");
    },3000);
})
let promiseAll = Promise.all([p3,p4,p5]);
const myFunction = async ()=>{
    console.log("fetching promise 1...");
    let np1 = await p3;
    console.log("got promise 1:- "+np1);
    console.log("fetching promise 2...");
    let np2 = await p4;
    console.log("got promise 2:- "+np2);
    console.log("fetching promise 3...");
    let np3 = await p5;
    console.log("got promise 3:- "+np3);
}
promiseAll.then(()=>{
    myFunction()
})
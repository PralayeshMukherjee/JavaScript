let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    },1000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2")
        // reject(new Error("error occur"))
    },3000);
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },5000);
})

// if all thing resolve then we use promise all method
let promiseAll = Promise.all([p1,p2,p3]);
promiseAll.then((value)=>{
    console.log(value);
})
// if atleast one promise reject and we want to know the remaining the we use promise all settled
let promiseAllSettled = Promise.allSettled([p1,p2,p3])
promiseAllSettled.then((value)=>{
    console.log(value);
})
// if we want the first value which is resolve firstly the we use promise race
let promiseRace = Promise.race([p1,p2,p3]);
promiseRace.then((value)=>{
    console.log(value);
})
let promiseAny = Promise.any([p1,p2,p3]);
promiseAny.then((value)=>{
    console.log(value);
})
let promiseResolve = Promise.resolve(3);
promiseResolve.then((value)=>{
    console.log(value);
})
let promiseReject = Promise.reject(new Error("hey"));
promiseReject.then((value)=>{
    console.log(value);
})
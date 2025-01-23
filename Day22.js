setTimeout(()=>{
    console.log("searching wifi...");
},1000)
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("fetching wifi...");
        resolve(54);
    },2000);
})
p1.then(()=>{
    try{
        console.log(raj);
    }catch(error){
        console.log(error);
    }
})
setTimeout(()=>{
    console.log("wifi connected successfully");
},3000);

try{
    console.log(raj);
    throw new ReferenceErrorError("Raj is not good");
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

try{  
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    if(age>180){
        throw new Error("it is not true");
    }
}catch(error){
    console.log(error.message);
}
console.log("the script is still running");

try{
    let a = 0;
    console.log(b);
    console.log("program run successfully");
}catch(error){
    console.log(error.message);
}finally{
    console.log("finally block executed");
}
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
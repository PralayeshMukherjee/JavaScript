const raj = async ()=>{
    let delhi = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg");
        },2000)
    });
    let mumbai = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("30 deg");
        },5000)
    })
    console.log("fetching delhi weather...");
    let delhiW = await delhi;
    console.log("Delhi weather successfully fetched: "+delhiW);
    console.log("fetching mumbai weather...");
    let mumbaiW = await mumbai;
    console.log("Mumbai weather successfully fetched: "+mumbaiW);
    return [delhiW,mumbaiW];
}
console.log("Welcome to weather control room");
let a = raj();
a.then((value)=>{
    console.log(value);
})
/* Write a javascript program to pretend to look like a hacker write an async function which will simply display the following output:

Initialiging the program...
Hacking Ashish username...
username found aashish17...
connecting to facebook...
try to use html & styling if possible
*/
let btn = document.getElementById('btn');
const delay = (ms)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true);
        },ms)
    })
}
const hacker = async ()=>{
    console.log("Initialiging the program...");
    let a = await delay(2000);
    console.log("Hacking Ashish username...");
    let b = await delay(4000);
    console.log("username found aashish17...");
    let c = await delay(6000)
    console.log("connecting to facebook...")
    let d = await delay(8000);
    window.location.href = "localhost:5500";
}
btn.addEventListener('click',hacker);
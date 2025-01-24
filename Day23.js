let p = fetch("https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&hourly=temperature_2m");
p.then((value1)=>{
    console.log(value1);
    console.log(value1.status);
    return value1.json();
}).then((value2)=>{
    console.log(value2);
})

let options = {
    method: "POST",
    headers: {
        "Content-type":"application/json"
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
}
let p1 = fetch('https://jsonplaceholder.typicode.com/posts',options);
p1.then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(value);
})

const createTodo = async ()=>{
    let options1 = {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
    }
    let p2 = await fetch('https://jsonplaceholder.typicode.com/posts',options1);
    let response = await p2.json();
    return response;
}
const mainFunc = async () =>{
    let todo = await createTodo();
    console.log(todo);
}
mainFunc();
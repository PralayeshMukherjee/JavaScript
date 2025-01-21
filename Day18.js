function loadScript(url,callback){
    let script = document.createElement("script");
    script.src = url;
    script.onload = () =>{
        console.log("loaded");
        callback(null,url);
    }
    script.onerror = ()=>{
        console.log("error loading script with src: "+src);
        callback(new Error("src got some error"));
    }
    document.body.appendChild(script);
}

function first(error,src){
    if(error!=null){
        console.log(error);
        return;
    }
    alert('success '+src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",first)
function loadScript(src,callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = ()=>{
        console.log("script loaded "+src);
        callback(null,src);
    }
    script.onerror = function(){
        console.log("Error loading script with src: "+src);
        callback(new Error("Src got some error"));
    }
    document.body.appendChild(script);
}
function hello(error, src){
    if(error!=null){
        console.log(error);
        return;
    }
    alert('hello '+src);
}
function good(){
    alert('goodmorning')
}
loadScript("https://ccdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello);
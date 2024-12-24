// if we write document.body then return body tag same for document.anything except document.title return title string

console.log(document.body.firstChild);//give first child tag
console.log(document.body.lastChild);//give last child tag
console.log(document.body.childNodes);//give all child tag
console.log(document.body.hasChildNodes);//return true false
let arr = Array.from(document.body.childNodes);//make every element in a array
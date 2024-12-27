// DOM collections:
// they are read-only
let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);//collection of tr elements
console.log(t.caption);//refernce to <caption>
console.log(t.tFoot);//refernce to <tfoot>
console.log(t.tHead.firstElementChild);
console.log(t.tHead);//referance to <thead>
console.log(t.tBodies);//collection of <tbody> elements
console.log(t.rows[0].rowIndex);//row number 
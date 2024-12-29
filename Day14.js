let t = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(t);
console.log(t.matches(".box"));//if t belongs to the box class then return true else false
console.log(t.closest("#sp1"));//to look for the nearest ancester that matches the given css-selector. the element itself is also checked.
console.log(t.contains(sp1));
console.log(sp1.contains(sp1));//element1.contains(element2) if element 1 contains element2 then it return true else false
let number =  Math.floor(Math.random()*100);
let point = 99;
alert("Guess the number");
let temp = Number.parseInt(prompt("Guess the number:- "));
while(temp!=number){
    if(temp>number){
        alert(`${temp} number is greater than guess number!`);
    }else{
        alert(`${temp} number is lesser than guess number!`);
    }
    temp = Number.parseInt(prompt("Guess the number:- "));
    point--;
}
alert(`Your Guess is correct. the number is ${number} & you score ${point}`);
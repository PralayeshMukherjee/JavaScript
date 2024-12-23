// Use JavaScript to create a game of Snake Water and Gun. The game should ask you to enter S, W or G. The computer should be able to randomly generate S,W or G and declare Win or Loss using alert. Use confirm and prompt whenever required.

let character = ['S','W','G'];
let index = Math.floor(Math.random()*character.length);
let computer = character[index];
let cWin = 0;
let mWin = 0;
let i = 3;
const confirmation = ()=>{
    let c = confirm("Are you sure about the input?");
    return c;
}
const input = ()=>{
    let userSign = prompt("Enter S for Snake, W for Water, G for Gun:- ");
    while(confirmation()!=true){
        userSign = prompt("Enter S for Snake, W for Water, G for Gun:- ");
    }
    return userSign;
}
while(i >0){
    let userSign = input();
    if(userSign==computer){
        alert(`${i}th Match draw!!`);
        cWin++;
        mWin++;
        i--;
        continue;
    }
    if((userSign=='S' && computer=='W') || (userSign=='W' &&   computer=='G') || (userSign=='G' && computer=='S')){
        alert(`You win ${i}th round!!`)
        mWin++;
    }else{
        alert(`Computer win ${i}th round`);
        cWin++;
    }
    i--;
}
if(mWin>cWin){
    alert("Congrats, You won the game!");
}else if(mWin==cWin){
    alert("Match tie!!");
}else{
    alert("Oh ho!! Computer won!!");
}
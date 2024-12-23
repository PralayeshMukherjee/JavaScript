// Q1) Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.
const drivePrompt = ()=>{
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age);
    if(age<0){
        console.error("age cann't be negative!!!");
    }
    if(age>=18){
        alert("You can drive");
    }else{
        alert("You cann't drive");
    }
}

// Q2) In Q1 use confirm to ask the user if he wants to see the prompt again
drivePrompt();
let again = confirm("Are you want to see the prompt?");
if(again==true){
    drivePrompt();
}

// Q3) In the previous question use console.error to log the error if the age entered is negative

drivePrompt();

// Q4) Write a program to change the url to google.com(redirection) if user enters a number greater than 4

let redirection = prompt("Enter the number: ");
redirection = Number.parseInt(redirection);
if(redirection>4){
    window.location.href = "https://www.google.com/"
}

// Q5) Change the background of the page to yellow red or any other color based on user input throught prompt

let color = prompt("Enter the color of background in the webpage:- ");
document.body.style.background = color;
// Q1) Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.
const drivePrompt = ()=>{
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age);
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
// Q4) Write a program to change the url to google.com(redirection) if user enters a number greater than 4
// Q5) Change the background of the page to yellow red or any other color based on user input throught prompt
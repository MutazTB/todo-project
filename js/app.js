var userName = window.prompt("What is your name?");
var userGender = window.prompt("What is your Gender?");
var userAge = window.prompt("What is your age?");

var confirm = confirm("Are you want to skip the welcomming message ?");

if (confirm){

    console.log("Thank you " + userName);
}

else if (userGender != "male" && userGender != "fmale"){
    alert("Welcome " + userName);
}
else if( userGender == "male") {
    alert("Welcome Mr " + userName);
}
else {
    alert("Welcome Ms " + userName);
}
if (userAge){
    alert("Your age " + userAge);
}
var answers = [];
function storeArray(answer) {  
     answer = answer.toLowerCase();  
    if(answer !== "yes" && answer !== "no"){
        answer = "invalid";
    }    
   answers.push(answer);
}
var firstQuestion = window.prompt("Are you love programming? the answer shoud be Yes or No");
storeArray(firstQuestion);
var secondQuestion = window.prompt("Are your age less than 25? the answer shoud be Yes or No");
storeArray(secondQuestion);
var thirdQuestion = window.prompt("Are you have any experiance? the answer shoud be Yes or No");
storeArray(thirdQuestion);
function printAnswer(){
    for(let i = 0 ; i < answers.length ; i++){
        console.log(answers[i]);
    }
}
printAnswer();
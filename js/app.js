var userName = window.prompt("What is your name?");
var userGender = window.prompt("What is your Gender?");
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

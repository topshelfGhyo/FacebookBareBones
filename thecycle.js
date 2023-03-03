var database = [
    {
        userName: "BobbyB",
        passWord:"theOne",

        userName: "Carlito",
        passWord:"123",

        userName: "andrea",
        passWord:"mylove",  
}]

var newsfeed = [
    {   username: "Ricky",
        timeline: "Damn it's hot outside!",
    },
    {
        username:"Carl",
        timeline:"Gotta love mustangs Bro!"
    },
    {   username:"Susy",
        timeline:"Free YSL the fast way!"

    }];


//var credentials = 
function signIn(userName,passWord){
        if(userName === database[0].userName && passWord[0].database){
            console.log(newsfeed);
        }
        else{
        console.log("Sorry wrong password and Username Combo!");
        }


        }

signIn(userName,password);


var userName = prompt("Welcome Enter your Sign in Credentials");
var passWord = prompt("Enter your password");
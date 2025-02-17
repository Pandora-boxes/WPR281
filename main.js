let loggedInUser = -1;
let userList=[];

let Account = {
    userName : "",
    userPassword :"",
    favoriteExercises : new Array(),
    exercisesComplete : new Array(),
    firstName : '',
    lastName : '',
    height : null,
    weight : null,
    age : null ,
    datejoined: new Date(),
    weightLog : [[0,new Date()]]
}

let exercise = {
    exerciseName : "",
    exerciseDuration :null,
    calariesBurnt : null
}

function PopulateUser(fUsername,fUserPassword,fFirstName,fLastName,fHeight,fWeight,fage){
    let newUser = Object.create(Account);
    newUser.userName=fUsername;
    newUser.userPassword=fUserPassword;
    newUser.firstName=fFirstName;
    newUser.lastName=fLastName;
    newUser.height=fHeight;
    newUser.weight=fWeight;
    newUser.age=fage;
    newUser.datejoined = new Date()
    newUser.weightLog.shift();
    newUser.weightLog.push(newUser.weight,newUser.datejoined);
    return newUser
}

function logExercise(fname,fDuration,fCBurnt){
       
        let fCurrentUser = userList[i];
        let fObject = Object.create(exercise);

        fObject.exerciseName = fname;
        fObject.exerciseDuration = fDuration;
        fObject.calariesBurnt = fCBurnt;

        fCurrentUser.exercisesComplete.push(fObject);
}

function stringValidation(checkVariable,checkUnique,checkMidSpace){
    let bValidation = true
    if (checkVariable == null){bValidation=false}else{

        checkVariable = checkVariable.trim();

        if (checkVariable == "" || (verifiedUserName.indexOf(" ")!=-1 && checkMidSpace)){bValidation=false}
        else{
            let checkinglist = userList.filter(User => User.userName==verifiedUserName);

            if (checkinglist.length>0 && checkUnique){bValidation=false}
        }     
    }
    return bValidation
}
function makeUser(){
    
    //ensuring validity of usename entered 
    let bValid=true;
    let validUserName =prompt("Please enter a username");

    while(stringValidation(validUserName,true,true)){
        validUserName = prompt('Username invalid or in use\nPlease enter a new username:');
    }

    validUserName=validUserName.trim();

    let validPassword = prompt("Please enter a password");
    while(stringValidation(validPassword),false,true){
        validPassword = prompt('Password invalid\nPlease enter a new password:');
    }
    validPassword = validPassword.trim();


    let validFirstName = prompt('Please enter your first name');
    while(stringValidation(validFirstName,false,false)){
        validFirstName = prompt('Name invalid\nPlease enter a new first name:');
    }
    validFirstName =validFirstName.trim();

    let validSurname = prompt("Please enter your surname");
    while(stringValidation(validSurname,false,false)){
        validSurname = prompt('Name invalid\nPlease enter a new Surnamename:');
    }
    validSurname=validSurname.trim();
    
    userList.push(PopulateUser(verifiedUserName,validPassword,validFirstName,validSurname,
    prompt('enter a height'),
    prompt('enter a weight'),
    prompt('enter an age')))

    loggedInUser = userList.length-1;
    console.log(userList[loggedInUser])
}

window.addEventListener('load', app);

      function app() {
            const JoinButton =document.getElementById('JoinButton');
            JoinButton.addEventListener('click',makeUser);
        }
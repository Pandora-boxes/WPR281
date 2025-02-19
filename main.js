let loggedInUser = -1;
let userList=[];
let exerciseList = []
function Exercise(){
    this.name='',
    this.calariesBurntPerMinute=0.0,
    this.description='',
    this.
}
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
    calariesBurnt : null,
    exerciseDateTime : new Date()
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
       
        let fCurrentUser = userList[loggedInUser];
        let fObject = Object.create(exercise);

        fObject.exerciseName = fname;
        fObject.exerciseDuration = fDuration;
        fObject.calariesBurnt = fCBurnt;
        fObject.exerciseDateTime=new Date();

        fCurrentUser.exercisesComplete.push(fObject);
}

function stringValidation(checkVariable,checkUnique,checkMidSpace){
    let bValidation = true
    if (checkVariable == null){bValidation=false}else{

        checkVariable = checkVariable.trim();           

        if (checkVariable == "" || (checkVariable.indexOf(" ")!=-1 && checkMidSpace)){bValidation=false}
        else{
            let checkinglist = userList.filter(User => User.userName==checkVariable);

            if (checkinglist.length>0 && checkUnique){bValidation=false}
        }     
    }
    return bValidation
}

function validateNumber(number){
    return /^[0-9]+(\.)?[0-9]*$/.test(number)
}

function addWorkout(){
    if (loggedInUser != -1){

        let workoutName = prompt('please input the name of your workout')
        while(!stringValidation(workoutName,false,false)){
            workoutName = prompt('please input the name of your workout');
        }
        workoutName = workoutName.trim();

        let workoutDuration = prompt('please input the duration of your workout in minutes')
        while(!validateNumber(workoutDuration)){
            workoutDuration = prompt('please input the duration of your workout in minutes')
        }
        workoutDuration = parseFloat(workoutDuration);

        let calariesBurnt = prompt('please input the amount of caleries you burnt during your workout')
        while(!validateNumber(calariesBurnt)){
            calariesBurnt = prompt('please input the amount of caleries you burnt during your workout')
        }
        calariesBurnt = parseFloat(calariesBurnt);

        logExercise(workoutName,workoutDuration,calariesBurnt);
        console.log(userList[loggedInUser].exercisesComplete[userList[loggedInUser].exercisesComplete.length-1])
    }   
}

function makeUser(){

    //ensuring validity of usename entered 
    let bValid=true;
    let validUserName =prompt("Please enter a username");

    while(!stringValidation(validUserName,true,true)){
        validUserName = prompt('Username invalid or in use\nPlease enter a new username:');
    }

    validUserName=validUserName.trim();

    let validPassword = prompt("Please enter a password");
    while(!stringValidation(validPassword,false,true)){
        validPassword = prompt('Password invalid\nPlease enter a new password:');
    }
    validPassword = validPassword.trim();


    let validFirstName = prompt('Please enter your first name');
    while(!stringValidation(validFirstName,false,false)){
        validFirstName = prompt('Name invalid\nPlease enter a new first name:');
    }
    validFirstName =validFirstName.trim();

    let validSurname = prompt("Please enter your surname");
    while(!stringValidation(validSurname,false,false)){
        validSurname = prompt('Name invalid\nPlease enter a new Surnamename:');
    }
    validSurname=validSurname.trim();
    
    let validHeight = prompt('please enter your height in cm');
    while(!validateNumber(validHeight)){
        validHeight = prompt('please enter your height in cm')
    }
    validHeight=parseFloat(validHeight);

    let validWeight = prompt('please enter your weight in kg');
    while(!validateNumber(validWeight)){
        validHeight = prompt('please enter your weight in kg')
    }
    validweight=parseFloat(validWeight);

    let validAge = prompt('please enter your age');
    while(!validateNumber(validAge)){
        validAge = prompt('please enter your age')
    }
    validAge=parseFloat(validAge);

    userList.push(PopulateUser(validUserName,validPassword,validFirstName,validSurname,validHeight,validWeight,validAge))

    loggedInUser = userList.length-1;
    console.log(userList[loggedInUser])
}

window.addEventListener('load', app);

      function app() {
            const JoinButton =document.getElementById('JoinButton');
            const workoutButton = document.getElementById('WorkoutButton');
            workoutButton.addEventListener('click',addWorkout)
            JoinButton.addEventListener('click',makeUser);
        }
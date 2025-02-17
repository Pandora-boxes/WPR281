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
    weightLog : new Array()


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
    weightLog.push(newUser.weight,newUser.datejoined);
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



window.addEventListener('load', app);

      function app() {
        const JoinButton =document.getElementById('JoinButton');
            function makeUser(){
                userList.push(
                PopulateUser(
                prompt('enter a username'),
                prompt('enter a password'),
                prompt('enter a first name'),
                prompt('enter a last name'),
                prompt('enter a height'),
                prompt('enter a weight'),
                prompt('enter an age')))
                loggedInUser = userList.length-1;
                console.log(userList[loggedInUser])
            }
            JoinButton.addEventListener('click',makeUser);
}
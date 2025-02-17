let loggedInUser = -1;
let userList=[];
let Account = {
    userName : "",
    userPassword :"",
    favoriteExercises : [],
    exercisesComplete : [],
    firstName : '',
    lastName : '',
    height : null,
    weight : null,
    age : null ,
    datejoined: new Date(),
    weightLog : [[]],


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
    weightLog.push([newUser.weight,newUser.datejoined]);
}

function logExercise(fname,fDuration,fCBurnt){
       
        let fCurrentUser = userList[i];
        let fObject = Object.create(exercise);

        fObject.exerciseName = fname;
        fObject.exerciseDuration = fDuration;
        fObject.calariesBurnt = fCBurnt;

        fCurrentUser.exercisesComplete.push(fObject);
}

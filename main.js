let usertemp = {};
let loggedInUser = -1;
let userList=[];

// all integer inputs are required by the user 
// all text inputs are auto filled

let exerciseList = [
  cardio= [
    {
      name: "Jogging",
      time: 0,
      distance: 0,
      speed: 0,
      caloriesBurned: 0,
      intensity: "Moderate",
      exerciseGroup: "Cardio"
    },
    {
      name: "Cycling",
      time: 0,
      distance: 0,
      speed: 0,
      caloriesBurned: 0,
      intensity: "High",
      exerciseGroup: "Cardio"
    },
    {
      name: "JumpRope",
      time: 0,
      reps: 0,
      speed: 0,
      caloriesBurned: 0,
      intensity: "High",
      exerciseGroup: "Cardio"
    },
    {
      name: "Rowing",
      time: 0,
      distance: 0,
      speed: 0,
      caloriesBurned: 0,
      intensity: "Moderate",
      exerciseGroup: "Cardio"
    },
    {
      name: "Swimming",
      time: 0,
      distance: 0,
      speed: 0,
      caloriesBurned: 0 ,
      intensity: "High",
      exerciseGroup: "Cardio"
    },
    {
      name: "StairClimbing",
      time: 0,
      distance: 0,
      speed: 0,
      caloriesBurned: 200,
      intensity: "Moderate",
      exerciseGroup: "Cardio"
    },
    {
      name: "Sprints 100m",
      time: 0,
      distance: 100,
      speed: 0,
      caloriesBurned: 0,
      intensity: "Max",
      exerciseGroup: "Cardio"
    },
    {
      name: "Sprints 200m",
      time: 0,
      distance: 200,
      speed: 0,
      caloriesBurned: 0,
      intensity: "Max",
      exerciseGroup: "Cardio"
    },
    {
      name: "Sprints 400m",
      time: 0,
      distance: 400,
      speed: 0,
      caloriesBurned: 0,
      intensity: "Max",
      exerciseGroup: "Cardio"
    }
  ],
  bodyWeightExercises= [
    {
      name: "PushUps",
      time: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "Moderate",
      exerciseGroup: "BodyWeight"
    },
    {
      name: "PullUps",
      time: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "High",
      exerciseGroup: "BodyWeight"
    },
    {
      name: "Squats",
      time: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "Moderate",
      exerciseGroup: "BodyWeight"
    },
    {
      name: "Lunges",
      time: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "Moderate",
      exerciseGroup: "BodyWeight"
    },
    {
      name: "Dips",
      time: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "High",
      exerciseGroup: "BodyWeight"
    },
    {
      name: "Plank",
      time: 0,
      holdTime: 0,
      maxHoldTime: 0,
      caloriesBurned: 0,
      intensity: "Moderate",
      exerciseGroup: "BodyWeight"
    },
    {
      name: "SitUps",
      time: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "Moderate",
      exerciseGroup: "BodyWeight"
    },
    {
      name: "Burpees",
      time: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "High",
      exerciseGroup: "BodyWeight"
    }
  ],
  weightedLifts= [
    {
      name: "Deadlifts",
      time: 0,
      weight: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "High",
      exerciseGroup: "WeightedLifts"
    },
    {
      name: "BenchPress",
      time: 0,
      weight: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "High",
      exerciseGroup: "WeightedLifts"
    },
    {
      name: "OverheadPress",
      time: 0,
      weight: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "Moderate",
      exerciseGroup: "WeightedLifts"
    },
    {
      name: "Squats",
      time: 0,
      weight: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "High",
      exerciseGroup: "WeightedLifts"
    },
    {
      name: "BicepCurls",
      time: 0,
      weight: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "Moderate",
      exerciseGroup: "WeightedLifts"
    },
    {
      name: "KettlebellSwings",
      time: 0,
      weight: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "High",
      exerciseGroup: "WeightedLifts"
    },
    {
      name: "TireFlips",
      time: 0,
      weight: 0,
      reps: 0,
      maxReps: 0,
      caloriesBurned: 0,
      intensity: "High",
      exerciseGroup: "WeightedLifts"
    }
  ],
  stretches= [
    {
      name: "StaticHamstringStretch",
      time: 0,
      holdTime: 0,
      maxHoldTime: 0,
      flexibilityGain: "Moderate",
      exerciseGroup: "Stretches"
    },
    {
      name: "DynamicHipFlexorStretch",
      time: 0,
      reps: 0,
      maxHoldTime: 0,
      flexibilityGain: "High",
      exerciseGroup: "Stretches"
    },
    {
      name: "ShoulderStretch",
      time: 0,
      holdTime: 0,
      maxHoldTime: 0,
      flexibilityGain: "Low",
      exerciseGroup: "Stretches"
    },
    {
      name: "YogaPoseDownwardDog",
      time: 0,
      holdTime: 0,
      maxHoldTime: 0,
      flexibilityGain: "High",
      exerciseGroup: "Stretches"
    },
    {
      name: "FoamRollingQuads",
      time: 0,
      duration: 0,
      maxDuration: 0,
      flexibilityGain: "Moderate",
      exerciseGroup: "Stretches"
    },
    {
      name: "TaiChiSlowMovements",
      time: 0,
      reps: 0,
      maxReps: 0,
      flexibilityGain: "High",
      exerciseGroup: "Stretches"
    },
    {
      name: "WallChestStretch",
      time: 0,
      holdTime: 0,
      maxHoldTime: 0 ,
      flexibilityGain: "Moderate",
      exerciseGroup: "Stretches"
    },
    {
      name: "SeatedForwardFold",
      time: 0,
      holdTime: 0,
      maxHoldTime: 0,
      flexibilityGain: "High",
      exerciseGroup: "Stretches"
    }
  ]
]



let Account = {
    userName : "",
    userPassword :"",
    userEmail:'',
    userPhoneNumber:'',
    favoriteExercises : new Array(),
    exercisesComplete : new Array(),
    firstName : '',
    lastName : '',
    height : null,
    weight : null,
    age : null ,
    datejoined: new Date(),
    weightLog : [[0,new Date()]],
    achivements: [],
    usersBestList: exerciseList,
    GoalDetails:{
      type: "", //type of 
      // [calories burnt, distance covered, weight lifted, time streching or exercises logged]
      startDate: new Date(),
      endDate: new Date(),// the date they enter in the form
      goalTarget:0, // end goal
      goalCounter:0 //running total 
    },
    completedGoals:[],
    missedGoals:[]
}
function updateWeight(newWeight){
  let currentUser = userList[loggedInUser];
  currentUser.weight=newWeight;
  currentUser.weightLog.push([newWeight,new Date()])
}

function addFavExercise(exerciseGroup,exerciseName){
  let currentUser = userList[loggedInUser];
  currentUser.favoriteExercises.push([exerciseGroup,exerciseName]);
}
function removeFavExercise(exerciseGroup,exerciseName){
  let currentUser = userList[loggedInUser];
  let arrayFavExercises = currentUser.favoriteExercises;
  arrayFavExercises=arrayFavExercises.filter((e)=>e!=[exerciseGroup,exerciseName])
  currentUser.favoriteExercises=arrayFavExercises;
}
function addGoal(){
  let currentUser= userList[loggedInUser]
  let Goal = currentUser.GoalDetails
  let goalType = null // get user to input from the listed types
  let goalEndDate = Date.setDate(new Date()+ null ) //user inputted amount of days takes the place of the null
  let GoalTarget = null // get from user input
  
  if (GoalTarget>0 && Goal.type.length==0){
    Goal.type = goalType;
    Goal.startDate = new Date();
    Goal.endDate=goalEndDate;
    Goal.goalTarget= GoalTarget;
    Goal.goalCounter = 0;
  }
};

function checkGoal(){
  let currentUser= userList[loggedInUser]
  let Goal = currentUser.GoalDetails
  if(Goal.type.length<=0){
    // dont do anything if there is no goal set
  }
  else if (Goal.goalCounter>goalTarget){
    //goal Achieved inform user
    let tempObject={};
    Object.assign(tempObject,Goal);
    tempObject.completeDate=new Date();
    currentUser.completedGoals.push(tempObject);

    Goal.type = null;
    Goal.startDate = null;
    Goal.endDate=null;
    Goal.goalTarget= null;
    Goal.goalCounter = null;
  }else if((Goal.goalEndDate-new Date())<0){
    //goal failed inform user 
    let tempObject={};
    Object.assign(tempObject,Goal);
    currentUser.missedGoals.push(tempObject);

    Goal.type = null;
    Goal.startDate = null;
    Goal.endDate=null;
    Goal.goalTarget= null;
    Goal.goalCounter = null;
  }
}


function addExercise(exerciseGroup,exerciseName){
  let currentUser = userList[loggedInUser];
  let selectedExercise = exerciseGroup ;// get input from user choice

  // finding the object in the exercise list that relates to the one chosen by the user and making a new copy of it
  let filteredArray = exerciseList.filter((e)=>{
    return e[0].exerciseGroup == selectedExercise})
  filteredArray = Array.from(filteredArray[0]);
  filteredArray = filteredArray.filter((e)=>e.name == exerciseName);
  let i=0;
  let ii = 0;

  //loop throught the users stored pbs for the one that represents the current exercise
  for (i;i<currentUser.usersBestList.length;++i){
    if(currentUser.usersBestList[i][0].exerciseGroup == exerciseGroup){
    for (ii;ii<currentUser.usersBestList[i].length;++ii){
      if(currentUser.userList[i][ii].name==exerciseName){
        let index1=i;
        let index2=ii;
        break;
      }
    }
    }
  }
  let exerciseObj = {};
  let UserbestOBJ = currentUser.usersBestList[index1][index2];
  Object.assign(exerciseObj,filteredArray[0]);

  let inputValue1=null;
  let inputValue2=null;
  let inputValue3=null;
  let inputValue4=null;
  let inputValue5=null;
  let isUserBest = false;
  // taking user input and storing it based off the exercise the user has chosen
  // also checking for achievements and user personal bests
  switch (exerciseGroup){
    case "Cardio":
      inputValue1 = document.querySelector('#ExerciseInputValue1').value;
      inputValue2 = document.querySelector('#ExerciseInputValue2').value;
      inputValue3 = document.querySelector('#ExerciseInputValue3').value;
      inputValue4 = document.querySelector('#ExerciseInputValue4').value;

      exerciseObj.time = inputValue1
      exerciseObj.distance=inputValue2
      if(exerciseName=="JumpRope"){exerciseObj.reps=inputValue3}
      else{
        //updating goal details
        if(currentUser.GoalDetails.type == "distance covered"){currentUser.GoalDetails.goalCounter+=inputValue1}
  
        exerciseObj.speed=inputValue3
      }
      exerciseObj.caloriesBurned=inputValue4

      // checking for user best
      switch(exerciseName){
        case "Jogging"||"Cycling"||"Rowing"||"Swimming"||"StairClimbing":
          if (exerciseObj.distance>UserbestOBJ.distance){
            UserbestOBJ.time = inputValue1
            UserbestOBJ.distance=inputValue2
            UserbestOBJ.speed=inputValue2/inputValue1
            UserbestOBJ.caloriesBurned=inputValue4
            isUserBest=true
          }else if(UserbestOBJ.distance==exerciseObj.distance&&exerciseObj.time<UserbestOBJ.time){
            UserbestOBJ.time = inputValue1
            UserbestOBJ.distance=inputValue2
            UserbestOBJ.speed=inputValue2/inputValue1
            UserbestOBJ.caloriesBurned=inputValue4
            isUserBest=true
          }
        break;
        case "Sprints 100m"||"Sprints 200m"||"Sprints 400m":
        if (exerciseObj.time<UserbestOBJ.time){
          UserbestOBJ.time = inputValue1
          UserbestOBJ.distance=inputValue2
          UserbestOBJ.speed=inputValue2/inputValue1
          UserbestOBJ.caloriesBurned=inputValue4
          isUserBest=true
        }
        break;
        case "JumpRope":
          if (exerciseObj.time>UserbestOBJ.time){
            UserbestOBJ.time = inputValue1
            UserbestOBJ.reps=inputValue2
            UserbestOBJ.speed=inputValue2/inputValue1
            UserbestOBJ.caloriesBurned=inputValue4
            isUserBest=true
          }
          break;

        default:
        break;
      }
      break;
    
    case "BodyWeight":
      
      inputValue1 = document.querySelector('#ExerciseInputValue1').value;
      inputValue2 = document.querySelector('#ExerciseInputValue2').value;
      inputValue3 = document.querySelector('#ExerciseInputValue3').value;
      inputValue4 = document.querySelector('#ExerciseInputValue4').value;

      exerciseObj.time= inputValue1;
      if (exerciseName!="Plank"){
        exerciseObj.reps= inputValue2;
        exerciseObj.maxReps= inputValue3;
      }else{
        exerciseObj.holdTime= inputValue2;
        exerciseObj.maxHoldTime= inputValue3;
      }
      exerciseObj.caloriesBurned= inputValue4;

      // checking for user best
      switch(exerciseName){
        case "PushUps"||"PullUps"||"Squats"||"Lunges"||"Dips"||"SitUps"||"Burpees":
          if(exerciseObj.maxReps>UserbestOBJ.maxReps){
            UserbestOBJ.time= inputValue1;
            UserbestOBJ.reps= inputValue2;
            UserbestOBJ.maxReps= inputValue3;
            UserbestOBJ.caloriesBurned= inputValue4;
            isUserBest=true;

          }else if(exerciseObj.maxReps==UserbestOBJ.maxReps&&exerciseObj.reps>UserbestOBJ.reps){
            UserbestOBJ.time= inputValue1;
            UserbestOBJ.reps= inputValue2;
            UserbestOBJ.maxReps= inputValue3;
            UserbestOBJ.caloriesBurned= inputValue4;
            isUserBest=true;
          }else if(exerciseObj.maxReps==UserbestOBJ.maxReps&&exerciseObj.reps==UserbestOBJ.reps&&exerciseObj.time<UserbestOBJ.time){
            UserbestOBJ.time= inputValue1;
            UserbestOBJ.reps= inputValue2;
            UserbestOBJ.maxReps= inputValue3;
            UserbestOBJ.caloriesBurned= inputValue4;
            isUserBest=true;
          }
          break;

        case "Plank":
          if(exerciseObj.maxHoldTime>UserbestOBJ.maxHoldTime||(exerciseObj.maxHoldTime==UserbestOBJ.maxHoldTime&&exerciseObj.time>UserbestOBJ.time)){
            UserbestOBJ.time= inputValue1;
            UserbestOBJ.holdTime= inputValue2;
            UserbestOBJ.maxHoldTime= inputValue3;
            UserbestOBJ.caloriesBurned= inputValue4;
            isUserBest=true;
          }
        break;
      }
      break;
    
    case "WeightedLifts":
      inputValue1 = document.querySelector('#ExerciseInputValue1').value;
      inputValue2 = document.querySelector('#ExerciseInputValue2').value;
      inputValue3 = document.querySelector('#ExerciseInputValue3').value;
      inputValue4 = document.querySelector('#ExerciseInputValue4').value;
      inputValue5 = document.querySelector('#ExerciseInputValue5').value;

      exerciseObj.time= inputValue1;
      exerciseObj.reps= inputValue2;
      exerciseObj.maxReps= inputValue3;
      exerciseObj.caloriesBurned= inputValue4;
      exerciseObj.weight=inputValue5;
      //updating goal details
      if(currentUser.GoalDetails.type == "weight lifted"){currentUser.GoalDetails.goalCounter+=inputValue1}
  

      // checking for user best
      if(exerciseObj.weight>UserbestOBJ.weight||(exerciseObj.weight==UserbestOBJ.weight&&(exerciseObj.maxReps>UserbestOBJ.maxReps||(exerciseObj.maxReps==UserbestOBJ.maxReps&&exerciseObj.reps>UserbestOBJ.reps)))){
        UserbestOBJ.time= inputValue1;
        UserbestOBJ.reps= inputValue2;
        UserbestOBJ.maxReps= inputValue3;
        UserbestOBJ.caloriesBurned= inputValue4;
        UserbestOBJ.weight=inputValue5;
        isUserBest=true;
      }
      break;
    
    case "Stretches":
      inputValue1 = document.querySelector('#ExerciseInputValue1').value;
      inputValue2 = document.querySelector('#ExerciseInputValue2').value;
      inputValue3 = document.querySelector('#ExerciseInputValue3').value;

      exerciseObj.time= inputValue1;
      switch(exerciseName){
        case "FoamRollingQuads":
          exerciseObj.duration= inputValue2;
          exerciseObj.maxDuration= inputValue3;
          break
        case "TaiChiSlowMovements":
          exerciseObj.reps= inputValue2;
          exerciseObj.maxReps= inputValue3;
          break
        default:
          exerciseObj.holdTime= inputValue2;
          exerciseObj.maxHoldTime= inputValue3;
          break;
      }
      //updating goal details
      if(currentUser.GoalDetails.type == "time streching"){currentUser.GoalDetails.goalCounter+=inputValue1}
  
      // checking for user best
      switch(exerciseName){
        case "FoamRollingQuads":
          if(exerciseObj.maxDuration>UserbestOBJ.maxDuration){
            UserbestOBJ.duration= inputValue2;
            UserbestOBJ.maxDuration= inputValue3;
            UserbestOBJ.time= inputValue1;
          }
        break;

        case "TaiChiSlowMovements":
          if(exerciseObj.maxReps>UserbestOBJ.maxReps){
            UserbestOBJ.reps= inputValue2;
            UserbestOBJ.maxReps= inputValue3;
            UserbestOBJ.time= inputValue1;
          }
        break;

        default:
          if(exerciseObj.maxHoldTime>UserbestOBJ.maxHoldTime){
            UserbestOBJ.holdTime= inputValue2;
            UserbestOBJ.maxHoldTime= inputValue3;
            UserbestOBJ.time= inputValue1;
          }
        break;


      }
    break;

    

    default:
      // error catching making sure we get the right input in the correct format
      console.log("function call error Please check input variables are correct when debugging");
      break;

  }
  
  // rewarding the user and updating goals
  if(currentUser.GoalDetails.type == "exercises logged"){currentUser.GoalDetails.goalCounter+=1}
  else if(currentUser.GoalDetails.type == "calories burnt"&&exerciseGroup!="Stretches"){currentUser.GoalDetails.goalCounter+=exerciseObj.caloriesBurned}
  checkGoal();
  if (isUserBest){
      // maybe play an animation for now alert 
      alert("WELL DONE!!!! Thats a new personal best!! Keep it up!")
    }
    else{
      //maybe play an animation for now alert
      alert('Well done!! thats another step to your fitness goals!! keep it up!');
    }
  currentUser.exercisesComplete.push([exerciseObj,new Date]);
};

function exerciseTypeToOptionsList(exerciseGroup){
  let outString='';
let arrayOptions = exerciseList.filter(e=>e[0].exerciseGroup==exerciseGroup);
arrayOptions=arrayOptions[0];
let tempArray = [];
let outlist = [];
arrayOptions.forEach(e => {
  tempArray = arrayOptions.filter(element=>element==[exerciseGroup,e.name])
  if (tempArray.length!=0){
    outlist.unshift(`<option value="${e.name}">${e.name}</option>`)
  } else{
    outlist.push(`<option value="${e.name}">${e.name}</option>\n`)
  }
 });

 arrayOptions.forEach(e => outString += e);
console.log(outString);
return outString;
};

function PopulateUser(fUsername,fUserPassword,fFirstName,fLastName,fHeight,fWeight,fage,fEmail,fPhoneNumber){
    let newUser = Object.create(Account);
    newUser.userPhoneNumber = fPhoneNumber;
    newUser.userEmail=fEmail;
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

function addUser(fusername,fUserPassword){
    
    userList.push(PopulateUser(fusername,fUserPassword,usertemp.firstName,usertemp.lastName,usertemp.height,usertemp.weight,usertemp.age,usertemp.userEmail,usertemp.userPhoneNumber));
        loggedInUser =-1;
}
userList.push(PopulateUser('admin','admin','','','','','','',''));
window.addEventListener('load',loadIndex);

// for all load{page Name here} we take the html of a page as a string components
//  and insert it into the current html page whilst replaceing all the current
// html. this allows us to maintain the variables we are storing without having to
// save them to a permanent storage medium. this only works for as long as the user 
// does not refresh or reload the page!!!

// we also use this to assign the events to inteactive components as they previously 
// did not "exist" this also helps to keep all the code for the different pages more
// or less constained
//
function loadIndex(){
    usertemp=null;  
    let newpagebody =  `   <header>
        <div class="logo">
            <img src="images/Logp.png" id="logo" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <div class="menu">
            <a id="Login"><span>Login in</span></a>
        </div>
    </header>

    <section class="hero">
        <h1>Become more than you are</h1>
        <p>Train with us</p>
    </section>

    <section class="age-groups">
        <a class="index-age-card" id="age-card-1">
            <img src="images/18-29.png" alt="Age 18-29">
            <p>Age: 18-29</p>
        </a>
        <a class="index-age-card" id="age-card-2">
            <img src="images/30-39.png" alt="Age 30-39">
            <p>Age: 30-39</p>
        </a>
        <a class="index-age-card" id="age-card-3">
            <img src="images/40-49.png" alt="Age 40-49">
            <p>Age: 40-49</p>
        </a>
        <a class="index-age-card" id="age-card-4">
            <img src="images/50+.png" alt="Age 50+">
            <p>Age: 50+</p>
        </a>
    </section>
    <section class="terms-section">
        <label>
            <input type="checkbox" id="termsCheckbox">
            By continuing, you agree to our <a href="#">Terms of service</a> and acknowledge our <a href="#">Privacy policy</a> and <a href="#">Cookie policy</a>
        </label>
        <br>
        <label>
            <input type="checkbox" id="updatesCheckbox">
            I would like to receive updates about products, services, and special offers from Momentum via email
        </label>
        <br>
        <div id="errorMessage" class="error-message" style="display: none;">
            ❗ To continue, please accept our terms and policies
        </div>
    </section>
    <footer>
        <div class="footer-content">
            <div class="logo2">
                <p>© Momentum 2025</p>
                <img src="images/Logp.png" alt="Momentum Logo"> 
            </div>
        </div>
    </footer>  `;

    let newPageHeader = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum Landing 1</title>
    <link rel="stylesheet" href="styles.css">`;

    let documentHead = document.querySelector('head');
    let documentBody = document.querySelector('body');
    documentHead.innerHTML=newPageHeader;
    documentBody.innerHTML = newpagebody;

    let landing2Button1 = documentBody.querySelector('#age-card-1');
    let landing2Button2 = documentBody.querySelector('#age-card-2');
    let landing2Button3 = documentBody.querySelector('#age-card-3');
    let landing2Button4 = documentBody.querySelector('#age-card-4');
    let loginButton = documentBody.querySelector('#Login');
    let checkbox = documentBody.querySelector("#termsCheckbox");
  
    loginButton.addEventListener('click',loadLogin);
    landing2Button1.addEventListener('click',e=>{
        usertemp = PopulateUser('','','','','','',"18-29",'','');
        if(checkbox.checked==true)loadLanding2()
          else alert("please agree to our terms and conditions before continuing")
        });
    
    landing2Button2.addEventListener('click',e=>{
        usertemp = PopulateUser('','','','','','','30-39','','');
        if(checkbox.checked==true){loadLanding2()}
          else alert("please agree to our terms and conditions before continuing")
      });

    landing2Button3.addEventListener('click',e=>{
        usertemp = PopulateUser('','','','','','',"40-49",'','');
        if(checkbox.checked==true)loadLanding2()
          else alert("please agree to our terms and conditions before continuing")
      });

    landing2Button4.addEventListener('click',e=>{
        usertemp = PopulateUser('','','','','','',"50+",'','');
        if(checkbox.checked==true)loadLanding2()
          else alert("please agree to our terms and conditions before continuing")
      
      });
    
};

function loadLanding2(){
    let newpagebody = `    <header>
        <div class="logo">
            <img src="images/Logp.png" id="logo" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <div class="menu">
            <a id="Login"><span>Login in</span></a>
        </div>
    </header>

    <div class="container">
        <h1>Choose your body type</h1>

        <div class="body-type-options">

            <a class="landing2-body-card">
                <div class="option">
                    <img src="images/Slim.webp" alt="Slim Body Type">
                    <span class="body">Slim</span>
               </div>
            </a>

            <a class="landing2-body-card">
                <div class="option">
                    <img src="images/Average.webp" alt="Average Body Type">
                    <span class="body">Average</span>
                </div>
            </a>

            <a class="landing2-body-card">
                <div class="option">
                    <img src="images/Heavy.webp" alt="Heavy Body Type">
                    <span class="body">Heavy</span>
                </div>
            </a>
        </div>
    </div>
    </section>

    <footer>
        <div class="footer-content">
            <div class="logo2">
                <p>© Momentum 2025</p>
                <img src="images/Logp.png" alt="Momentum Logo"> 
            </div>
        </div>
    </footer>
</body>`;
    let  newPageHeader = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum Landing 2</title>
    <link rel="stylesheet" href="land2.css">`; 

    let documentHead = document.querySelector('head');
    let documentBody = document.querySelector('body');
    documentHead.innerHTML=newPageHeader;
    documentBody.innerHTML = newpagebody;

    let landing3Button = documentBody.getElementsByClassName('option');
    let loginButton = documentBody.querySelector('#Login');
    let logoButton = documentBody.querySelector('#logo');

    logoButton.addEventListener('click',loadIndex);
    loginButton.addEventListener('click',loadLogin);
    for (let i=0;i<landing3Button.length;++i){
    landing3Button[i].addEventListener('click',loadLanding3);
    }
}

function loadLanding3(){
    let newpagebody =`<header>
        <div class="logo">
            <img src="images/Logp.png" id="logo" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <div class="menu">
            <a id="Login"><span>Login in</span></a>
        </div>
    </header>

    <div class="container">
        <h1>Choose your goal</h1>
        <div class="goal-type-options">
            <a class="landing3-goal-card">
                <div class="option">
                    <img src="images/Muscle Gain.png" alt="Muscle Gain Type">
                    <span class="goal">Muscle Gain</span>
                </div>
            </a>
            <a class="landing3-goal-card">
                <div class="option">
                    <img src="images/Weight Loss.png" alt="Weight loss Type">
                    <span class="goal">Weight loss</span>
                </div>
            </a>
            <a class="landing3-goal-card">
                <div class="option">
                    <img src="images/Get Shredded.png" alt="Shredded Type">
                    <span class="goal">Get Shredded</span>
                </div>
            </a>
        </div>
    </div>
    </section>
    <footer>
        <div class="footer-content">
            <div class="logo2">
                <p>© Momentum 2025</p>
                <img src="images/Logp.png" alt="Momentum Logo"> 
            </div>
        </div>
    </footer>`;
    let newPageHeader =`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum Landing 3</title>
    <link rel="stylesheet" href="land3.css">`;
    let documentHead = document.querySelector('head');
    let documentBody = document.querySelector('body');
    documentHead.innerHTML=newPageHeader;
    documentBody.innerHTML = newpagebody;

    let landing3Button = documentBody.getElementsByClassName('landing3-goal-card');
    let loginButton = documentBody.querySelector('#Login');
    let logoButton = documentBody.querySelector('#logo');

    logoButton.addEventListener('click',loadIndex);
    loginButton.addEventListener('click',loadLogin);
    for (let i=0;i<landing3Button.length;++i){
    landing3Button[i].addEventListener('click',loadLanding4);
    }
}
function loadLanding4(){
    let newpagebody = `
    <header>
        <div class="logo">
            <img src="images/Logp.png" id="logo" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <div class="menu">
            <a id="Login"><span>Login in</span></a>
        </div>
    </header>
    <h1>Last few details</h1>


    <form action="submit" method="POST" class="grid" id="detailsForm">
        <section class="form">
            <h2>What's your height?</h2>
            <br>
            <div class="input-container">
                <label for="heightInput" id="heightLabel">Height (cm)</label>
                <br>
                <input type="number" id="heightInput" name="height" placeholder="___ cm" required>
            </div>
        </section>

        <section class="form">
            <h2>What's your weight?</h2>
            <br>
            <div class="input-container">
                <label for="weightInput" id="weightLabel">Weight (kgs)</label>
                <br>
                <input type="number" id="weightInput" name="weight" placeholder="___ kgs" required>
            </div>
        </section>

        <section class="form">
            <h2>What's your name and surname?</h2>
            <br>
            <div class="input-container">
                <label for="nameInput" id="nameLabel">Name</label>
                <br>
                <input type="text" id="nameInput" name="name" placeholder="Jon" required>
                <br>
                <label for="surnameInput" id="surnameLabel">Surname</label>  
                <br>
                <input type="text" id="surnameInput" name="surname" placeholder="Snow" required>
            </div>
        </section>

        <section class="form">
            <h2>What's your contact details?</h2>
            <br>
            <div class="input-container">
                <label for="mobileInput" id="mobileLabel">Mobile Number</label>
                <br>
                <input type="tel" id="mobileInput" name="mobile" placeholder="093 734 5012" required>
                <br>
                <label for="emailInput" id="emailLabel">Email Address</label>
                <br>
                <input type="email" id="emailInput" name="email" placeholder="Jon.Snow@gmail.com" required>
            </div>    
        </section>
        <div class="button">
                <button type="submit" id="continueBtn" class="continue-btn" >Continue →</button>
        </div>
    </form> 

    <br>
    <br> 
    <footer>
        <div class="footer-content">
            <div class="logo2">
                <p>© Momentum 2025</p>
                <img src="images/Logp.png" alt="Momentum Logo"> 
            </div>
        </div>
    </footer>`;
    let newPageHeader =`<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum Landing 4</title>
    <link rel="stylesheet" href="land4.css">
    `;

    let documentHead = document.querySelector('head');
    let documentBody = document.querySelector('body');
    documentHead.innerHTML=newPageHeader;
    documentBody.innerHTML = newpagebody;

    let landing3Button = documentBody.querySelector('#detailsForm');
    let loginButton = documentBody.querySelector('#Login');
    let logoButton = documentBody.querySelector('#logo');

    logoButton.addEventListener('click',loadIndex);
    loginButton.addEventListener('click',loadLogin);
    landing3Button.addEventListener('submit',function(e) {
        e.preventDefault();
        if(this.checkValidity()) {
            let fFirstName = documentBody.querySelector("#nameInput").value;
            let fLastName = documentBody.querySelector("#surnameInput").value;
            let fHeight =  documentBody.querySelector("#heightInput").value;
            let fWeight = documentBody.querySelector("#weightInput").value;
            let fEmail = documentBody.querySelector("#emailInput").value;
            let fPhoneNumber=document.querySelector("#mobileInput").value;

            
            usertemp = (PopulateUser('','',fFirstName,fLastName,fHeight,fWeight,usertemp.age,fEmail,fPhoneNumber));
            loadLanding5()
        }
    });

}
function loadLanding5(){
    let newPageHeader = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum Landing 5</title>
    <link rel="stylesheet" href="land5.css">
    `;
    let newpagebody = ` <header>
        <div class="logo">
            <img src="images/Logp.png" id="logo" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <div class="menu">
            <a id="Login"><span>Login in</span></a>
        </div>
    </header>
    <h1>Finally you must create a username and a password</h1>

    <form action="submit" method="POST" class="grid" id="detailsForm2">
        <section class="form">
            <br>
            <div class="input-container">
                <label for="usernameInput" id="usernameLabel"><h2>Create a username</h2></label>
                <br>
                <input type="text" id="usernameInput" name="username" placeholder="username" required>
            </div>
        </section>

        <section class="form">
            <br>
            <div class="input-container">
                <label for="passwordInput" id="passwordLabel"><h2>Create a password</h2></label>
                <br>
                <input type="password" id="passwordInput" name="password" placeholder="@password123" required>
            </div>
        </section>

        <div class="button">
            <button type="submit" id="continueBtn" class="continue-btn" >Continue →</button>
    </div>
    </form>

    <footer>
        <div class="footer-content">
            <div class="logo2">
                <p>© Momentum 2025</p>
                <img src="images/Logp.png" alt="Momentum Logo"> 
            </div>
        </div>
    </footer>`;

    let documentHead = document.querySelector('head');
    let documentBody = document.querySelector('body');
    documentHead.innerHTML=newPageHeader;
    documentBody.innerHTML = newpagebody;

    let landing3Button = documentBody.querySelector('#detailsForm2');
    let loginButton = documentBody.querySelector('#Login');
    let logoButton = documentBody.querySelector('#logo');

    logoButton.addEventListener('click',loadIndex);
    loginButton.addEventListener('click',loadLogin);
    landing3Button.addEventListener('submit',function(e) {
        e.preventDefault();
    
        let username = documentBody.querySelector('#usernameInput');
        if (!stringValidation(username.value,true,true)){
            username.value = null ;
            alert('username invalid or already in use');
        };

        if(this.checkValidity()) {
            let password = documentBody.querySelector('#passwordInput')
            addUser(username.value,password.value);
            usertemp=null;
            loadIndex();
        }
    });
};
function loadMainBone(){
    let newpagebody = `<header>
      <nav>
        <div class="nav__header">
          <div class="nav__logo">
           
              <img src="images/LOgo (2).png" alt="logo" class="logo-white" />
              <img src="images/LOgo (2).png" alt="logo" class="logo-dark" />
            
          </div>
          <div class="nav__menu__btn" id="menu-btn">
            <i class="ri-menu-line"></i>
          </div>
        </div>
        <ul class="nav__links" id="nav-links">
          <!-- these hrefs we dont have to change, it allows for automatic
               scrolling to these sections on the home page -->
          <li><a href="#home">Home</a></li>
          <li><a href="#jump">Recent</a></li>
          <li><a href="#service">Services</a></li>
          <li><a id="logOut">LogOut</a></li>
          <li><a href="#report">Report</a></li>
          <li><a href="#inspire">Achievements</a></li>
          
        </ul>
        <!-- <div class="nav__btns"> idea
          <button class="btn">Join Now</button>
        </div> -->
      </nav>
      <div class="section__container header__container" id="home">
        <div class="header__content">
          <h1>Welcome</h1>
          <h2>Let's chase some goals</h2>
          <p>
           Lorem ipsum, dolor sit amet
          </p>
          <!-- <div class="header__btn">
            <button class="btn">More</button>
          </div> -->
        </div>
        <div class="header__image">
          <img src="" alt="header" />
        </div>
      </div>
    </header>

    <!-- They can see their excercises, and can choose to resume -->
     <!-- Called it jump because they can jump right back in, dont blame me (i see you) -->
    <div class="jump" id="jump">
      <div class="section__container jump__container">
        <div class="jump__image" id="quoteDisplay">
         <p id="generateQuote"></p>  
         <!-- generates a random quote -->
        </div>
        <div class="jump__content">
          <h2 class="section__header">Your Exercises</h2>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam reprehenderit nesciunt quaer
          at officiis tempora dolorem iusto tenetur ad, ut commodi, quibusdam, autem accusamus eaque sint numquam debitis laudantium sequi consectetur.
          </p>
          <!-- if this section is too small, the circle might be cut off, dont know why? -->
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ab vel 
            ut voluptatibus iste vitae, nostrum molestiae, harum ipsam nemo temporibus quis voluptates earum, esse neque suscipit minima accusamus quidem!
          </p>
          <div class="jump__btn">
            <button class="btn" id="resume__btn">Resume</button>
          </div>
        </div>
      </div>
    </div>

<!-- gives them more to choose from -->
    <section class="service" id="service">
      <div class="section__container service__container">
        <h2 class="section__header">Recommended</h2>
        <div class="service__grid">
          <div class="service__card">
            <span>01</span>
            <h4>Cardio</h4>
            <p>
              Improves cardiovascular endurance, burns calories, strengthens leg muscles, and boosts mental health.
            </p>
            <button class="btn" id="add__btn" value="Cardio">Add</button>
          </div>
          <div class="service__card">
            <span>02</span>
            <h4>Lifting</h4>
            <p>
              Increases muscle strength and mass, improves bone density, and enhances metabolism.
            </p>
            <button class="btn" id="add__btn" value="Lifting">Add</button>
          </div>
          <div class="service__card">
            <span>03</span>
            <h4>Body-Weight Exercises</h4>
            <p>
              Builds upper body strength (chest, shoulders, triceps), engages the core, and enhances endurance.
            </p>
            <button class="btn" id="add__btn" value="Body-Weight-Exercises">Add</button>
          </div>
          <div class="service__card">
            <span>04</span>
            <h4>Stretches</h4>
            <p>
              A full-body workout that boosts cardio fitness, burns fat, builds strength, and improves agility.
            </p>
            <button class="btn" id="add__btn" value="Stretches">Add</button>  
          </div>
          <div class="service__image">
            <img src="images/duderunning.jpg" alt="service" />
          </div>
        </div>
      </div>
    </section>


    <!-- report(it has seperate buttons for the user to select from) -->
    <section class="report" id="report">
      <div class="section__container report__container">
        <h2 class="section__header">Report</h2>
        <div class="report__grid">
          <div class="report__card">
            <div>
              <h4>Calories burned</h4>
              <p>See how much calories you have burned</p>
            </div>
            <span>
              <button class="calorieReport"><i class="ri-arrow-right-fill"></i></button>
            </span>
          </div>
          <div class="report__card">
            <div>
              <h4>Statistics</h4>
              <p>See your productivity displayed on a chart</p>
            </div>
            <span>
              <button class="chartReport"><i class="ri-arrow-right-fill"></i></button>
            </span>
          </div>
          
          <div class="report__card">
            <div>
              <h4>Full Report</h4>
              <p>See your full report since your journey with us</p>
            </div>
            <span>
              <button class="fullReport"><i class="ri-arrow-right-fill"></i></button>
            </span>
          </div>
          
        </div>
      </div>
    </section>


    <!-- Called it inspire because it'll have badges and their goals -->
    <section class="inspire__container" id="inspire">
      <div class="inspire__image">
        <img src="images/BigDudeRunning.jpg" alt="inspire" />
      </div>
      <div class="inspire__content">
        <h2 class="section__header">Your Achievements</h2>
        <p id="badges">
          Your milestones will be displayed here, and how close you are in achieving them
        </p>
    <!-- their achievements displays their badges how far they are with their goals -->
      </div>
    </section>

    <!-- another section for if we want any more info -->
   

    <!-- maybe have a banner, or we can just call it something else -->
    <section class="banner" id="contact">
      <div class="banner__content">
      
        <p>
      </div>
      <!-- <div class="banner__image">
        <img src="assets/banner.png" alt="banner" />
      </div> -->
    </section>


    <!-- footer with more information on where to find us -->
    <section class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <a href="#" class="footer__logo">
            <img src="images/LOGOwhite.png" alt="logo" />
          </a>
          <ul class="footer__links">
            <li>
              <a href="#">
                <span><i class="ri-phone-line"></i></span> +27 73 980 9093
              </a>
            </li>
            <li>
              <a href="#">
                <span><i class="ri-map-pin-line"></i></span> Stellenbosch
              </a>
            </li>
            <li>
              <a href="#">
                <span><i class="ri-mail-line"></i></span> Momentum
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Quick Links</h4>
          <ul class="footer__links">
            <li><button class="back_to_home">Home</button></li>
            <li><button class="back_to_excercises">Excercises</button></li>
            <li><button class="back_to_report">Report</button></li>
          </ul>
        </div>
       
      </div>
      <div class="footer__bar">
        Copyright © 2024 
      </div>
    </section>

    `;
    let newPageHeader = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project</title>
    <link rel="stylesheet" href="mainstyle.css">
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"/>

     
    <link rel="stylesheet" href="mainstyle.css" />
    <title>web project</title>`;

    let documentHead = document.querySelector('head');
    let documentBody = document.querySelector('body');
    documentHead.innerHTML=newPageHeader;
    documentBody.innerHTML = newpagebody;
    
    checkGoal();

    let logOutButton = document.querySelector("#logOut");
    logOutButton.addEventListener('click', e=>{
        loggedInUser=-1;
        loadIndex();
    })

    //mainbone dedicated js
    const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


// defining animation setting
const scrollRevealOption = {
  origin: "bottom", //animations start from bottom
  distance: "50px", //moves 50px
  duration: 1000,
};

//applies scrollreveal animation to head
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",//overrides, slide in from the right
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".jump__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".jump__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".jump__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".jump__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".inspire__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".inspire__content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".mentor__card", {
  ...scrollRevealOption,
  interval: 500,
});



//displays random quotes
const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Push through the pain. Giving up hurts more.” — Vegeta, Dragon Ball Z",
    "Hard work is worthless for those that don’t believe in themselves.” — Naruto Uzumaki, Naruto",
    "It’s not dying that frightens us. It’s living without ever having done our best.” — The Elder, Castlevania",
    "Whether You Win Or Lose...You Can Always Come Out Ahead By Learning From The Experience. - All Might"
]

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("generateQuote").innerText = quotes[randomIndex];//changes innertext to the actual text
}

document.addEventListener("DOMContentLoaded", function () {
  getRandomQuote(); // Show a random quote on page load
  setInterval(getRandomQuote, 8000);
});

LoadExerciseForm("cardio")
function LoadExerciseForm(exerciseGroupInput) {


  let container = document.createElement('div')
  container.setAttribute("class", "form-container show")

  let head = document.createElement('h3')
  let form = document.createElement('form')
  container.appendChild(head)
  let select = document.createElement('select')


  let exerciseInput1Label = document.createElement('label')
      exerciseInput1Label.setAttribute('for', "ExerciseInputValue1")
      let exerciseInput1 = document.createElement('input')
      exerciseInput1.setAttribute('type', 'number')
      exerciseInput1.setAttribute('id', 'ExerciseInputValue1')
      exerciseInput1.setAttribute("required", '')

      let exerciseInput2Label = document.createElement('label')
      exerciseInput2Label.setAttribute('for', "ExerciseInputValue2")
      let exerciseInput2 = document.createElement('input')
      exerciseInput2.setAttribute('type', 'number')
      exerciseInput2.setAttribute('id', 'ExerciseInputValue2')
      exerciseInput2.setAttribute("required", '')

      let exerciseInput3Label = document.createElement('label')
      exerciseInput3Label.setAttribute('for', "ExerciseInputValue3")
      let exerciseInput3 = document.createElement('input')
      exerciseInput3.setAttribute('type', 'number')
      exerciseInput3.setAttribute('id', 'ExerciseInputValue3')
      exerciseInput3.setAttribute("required", '')

      let exerciseInput4Label = document.createElement('label')
      exerciseInput4Label.setAttribute('for', "ExerciseInputValue4")
      let exerciseInput4 = document.createElement('input')
      exerciseInput4.setAttribute('type', 'number')
      exerciseInput4.setAttribute('id', 'ExerciseInputValue4')
      exerciseInput4.setAttribute("required", '')

      let exerciseInput5Label = document.createElement('label')
      exerciseInput5Label.setAttribute('for', "ExerciseInputValue5")
      let exerciseInput5 = document.createElement('input')
      exerciseInput5.setAttribute('type', 'number')
      exerciseInput5.setAttribute('id', 'ExerciseInputValue5')
      exerciseInput5.setAttribute("required", '')

  // taking user input and storing it based off the exercise the user has chosen
  // also checking for achievements and user personal bests
  switch (exerciseGroupInput){
    case "cardio":
      head.textContent= "Cardio"
      form.setAttribute('id','cardioForm')
      exerciseInput1Label.textContent = "Time (min)";
      exerciseInput2Label.textContent = "Distance you ran"
      exerciseInput3Label.textContent = "Reps or speed"
      exerciseInput4Label.textContent = "Calories you burned"

      select.appendChild(exerciseTypeToOptionsList("cardio"))
      console.log(select.innerHTML)
      form.appendChild(select)
      form.appendChild(exerciseInput1Label)
      form.appendChild(exerciseInput1)
      form.appendChild(exerciseInput2Label)
      form.appendChild(exerciseInput2)
      form.appendChild(exerciseInput3Label)
      form.appendChild(exerciseInput3)
      form.appendChild(exerciseInput4Label)
      form.appendChild(exerciseInput4)
      break;
    
    case "BodyWeight":
      head.textContent = "Body Weight Exercises"
    form.setAttribute('id','bodyWeightForm')
    exerciseInput1Label.textContent = "Time (min)";
    exerciseInput2Label.textContent = "Reps/Hold time"
    exerciseInput3Label.textContent = "Max reps/Max Hold Time"
    exerciseInput4Label.textContent = "Calories you burned"
      select.appendChild(exerciseTypeToOptionsList("bodyWeightExercises"))
      form.appendChild(select)
      form.appendChild(exerciseInput1Label)
      form.appendChild(exerciseInput1)
      form.appendChild(exerciseInput2Label)
      form.appendChild(exerciseInput2)
      form.appendChild(exerciseInput3Label)
      form.appendChild(exerciseInput3)
      form.appendChild(exerciseInput4Label)
      form.appendChild(exerciseInput4)
    case "WeightedLifts":
      
    head.textContent = "Weight Lifting"
    form.setAttribute('id','weightLiftForm')
    exerciseInput1Label.textContent = "Time (min)";
    exerciseInput2Label.textContent = "Reps"
    exerciseInput3Label.textContent = "Max reps"
    exerciseInput4Label.textContent = "Calories you burned"
    exerciseInput5Label.textContent = "Weight in kg"

      select.appendChild(exerciseTypeToOptionsList("weightedLifts"))
      form.appendChild(select)

      form.appendChild(exerciseInput1Label)
      form.appendChild(exerciseInput1)
      form.appendChild(exerciseInput2Label)
      form.appendChild(exerciseInput2)
      form.appendChild(exerciseInput3Label)
      form.appendChild(exerciseInput3)
      form.appendChild(exerciseInput4Label)
      form.appendChild(exerciseInput4)
      form.appendChild(exerciseInput5Label)
      form.appendChild(exerciseInput5)
    
    case "Stretches":

    head.textContent = "Streches"
    form.setAttribute('id','stretchesForm')
    exerciseInput1Label.textContent = "Time (min)";
    exerciseInput2Label.textContent = "Duration/Reps/HoldTime"
    exerciseInput3Label.textContent = "Max Duration/Max Reps/ Max HoldTime"
      select.appendChild(exerciseTypeToOptionsList("stretches"))

      form.appendChild(select)
      form.appendChild(exerciseInput1Label)
      form.appendChild(exerciseInput1)
      form.appendChild(exerciseInput2Label)
      form.appendChild(exerciseInput2)
      form.appendChild(exerciseInput3Label)
      form.appendChild(exerciseInput3)
    break;
    }
    let button = document.createElement('button')
    button.setAttribute('type', "submit")
    form.appendChild(button)
    
    function clearcontent() {
     document.getElementByClassName(`jump`).innerHTML = "";
  }
  clearcontent()
  jumpContiner.appendChild(container);


 }
};


function loadLogin(){
    console.log(userList);
    usertemp=null;
    let newPageHeader = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum Landing 5</title>
    <link rel="stylesheet" href="land5.css">
    `;
    let newpagebody = ` <header>
        <div class="logo">
            <img src="images/Logp.png" id="logo" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <div class="menu">
            <a ><span>Login in</span></a>
        </div>
    </header>
    <h1>Enter your username and your password</h1>

    <form action="submit" method="POST" class="grid" id="detailsForm2">
        <section class="form">
            <br>
            <div class="input-container">
                <label for="usernameInput" id="usernameLabel"><h2>Enter a username</h2></label>
                <br>
                <input type="text" id="usernameInput" name="username" placeholder="username" required>
            </div>
        </section>

        <section class="form">
            <br>
            <div class="input-container">
                <label for="passwordInput" id="passwordLabel"><h2>Enter a password</h2></label>
                <br>
                <input type="password" id="passwordInput" name="password" placeholder="@password123" required>
            </div>
        </section>

        <div class="button">
            <button type="submit" id="continueBtn" class="continue-btn" >Continue →</button>
    </div>
    </form>

    <footer>
        <div class="footer-content">
            <div class="logo2">
                <p>© Momentum 2025</p>
                <img src="images/Logp.png" alt="Momentum Logo"> 
            </div>
        </div>
    </footer>`;

    let documentHead = document.querySelector('head');
    let documentBody = document.querySelector('body');
    documentHead.innerHTML=newPageHeader;
    documentBody.innerHTML = newpagebody;
    

    let landing3Button = documentBody.querySelector('#detailsForm2');
    let logoButton = documentBody.querySelector('#logo');

    logoButton.addEventListener('click',loadIndex);
    landing3Button.addEventListener('submit',function(e) {
        e.preventDefault();

        let username = documentBody.querySelector('#usernameInput');
        let password = documentBody.querySelector('#passwordInput');
        let found = false;
        for (let i = 0;i < userList.length ;i++){
            if (userList[i].userName==username.value){
                found =true;
                if(userList[i].userPassword==password.value){
                    loggedInUser=i;
                }else{
                    alert("incorrect username or password");
                    password.value=null;
                    username.value=null;
                }
                break;
            }
        }

        if (!found){
            alert("incorrect username or password");
            password.value=null;
            username.value=null;
        }

        if(this.checkValidity()) {
            loadMainBone();
        }
    });
};


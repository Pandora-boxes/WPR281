
let usertemp = {};
let loggedInUser = -1;
let userList = [];
let achievmentsList = [
  {
    type:"exercises logged",
    goal:0,
    html:`<div class="AchivementContainer"><img src="images/medal1.jpeg" alt="medal1"height="20%"><p>You have yet to log  an exercise</p></div>`
   },{
  type:"exercises logged",
  goal:1,
  html:`<div class="AchivementContainer"><img src="images/medal2.jpeg" alt="medal2"height="20%"><p>You logged your first exercise</p></div>`
 },{
  type:"exercises logged",
  goal:10,
  html:`<div class="AchivementContainer"><img src="images/medal3.jpeg" alt="medal3"height="20%"><p>You've Logged 10 exercises!!</p></div>`
 },{
  type:"exercises logged",
  goal:50,
  html:`<div class="AchivementContainer"><img src="images/medal4.jpeg" alt="medal4"height="20%"><p>You've Logged 50 exercises!!</p></div>`
 } ,{
  type:"exercises logged",
  goal:100,
  html:`<div class="AchivementContainer"><img src="images/medal5.jpeg" alt="medal5"height="20%"><p>You've Logged 100 exercises!!</p></div>`
 } ,{
  type:"exercises logged",
  goal:1000,
  html:`<div class="AchivementContainer"><img src="images/medal6.jpeg" alt="medal6"height="20%"><p>You've Logged 1000 exercises!!</p></div>`
 },
 {
  type:"Account Age",
  goal:0,
  html:`<div class="AchivementContainer"><img src="images/medal1.jpeg" alt="medal1" height="20%"><p>You've Just started  with Us!</p></div>`
 } ,{
  type:"Account Age",
  goal:1,
  html:`<div class="AchivementContainer"><img src="images/medal2.jpeg" alt="medal2"height="20%"><p>You've been with Us for a Day!</p></div>`
 } ,
 {
  type:"Account Age",
  goal:30,
  html:`<div class="AchivementContainer"><img src="images/medal3.jpeg" alt="medal3"height="20%"><p>You've been with Us for a Month!</p></div>`
 } ,
 {
  type:"Account Age",
  goal:91,
  html:`<div class="AchivementContainer"><img src="images/medal4.jpeg" alt="medal4"height="20%"><p>You've been with Us for a 3 Months!</p></div>`
 } ,
 {
  type:"Account Age",
  goal:365,
  html:`<div class="AchivementContainer"><img src="images/medal5.jpeg" alt="medal5"height="20%"><p>You've been with Us for a year!</p></div>`
 } ,
 {
  type:"Account Age",
  goal:3650,
  html:`<div class="AchivementContainer"><img src="images/medal6.jpeg" alt="medal6"height="20%"><p>You've been with Us for a 10 Years!</p></div>`
 } ,
 {
  type:"Goals Completed",
  goal:0,
  html:`<div class="AchivementContainer"><img src="images/medal1.jpeg" alt="medal1"height="20%"><p>You've yet to complete a Personal Goal</p></div>`
 }, {
  type:"Goals Completed",
  goal:1,
  html:`<div class="AchivementContainer"><img src="images/medal2.jpeg" alt="medal2"height="20%"><p>You've completed a Personal Goal</p></div>`
 },
 {
  type:"Goals Completed",
  goal:5,
  html:`<div class="AchivementContainer"><img src="images/medal3.jpeg" alt="medal3"height="20%"><p>You've completed 5 Personal Goals!</p></div>`
 } ,
 {
  type:"Goals Completed",
  goal:10,
  html:`<div class="AchivementContainer"><img src="images/medal4.jpeg" alt="medal4"height="20%"><p>You've completed 10 Personal Goals!</p></div>`
 } ,
 {
  type:"Goals Completed",
  goal:20,
  html:`<div class="AchivementContainer"><img src="images/medal5.jpeg" alt="medal5"height="20%"><p>You've completed 20 Personal Goals!</p></div>`
 } ,
 {
  type:"Goals Completed",
  goal:50,
  html:`<div class="AchivementContainer"><img src="images/medal6.jpeg" alt="medal6"height="20%"><p>You've completed 50 Personal Goals!</p></div>`
 } 
]

function checkAchievements(){
 let currentUser =userList[loggedInUser]
 let outArray=['','','']
 achievmentsList.forEach(e=>{
  let checkVar
  switch(e.type){
    case "Goals Completed":
    checkVar = currentUser.completedGoals.length;
    if (e.goal<=checkVar){
      outArray[0]=e.html
    }
    break;
    case "Account Age":
     let miliseconds= (new Date().getTime()-currentUser.datejoined.getTime())
      checkVar =(miliseconds/86400000)//.toFixed(0);
      console.log(checkVar)
      if (e.goal<=checkVar){
      outArray[1]=e.html
    }
     break;
     case'exercises logged':
     checkVar = currentUser.exercisesComplete.length;
     if (e.goal<=checkVar){
      outArray[2]=e.html
    }
     break;
  }
 })
currentUser.achievmentsList=outArray;
let outString='';
let outContainer=document.getElementById('badges')
outArray.forEach(e=> outString+=e)
outContainer.innerHTML = outString
}

// all integer inputs are required by the user 
// all text inputs are auto filled

let exerciseList = [
  cardio = [
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
      caloriesBurned: 0,
      intensity: "High",
      exerciseGroup: "Cardio"
    },
    {
      name: "StairClimbing",
      time: 0,
      distance: 0,
      speed: 0,
      caloriesBurned: 0,
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
  bodyWeightExercises = [
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
  weightedLifts = [
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
  stretches = [
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
      maxHoldTime: 0,
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
  userName: "",
  userPassword: "",
  userEmail: '',
  userPhoneNumber: '',
  favoriteExercises: new Array(),
  exercisesComplete: new Array(),
  firstName: '',
  lastName: '',
  height: null,
  weight: null,
  age: null,
  datejoined: new Date(),
  weightLog: [[0, new Date()]],
  achivements: [],
  usersBestList: exerciseList,
  GoalDetails: {
    type: "", //type of 
    // [calories burnt, distance covered, weight lifted, time streching or exercises logged]
    updatesList: [[0, 0, new Date()]],
    startDate: new Date(),
    endDate: new Date(),// the date they enter in the form
    goalTarget: 0, // end goal
    goalCounter: 0 //running total 
  },
  completedGoals: [],
  missedGoals: []
}
function updateWeight(newWeight) {
  let currentUser = userList[loggedInUser];
  currentUser.weight = newWeight;
  currentUser.weightLog.push([newWeight, new Date()])
}

function addFavExercise(exerciseGroup, exerciseName) {
  let currentUser = userList[loggedInUser];
  currentUser.favoriteExercises.push([exerciseGroup, exerciseName]);
}

function removeFavExercise(exerciseGroup, exerciseName) {
  let currentUser = userList[loggedInUser];
  let arrayFavExercises = currentUser.favoriteExercises;
  arrayFavExercises = arrayFavExercises.filter((e) => e != [exerciseGroup, exerciseName])
  currentUser.favoriteExercises = arrayFavExercises;
}

function addGoal() {
  let currentUser = userList[loggedInUser];
  let Goal = currentUser.GoalDetails;
  let goalType = document.getElementById("goalType").value;
  let daysToAdd = parseInt(document.getElementById("goalDays").value);
  let GoalTarget = parseInt(document.getElementById("goalTarget").value);

  let goalEndDate = new Date();
  goalEndDate.setDate(goalEndDate.getDate() + daysToAdd);

  if (GoalTarget > 0 && (!Goal.type || Goal.type.length == 0)) {
      Goal.type = goalType;
      Goal.startDate = new Date();
      Goal.endDate = goalEndDate;
      Goal.goalTarget = GoalTarget;
      Goal.goalCounter = new Number();
      alert("Goal set successfully!");
  } else {
      alert("Please enter valid details!");
  }
  loadMainBone();
};

function checkGoal() {
  let currentUser = userList[loggedInUser]
  let Goal = currentUser.GoalDetails
  console.log(Goal)
  console.log('before')
  if (Goal.type.length <= 0) {
    // dont do anything if there is no goal set
  }
  else if (Goal.goalCounter > Goal.goalTarget) {
    //goal Achieved inform user
    let tempObject = {};
    Object.assign(tempObject, Goal);
    tempObject.completeDate = new Date();
    currentUser.completedGoals.push(tempObject);

    Goal.type = "";
    Goal.startDate = null;
    Goal.endDate = null;
    Goal.goalTarget = null;
    Goal.goalCounter = null;
    Goal.updatesList = [[0, 0, new Date()]]
  } else if ((Goal.goalEndDate - new Date()) < 0) {
    //goal failed inform user 
    let tempObject = {};
    Object.assign(tempObject, Goal);
    currentUser.missedGoals.push(tempObject);

    Goal.type = "";
    Goal.startDate = null;
    Goal.endDate = null;
    Goal.goalTarget = null;
    Goal.goalCounter = null;
    Goal.updatesList = [[0, 0, new Date()]]
  }
  console.log(Goal)
  console.log("after")
}

function createGraphFromCalories(elementID) {
  let currentUser = userList[loggedInUser];
  let exercisesList = currentUser.exercisesComplete;
  let cardioList = exerciseList.filter(e => {
    e[0].exerciseGroup = "Cardio"
  })
  let BodyWeightList = exerciseList.filter(e => {
    e[0].exerciseGroup = "BodyWeight"
  })
  let WeightedLifts = exerciseList.filter(e => {
    e[0].exerciseGroup = "WeightedLifts"
  })
  let cardioTotal = 0;
  cardioList.map(e => cardioTotal + e[0].caloriesBurned)
  let BodyWeightTotal = 0;
  BodyWeightList.map(e => BodyWeightTotal + e[0].caloriesBurned)
  let WeightedLiftsTotal = 0;
  WeightedLifts.map(e => WeightedLiftsTotal + e[0].caloriesBurned)

  let chart = document.getElementById(elementID)
  new Chart(chart, {
    type: "bar",
    data: {
      labels: ["Cardio", "Body Weight", "Weighted Lifts", "Total Burnt"],
      datasets: [{
        label: "Number of Calories Burnt",
        data: [1000, 2300, 1400, 4700],
        backgroundColor: 'rgba(38, 217, 38, 0.7)',  // Green bars
        borderColor: 'rgb(38, 217, 38)',
        //data:[cardioTotal,BodyWeightTotal,WeightedLiftsTotal,cardioTotal+BodyWeightTotal+WeightedLiftsTotal],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}

function createGraphOfUserGoal(elementID) {

  let currentUser = userList[loggedInUser];
  let GoalOBJ = currentUser.GoalDetails;
  startDate = new Date(GoalOBJ.startDate);
  endDate = new Date(GoalOBJ.endDate);
  updatesList = GoalOBJ.updatesList;
  let labels = [];
  let data = []
  let data2 = []
  let runningTotal = 0;
  let target = [];
  for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
    labels.push(`${i.getMonth() + 1}|${i.getDate()}`)
    let total = 0;
    updatesList.forEach(e => {
      if (`${e[2].getDate()}/${e[2].getMonth()}/${e[2].getYear()}` == `${i.getDate()}/${i.getMonth()}/${i.getYear()}`) {
        total += e[1]
        runningTotal = e[0];
      }

    })

    data.push(runningTotal);
    data2.push(total);
    if (i.getMonth() >= new Date().getMonth() && i.getYear() >= new Date().getYear() && i.getDate() > new Date().getDate() - 1) {
      data.pop();
      data2.pop();
    }

    target.push(GoalOBJ.goalTarget);
    

  }

  if (GoalOBJ.goalTarget > 0 && GoalOBJ.goalTarget != null) {
    // let createGoalFormbtn = document.getElementById("createGoals")
    // createGoalFormbtn.style.visibility='hidden'
    // let createGoalFormOutput = document.getElementById("createGoalsOutput")
    // createGoalFormOutput.style.visibility='hidden'
    let chart = document.getElementById(elementID)
    let makeInvisible = document.getElementById('createGoals');
    makeInvisible.style.display='None'
    new Chart(chart, {
      type: "line",

      data: {
        labels: labels,
        datasets: [{
          label: "progress",
          data: data,
          fill: true,
          borderColor: 'rgb(38, 217, 38)',
          backgroundColor: 'rgb(34, 165, 34, 0.5)',
          tension: 0

        },
        {
          label: "day total",
          data: data2,
          borderColor: 'rgb(38, 50, 217)',
          tension: 0.1

        },
        {
          fill: false,
          borderColor: 'rgb(255, 4, 0)',
          tension: 0.1,
          label: "Target",
          data: target

        }]
      },

      options: {
        scales: {
          x: {
            ticks: {
              color: "rgb(0, 0, 0)" // Change X-axis label color
            }
          },
          y: {
            ticks: {
              color: "rgb(0, 0, 0)" // Change Y-axis label color
            }
          }
        },
      }
    })
  }
}

function addExercise(exerciseGroup, exerciseName) {
  let currentUser = userList[loggedInUser];
  let selectedExercise = exerciseGroup;// get input from user choice

  // finding the object in the exercise list that relates to the one chosen by the user and making a new copy of it
  let filteredArray = exerciseList.filter((e) => {
    return e[0].exerciseGroup == selectedExercise
  })
  filteredArray = Array.from(filteredArray[0]);
  filteredArray = filteredArray.filter((e) => e.name == exerciseName);
  let i = 0;
  let ii = 0;
  let index1 = i;
  let index2 = ii;
  //loop throught the users stored pbs for the one that represents the current exercise
  for (i; i < currentUser.usersBestList.length; ++i) {
    if (currentUser.usersBestList[i][0].exerciseGroup == exerciseGroup) {

      for (ii; ii < currentUser.usersBestList[i].length; ++ii) {
        if (currentUser.usersBestList[i][ii].name == exerciseName) {
          index1 = i;
          index2 = ii;
          break;
        }
      }
    }
  }
  let exerciseObj = {};
  let UserbestOBJ = currentUser.usersBestList[index1][index2];
  Object.assign(exerciseObj, filteredArray[0]);

  let inputValue1 = null;
  let inputValue2 = null;
  let inputValue3 = null;
  let inputValue4 = null;
  let inputValue5 = null;
  let isUserBest = false;
  // taking user input and storing it based off the exercise the user has chosen
  // also checking for achievements and user personal bests
  switch (exerciseGroup) {
    case "Cardio":
      inputValue1 = document.querySelector('#ExerciseInputValue1').value;
      inputValue2 = document.querySelector('#ExerciseInputValue2').value;
      inputValue3 = document.querySelector('#ExerciseInputValue3').value;
      inputValue4 = document.querySelector('#ExerciseInputValue4').value;

      exerciseObj.time = inputValue1
      exerciseObj.distance = inputValue2
      if (exerciseName == "JumpRope") { exerciseObj.reps = inputValue3 }
      else {
        //updating goal details
        if (currentUser.GoalDetails.type == "distance covered") {
        
          currentUser.GoalDetails.goalCounter += parseInt(inputValue2)
    
          currentUser.GoalDetails.updatesList.push([currentUser.GoalDetails.goalCounter, inputValue2, new Date()])
      
        }

        exerciseObj.speed = inputValue3
      }
      exerciseObj.caloriesBurned = inputValue4

    // checking for user best


    case "BodyWeight":

      inputValue1 = document.querySelector('#ExerciseInputValue1').value;
      inputValue2 = document.querySelector('#ExerciseInputValue2').value;
      inputValue3 = document.querySelector('#ExerciseInputValue3').value;
      inputValue4 = document.querySelector('#ExerciseInputValue4').value;

      exerciseObj.time = inputValue1;
      if (exerciseName != "Plank") {
        exerciseObj.reps = inputValue2;
        exerciseObj.maxReps = inputValue3;
      } else {
        exerciseObj.holdTime = inputValue2;
        exerciseObj.maxHoldTime = inputValue3;
      }
      exerciseObj.caloriesBurned = inputValue4;

      // checking for user best
      switch (exerciseName) {
        case "PushUps" || "PullUps" || "Squats" || "Lunges" || "Dips" || "SitUps" || "Burpees":
          if (exerciseObj.maxReps > UserbestOBJ.maxReps) {
            UserbestOBJ.time = inputValue1;
            UserbestOBJ.reps = inputValue2;
            UserbestOBJ.maxReps = inputValue3;
            UserbestOBJ.caloriesBurned = inputValue4;
            isUserBest = true;

          } else if (exerciseObj.maxReps == UserbestOBJ.maxReps && exerciseObj.reps > UserbestOBJ.reps) {
            UserbestOBJ.time = inputValue1;
            UserbestOBJ.reps = inputValue2;
            UserbestOBJ.maxReps = inputValue3;
            UserbestOBJ.caloriesBurned = inputValue4;
            isUserBest = true;
          } else if (exerciseObj.maxReps == UserbestOBJ.maxReps && exerciseObj.reps == UserbestOBJ.reps && exerciseObj.time < UserbestOBJ.time) {
            UserbestOBJ.time = inputValue1;
            UserbestOBJ.reps = inputValue2;
            UserbestOBJ.maxReps = inputValue3;
            UserbestOBJ.caloriesBurned = inputValue4;
            isUserBest = true;
          }
          break;

        case "Plank":
          if (exerciseObj.maxHoldTime > UserbestOBJ.maxHoldTime || (exerciseObj.maxHoldTime == UserbestOBJ.maxHoldTime && exerciseObj.time > UserbestOBJ.time)) {
            UserbestOBJ.time = inputValue1;
            UserbestOBJ.holdTime = inputValue2;
            UserbestOBJ.maxHoldTime = inputValue3;
            UserbestOBJ.caloriesBurned = inputValue4;
            isUserBest = true;
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

      exerciseObj.time = inputValue1;
      exerciseObj.reps = inputValue2;
      exerciseObj.maxReps = inputValue3;
      exerciseObj.caloriesBurned = inputValue4;
      exerciseObj.weight = inputValue5;
      //updating goal details
      if (currentUser.GoalDetails.type == "weight lifted") {
        currentUser.GoalDetails.goalCounter += parseInt(inputValue5)
        currentUser.GoalDetails.updatesList.push([currentUser.GoalDetails.goalCounter, inputValue5, new Date()])
      }


      // checking for user best
      if (exerciseObj.weight > UserbestOBJ.weight || (exerciseObj.weight == UserbestOBJ.weight && (exerciseObj.maxReps > UserbestOBJ.maxReps || (exerciseObj.maxReps == UserbestOBJ.maxReps && exerciseObj.reps > UserbestOBJ.reps)))) {
        UserbestOBJ.time = inputValue1;
        UserbestOBJ.reps = inputValue2;
        UserbestOBJ.maxReps = inputValue3;
        UserbestOBJ.caloriesBurned = inputValue4;
        UserbestOBJ.weight = inputValue5;
        isUserBest = true;
      }
      break;

    case "Stretches":
      inputValue1 = document.querySelector('#ExerciseInputValue1').value;
      inputValue2 = document.querySelector('#ExerciseInputValue2').value;
      inputValue3 = document.querySelector('#ExerciseInputValue3').value;

      exerciseObj.time = inputValue1;
      switch (exerciseName) {
        case "FoamRollingQuads":
          exerciseObj.duration = inputValue2;
          exerciseObj.maxDuration = inputValue3;
          break
        case "TaiChiSlowMovements":
          exerciseObj.reps = inputValue2;
          exerciseObj.maxReps = inputValue3;
          break
        default:
          exerciseObj.holdTime = inputValue2;
          exerciseObj.maxHoldTime = inputValue3;
          break;
      }
      //updating goal details
      if (currentUser.GoalDetails.type == "time streching") {
        currentUser.GoalDetails.goalCounter += parseInt(inputValue1)
        currentUser.GoalDetails.updatesList.push([currentUser.GoalDetails.goalCounter, inputValue1, new Date()])
      }

      // checking for user best
      switch (exerciseName) {
        case "FoamRollingQuads":
          if (exerciseObj.maxDuration > UserbestOBJ.maxDuration) {
            UserbestOBJ.duration = inputValue2;
            UserbestOBJ.maxDuration = inputValue3;
            UserbestOBJ.time = inputValue1;
          }
          break;

        case "TaiChiSlowMovements":
          if (exerciseObj.maxReps > UserbestOBJ.maxReps) {
            UserbestOBJ.reps = inputValue2;
            UserbestOBJ.maxReps = inputValue3;
            UserbestOBJ.time = inputValue1;
          }
          break;

        default:
          if (exerciseObj.maxHoldTime > UserbestOBJ.maxHoldTime) {
            UserbestOBJ.holdTime = inputValue2;
            UserbestOBJ.maxHoldTime = inputValue3;
            UserbestOBJ.time = inputValue1;
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
  if (currentUser.GoalDetails.type == "exercises logged") {
    currentUser.GoalDetails.goalCounter += 1
    currentUser.GoalDetails.updatesList.push([currentUser.GoalDetails.goalCounter, 1, new Date()])
  }
  else if (currentUser.GoalDetails.type == "calories burnt" && exerciseGroup != "Stretches") {
    currentUser.GoalDetails.goalCounter += exerciseObj.caloriesBurned
    currentUser.GoalDetails.updatesList.push([currentUser.GoalDetails.goalCounter, exerciseObj.caloriesBurned, new Date()])
  }
  checkGoal();
  if (isUserBest) {
    // maybe play an animation for now alert 
    alert("WELL DONE!!!! Thats a new personal best!! Keep it up!")
  }
  else {
    //maybe play an animation for now alert
    alert('Well done!! thats another step to your fitness goals!! keep it up!');
  }

  // console.log(currentUser.exercisesComplete)
  currentUser.exercisesComplete.push([exerciseObj, new Date]);
  createGraphOfUserGoal("GoalChart");
  checkAchievements();
  document.getElementById("ReportOutputDiv").innerHTML = '';
  
};

function weightLogToGraph(elementID) {
  let outElement = document.getElementById(elementID);
  let currentUser = userList[loggedInUser];
  let weightlog = currentUser.weightLog;
  let labels = [];
  let data = []
  let dataLowest = [];
  let dataheighest = [];
  let heighest = weightlog[0][0];
  let lowest = weightlog[0][0];
  let startDate = new Date(currentUser.datejoined)
  let currentDate = new Date();
  let dataPoint = -1;
  for (let i = startDate; i <= currentDate; i.setMonth(i.getMonth() + 1)) {
    labels.push(`${i.getMonth() + 1}|${i.getFullYear()}`);
    dataPoint = -1;
    weightlog.forEach(e => {
      if (`${i.getMonth()}|${i.getYear()}` == `${e[1].getMonth()}|${e[1].getYear()}`) {
        dataPoint = e[0];
      }
    })
    if (dataPoint != -1) {
      data.push(dataPoint)
      if (dataPoint > heighest) { heighest = dataPoint }
      else if (dataPoint < lowest) { lowest = dataPoint }
      dataLowest.push(lowest)
      dataheighest.push(heighest)
    } else {
      data.push()
      dataLowest.push()
      dataheighest.push()
    };

  }

  new Chart(outElement, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "weight",
        data: data,
        fill: false,
        borderColor: 'rgb(38, 217, 38)',
        tension: 0

      }, {
        label: "lowest weight",
        data: dataLowest,
        fill: false,
        borderColor: 'rgb(231, 153, 17)',
        tension: 0

      }, {
        label: "heighst weight",
        data: dataheighest,
        fill: false,
        borderColor: 'rgb(217, 38, 38)',
        tension: 0

      }]
    },
    options: {
      scales: {
        y: {
          min: lowest - 10,
          max: heighest + 10
        }
      }
    }
  })
}

function userToFullDetails() {

  document.getElementById("ReportOutputDiv").innerHTML = '';

  let currentuser = userList[loggedInUser]
  let name = currentuser.firstName;
  let surname = currentuser.lastName;
  let email = currentuser.userEmail;
  let phoneNumber = currentuser.userPhoneNumber;
  let height = currentuser.height;
  let weight = currentuser.weight;
  // weight log to graph
  let weightlogGraph = document.createElement('canvas')
  weightlogGraph.setAttribute('id', 'weightLogGraphForFullDetails');

  let userBestList = currentuser.usersBestList[0];

  let usersBestsCardio = userBestList.filter(element => { element.caloriesBurned > 0 || element.speed > 0 });
  userBestList = currentuser.usersBestList[1]
  let usersBestsbodyWeightExercises = userBestList.filter(element => element.caloriesBurned > 0 || element.time > 0);
  userBestList = currentuser.usersBestList[2]
  let usersBestweightedLifts = userBestList.filter(element => element.caloriesBurned > 0 || element.weight > 0);
  userBestList = currentuser.usersBestList[3]
  let usersBeststretches = userBestList.filter(element => element.time > 0);
  let bestArray = [];
  let string = '';
  usersBestsCardio.forEach(element => {
    let exerciseName = element.name;
    switch (exerciseName) {
      case "Jogging" || "Cycling" || "Rowing" || "Swimming" || "StairClimbing" || "Sprints 100m" || "Sprints 200m" || "Sprints 400m":
        string = `<div class="usersBestResultsContainer">
            <p><h2>${element.name}<h2></p>
            <p>Time:      ${element.time} seconds</p>
            <p>Distance:  ${element.distance} meters</p>
            <p>Speed:     ${element.speed.toFixed(2)} m/s </p>
            </div>`
        break;
      case "JumpRope":
        string = `<div class="usersBestResultsContainer">
      <p><h2>${element.name}<h2></p>
      <p>Time:      ${element.time} seconds</p>
      <p>Jumps:  ${element.reps} jumps</p>
      <p>Speed:     ${element.speed.toFixed(2)} jumps/s </p>
      </div>`
        break;
    }
    bestArray.push(string);
  })
  usersBestsbodyWeightExercises.forEach(element => {
    let exerciseName = element.name;
    switch (element.name) {
      case "PushUps" || "PullUps" || "Squats" || "Lunges" || "Dips" || "SitUps" || "Burpees":
        string = `<div class="usersBestResultsContainer">
                <p><h2>${exerciseName}<h2></p>
                <p>Time:      ${element.time} minutes</p>
                <p>Max Reps:  ${element.maxReps} reps</p>
                <p>Rep:       ${element.reps} reps </p>
                </div>`
        break;

      case "Plank":
        string = `<div class="usersBestResultsContainer">
          <p><h2>${element.name}<h2></p>
          <p>Time:           ${element.time} minutes</p>
          <p>Max Hold Time:  ${element.maxHoldTime} seconds</p>
          <p>Hold Time:      ${element.holdTime} seconds </p>
          </div>`
        break;
    }
    bestArray.push(string);

  })
  usersBestweightedLifts.forEach(element => {
    string = `<div class="usersBestResultsContainer">
          <p><h2>${element.name}<h2></p>
          <p>Time:           ${element.time} minutes</p>
          <p>Weight:         ${element.weight}kg</p>
          <p>Max Reps:       ${element.maxReps} reps</p>
          <p>Rep:            ${element.reps} reps </p>
          </div>`
    bestArray.push(string);
  });

  usersBeststretches.forEach(element => {
    let exerciseName = element.name;
    switch (exerciseName) {
      case "FoamRollingQuads":
        string = `<div class="usersBestResultsContainer">
      <p><h2>${element.name}<h2></p>
      <p>Time:           ${element.time} minutes</p>
      <p>Max Duration:  ${element.maxHoldTime} seconds</p>
      <p>Duration:      ${element.holdTime} seconds </p>
      </div>`
        break
      case "TaiChiSlowMovements":
        string = `<div class="usersBestResultsContainer">
      <p><h2>${element.name}<h2></p>
      <p>Time:           ${element.time} minutes</p>
      <p>Max Reps:  ${element.maxHoldTime} reps</p>
      <p>Reps:      ${element.holdTime} reps </p>
      </div>`
        break
      default:
        string = `<div class="usersBestResultsContainer">
          <p><h2>${element.name}<h2></p>
          <p>Time:           ${element.time} minutes</p>
          <p>Max Hold Time:  ${element.maxHoldTime} seconds</p>
          <p>Hold Time:      ${element.holdTime} seconds </p>
          </div>`
        break;
    }
    bestArray.push(string);
  });

  //lots of work here , inverse of the exercise input
  // current goal graph
  let completedGoals = currentuser.completedGoals;
  let missedGoals = currentuser.missedGoals;

  let goalsContainer = document.createElement(`section`)
  goalsContainer.setAttribute("class", "GoalContainerInDetails")
  let goalsGraph = document.createElement('canvas');
  goalsGraph.setAttribute('id', 'GoalGraphForDetails');
  let completedGoalsHtmlOut = document.createElement(`Section`)
  completedGoalsHtmlOut.setAttribute('class', "CompletedGoals")
  for (let i = 0; i < missedGoals.length; ++i) {
    let Content = document.createElement('p')
    Content.setAttribute('class', "CompletedGoalData")
    switch (completedGoals.type) {
      case "calories burnt":
        Content.innerHTML += `<H3>${completedGoals.type}</H3> \n <p>Target: ${completedGoals.goalTarget} calories</p>`
        break;

      case "distance covered":
        Content.innerHTML += `<H3>${completedGoals.type}</H3> \n <p>Target: ${completedGoals.goalTarget} m</p>`
        break;

      case "weight lifted":
        Content.innerHTML += `<H3>${completedGoals.type}</H3> \n <p>Target: ${completedGoals.goalTarget} kg's</p>`
        break;

      case "time streching":
        Content.innerHTML += `<H3>${completedGoals.type}</H3> \n <p>Target: ${completedGoals.goalTarget} minutes</p>`
        break;

      case "exercises logged":
        Content.innerHTML += `<H3>${completedGoals.type}</H3> \n <p>Target: ${completedGoals.goalTarget} exercises</p>`
        break;

      default:
        break
    }
    let completionPercent = ((missedGoals.endDate - completedGoals.completeDate) / (missedGoals.endDate - completedGoals.startDate) * 100).toFixed(1);
    Content.innerHtml += `<p>Start Date: ${completedGoals[i].startDate.getDate() + '/' + completedGoals[i].startDate.getMonth() + 1 + "/" + completedGoals[i].startDate.getYear()}</p>`
    Content.innerHTML += `<p>Cut Off Date: ${completedGoals[i].endDate.getDate() + '/' + completedGoals[i].endDate.getMonth() + 1 + "/" + completedGoals[i].endDate.getYear()}</p>`
    Content.innerHTML += `<p>Completed within  ${completionPercent}% of the alocated time</p>`

    missedGoalsHtmlOut.appendChild(Content)
  }

  let missedGoalsHtmlOut = document.createElement(`Section`)
  missedGoalsHtmlOut.setAttribute('class', "missedGoals")
  for (let i = 0; i < missedGoals.length; ++i) {
    let Content = document.createElement('p')
    Content.setAttribute('class', "MissedGoalData")
    switch (missedGoals.type) {
      case "calories burnt":
        Content.innerHTML += `<H3>${missedGoals.type}</H3> \n <p>Target: ${missedGoals.goalTarget} calories</p>`
        break;

      case "distance covered":
        Content.innerHTML += `<H3>${missedGoals.type}</H3> \n <p>Target: ${missedGoals.goalTarget} m</p>`
        break;

      case "weight lifted":
        Content.innerHTML += `<H3>${missedGoals.type}</H3> \n <p>Target: ${missedGoals.goalTarget} kg's</p>`
        break;

      case "time streching":
        Content.innerHTML += `<H3>${missedGoals.type}</H3> \n <p>Target: ${missedGoals.goalTarget} minutes</p>`
        break;

      case "exercises logged":
        Content.innerHTML += `<H3>${missedGoals.type}</H3> \n <p>Target: ${missedGoals.goalTarget} exercises</p>`
        break;

      default:
        break
    }
    let completionPercent = (missedGoals.goalCounter / missedGoals.goalTarget * 100).toFixed(1);
    Content.innerHTML += `<p>Completion %: ${completionPercent}%</p>`
    Content.innerHtml += `<p>Start Date: ${missedGoals[i].startDate.getDate() + '/' + missedGoals[i].startDate.getMonth() + 1 + "/" + missedGoals[i].startDate.getYear()}</p>`
    Content.innerHTML += `<p>Cut Off Date: ${missedGoals[i].endDate.getDate() + '/' + missedGoals[i].endDate.getMonth() + 1 + "/" + missedGoals[i].endDate.getYear()}</p>`

    missedGoalsHtmlOut.appendChild(Content)
  }
  goalsContainer.appendChild(goalsGraph);
  if (currentuser.completedGoals.length > 0) { goalsContainer.appendChild(completedGoalsHtmlOut)};
  if (currentuser.missedGoals.length > 0) {goalsContainer.appendChild(missedGoalsHtmlOut)};

  let outContainer = document.createElement(`div`)
  outContainer.setAttribute('class', "UserFullDetailsOutPut");

  outContainer.innerHTML += `<p>Name:         ${name}</p>\n`
  outContainer.innerHTML += `<p>Surname:      ${surname}</p>\n`
  outContainer.innerHTML += `<p>Email:        ${email}</p>          <button id="UpdateEmailBtn">Update</button>  <input type="emailInput" id="EmailInput" name="name" placeholder="Jon" required>\n`
  outContainer.innerHTML += `<p>Phone Number: ${phoneNumber}</p>    <button id="UpdatePhoneBtn">Update</button>  <input type="tel" id="TelInput" name="name" placeholder="Jon" required>\n`
  outContainer.innerHTML += `<p>Height:       ${height}</p>         <button id="UpdateHeightBtn">Update</button> <input type="number" id="HeightInput" name="name" placeholder="Jon" required>\n`
  outContainer.innerHTML += `<p>Weight:       ${weight}</p>         <button id="UpdateWeightBtn">Update</button> <input type="number" id="WeightInput" name="name" placeholder="Jon" required>\n`
  outContainer.appendChild(weightlogGraph)
  if (bestArray.length > 0)
    outContainer.innerHTML += `${bestArray.join(`\n`)}\n`

  outContainer.appendChild(goalsContainer)

  document.getElementById("ReportOutputDiv").appendChild(outContainer)

  let button = document.getElementById('UpdateEmailBtn')
  let input = document.getElementById('EmailInput')
  button.addEventListener('click', e => {
    if (input != null && input.value.length > 0) {
      currentuser.userEmail = input.value;
      userToFullDetails();
    }
  })
  let button1 = document.getElementById('UpdatePhoneBtn')
  let input1 = document.getElementById('TelInput')
  button1.addEventListener('click', e => {
    if (input1 != null && input1.value.length > 0) {
      currentuser.userPhoneNumber = input1.value;
      userToFullDetails();
    }
  })
  let button2 = document.getElementById('UpdateHeightBtn')
  let input2 = document.getElementById('HeightInput')
  button2.addEventListener('click', e => {
    if (input2 != null && input2.value > 0) {
      currentuser.height = input2.value;
      userToFullDetails();
    }
  })
  let button3 = document.getElementById('UpdateWeightBtn')
  let input3 = document.getElementById('WeightInput')
  button3.addEventListener('click', e => {
    if (input3 != null && input3.value > 0) {
      updateWeight(input3.value)
      userToFullDetails();
    }
  })
  createGraphOfUserGoal("GoalGraphForDetails")
  weightLogToGraph('weightLogGraphForFullDetails')
};


function exerciseTypeToOptionsList(exerciseGroup) {
  let outString = '';
  let arrayOptions = exerciseList.filter(e => e[0].exerciseGroup == exerciseGroup);
  arrayOptions = arrayOptions[0];
  let tempArray = [];
  let outlist = [];
  arrayOptions.forEach(e => {
    tempArray = arrayOptions.filter(element => element == [exerciseGroup, e.name])
    if (tempArray.length != 0) {
      outlist.unshift(`<option value="${e.name}">${e.name}</option>`)
    } else {
      outlist.push(`<option value="${e.name}">${e.name}</option>\n`)
    }
  });
  outlist.forEach(e => outString += e);
  return outString;
};

function PopulateUser(fUsername, fUserPassword, fFirstName, fLastName, fHeight, fWeight, fage, fEmail, fPhoneNumber) {
  let newUser = Object.create(Account);
  newUser.userPhoneNumber = fPhoneNumber;
  newUser.userEmail = fEmail;
  newUser.userName = fUsername;
  newUser.userPassword = fUserPassword;
  newUser.firstName = fFirstName;
  newUser.lastName = fLastName;
  newUser.height = fHeight;
  newUser.weight = fWeight;
  newUser.age = fage;
  newUser.datejoined = new Date()
  newUser.weightLog.shift();
  newUser.weightLog.push(newUser.weight, newUser.datejoined);
  return newUser
}

function stringValidation(checkVariable, checkUnique, checkMidSpace) {
  let bValidation = true
  if (checkVariable == null) { bValidation = false } else {

    checkVariable = checkVariable.trim();

    if (checkVariable == "" || (checkVariable.indexOf(" ") != -1 && checkMidSpace)) { bValidation = false }
    else {
      let checkinglist = userList.filter(User => User.userName == checkVariable);

      if (checkinglist.length > 0 && checkUnique) { bValidation = false }
    }
  }
  return bValidation
}

function validateNumber(number) {
  return /^[0-9]+(\.)?[0-9]*$/.test(number)
}

function addUser(fusername, fUserPassword) {

  userList.push(PopulateUser(fusername, fUserPassword, usertemp.firstName, usertemp.lastName, usertemp.height, usertemp.weight, usertemp.age, usertemp.userEmail, usertemp.userPhoneNumber));
  loggedInUser = -1;
}

userList.push(PopulateUser('admin', 'admin', 'Admin', 'Admin', '', '', '', '', ''));
window.addEventListener('load', loadIndex);

// for all load{page Name here} we take the html of a page as a string components
//  and insert it into the current html page whilst replaceing all the current
// html. this allows us to maintain the variables we are storing without having to
// save them to a permanent storage medium. this only works for as long as the user 
// does not refresh or reload the page!!!

// we also use this to assign the events to inteactive components as they previously 
// did not "exist" this also helps to keep all the code for the different pages more
// or less constained
//
function loadIndex() {
  usertemp = null;
  let newpagebody = `   <header>
        <div class="logo">
            <img src="images/Logp.png" id="logo" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <button class="login-button" id="Login">
           Login in
        </button>
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
  documentHead.innerHTML = newPageHeader;
  documentBody.innerHTML = newpagebody;

  let landing2Button1 = documentBody.querySelector('#age-card-1');
  let landing2Button2 = documentBody.querySelector('#age-card-2');
  let landing2Button3 = documentBody.querySelector('#age-card-3');
  let landing2Button4 = documentBody.querySelector('#age-card-4');
  let loginButton = documentBody.querySelector('#Login');
  let checkbox = documentBody.querySelector("#termsCheckbox");

  loginButton.addEventListener('click', loadLogin);
  landing2Button1.addEventListener('click', e => {
    usertemp = PopulateUser('', '', '', '', '', '', "18-29", '', '');
    if (checkbox.checked == true) loadLanding2()
    else alert("please agree to our terms and conditions before continuing")
  });

  landing2Button2.addEventListener('click', e => {
    usertemp = PopulateUser('', '', '', '', '', '', '30-39', '', '');
    if (checkbox.checked == true) { loadLanding2() }
    else alert("please agree to our terms and conditions before continuing")
  });

  landing2Button3.addEventListener('click', e => {
    usertemp = PopulateUser('', '', '', '', '', '', "40-49", '', '');
    if (checkbox.checked == true) loadLanding2()
    else alert("please agree to our terms and conditions before continuing")
  });

  landing2Button4.addEventListener('click', e => {
    usertemp = PopulateUser('', '', '', '', '', '', "50+", '', '');
    if (checkbox.checked == true) loadLanding2()
    else alert("please agree to our terms and conditions before continuing")

  });

};

function loadLanding2() {
  let newpagebody = `    <header>
        <div class="logo">
            <img src="images/Logp.png" id="logo" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <button class="login-button" id="Login">
           Login in
        </button>
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
  let newPageHeader = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum Landing 2</title>
    <link rel="stylesheet" href="land2.css">`;

  let documentHead = document.querySelector('head');
  let documentBody = document.querySelector('body');
  documentHead.innerHTML = newPageHeader;
  documentBody.innerHTML = newpagebody;

  let landing3Button = documentBody.getElementsByClassName('option');
  let loginButton = documentBody.querySelector('#Login');
  let logoButton = documentBody.querySelector('#logo');

  logoButton.addEventListener('click', loadIndex);
  loginButton.addEventListener('click', loadLogin);
  for (let i = 0; i < landing3Button.length; ++i) {
    landing3Button[i].addEventListener('click', loadLanding3);
  }
}

function loadLanding3() {
  let newpagebody = `<header>
        <div class="logo">
            <img src="images/Logp.png" id="logo" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <button class="login-button" id="Login">
           Login in
        </button>
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
  let newPageHeader = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum Landing 3</title>
    <link rel="stylesheet" href="land3.css">`;
  let documentHead = document.querySelector('head');
  let documentBody = document.querySelector('body');
  documentHead.innerHTML = newPageHeader;
  documentBody.innerHTML = newpagebody;

  let landing3Button = documentBody.getElementsByClassName('landing3-goal-card');
  let loginButton = documentBody.querySelector('#Login');
  let logoButton = documentBody.querySelector('#logo');

  logoButton.addEventListener('click', loadIndex);
  loginButton.addEventListener('click', loadLogin);
  for (let i = 0; i < landing3Button.length; ++i) {
    landing3Button[i].addEventListener('click', loadLanding4);
  }
}
function loadLanding4() {
  let newpagebody = `
    <header>
        <div class="logo">
            <img src="images/Logp.png" id="logo" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <button class="login-button" id="Login">
           Login in
        </button>
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
  let newPageHeader = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum Landing 4</title>
    <link rel="stylesheet" href="land4.css">
    `;

  let documentHead = document.querySelector('head');
  let documentBody = document.querySelector('body');
  documentHead.innerHTML = newPageHeader;
  documentBody.innerHTML = newpagebody;

  let landing3Button = documentBody.querySelector('#detailsForm');
  let loginButton = documentBody.querySelector('#Login');
  let logoButton = documentBody.querySelector('#logo');

  logoButton.addEventListener('click', loadIndex);
  loginButton.addEventListener('click', loadLogin);
  landing3Button.addEventListener('submit', function (e) {
    e.preventDefault();
    if (this.checkValidity()) {
      let fFirstName = documentBody.querySelector("#nameInput").value;
      let fLastName = documentBody.querySelector("#surnameInput").value;
      let fHeight = documentBody.querySelector("#heightInput").value;
      let fWeight = documentBody.querySelector("#weightInput").value;
      let fEmail = documentBody.querySelector("#emailInput").value;
      let fPhoneNumber = document.querySelector("#mobileInput").value;


      usertemp = (PopulateUser('', '', fFirstName, fLastName, fHeight, fWeight, usertemp.age, fEmail, fPhoneNumber));
      loadLanding5()
    }
  });

}
function loadLanding5() {
  let newPageHeader = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum Landing 5</title>
    <link rel="stylesheet" href="land5.css">
    `;
  let newpagebody = ` <header>
        <div class="logo">
            <img src="images/Logp.png" id="logo" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <button class="login-button" id="Login">
           Login in
        </button>
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
  documentHead.innerHTML = newPageHeader;
  documentBody.innerHTML = newpagebody;

  let landing3Button = documentBody.querySelector('#detailsForm2');
  let loginButton = documentBody.querySelector('#Login');
  let logoButton = documentBody.querySelector('#logo');

  logoButton.addEventListener('click', loadIndex);
  loginButton.addEventListener('click', loadLogin);
  landing3Button.addEventListener('submit', function (e) {
    e.preventDefault();

    let username = documentBody.querySelector('#usernameInput');
    if (!stringValidation(username.value, true, true)) {
      username.value = null;
      alert('username invalid or already in use');
    };

    if (this.checkValidity()) {
      let password = documentBody.querySelector('#passwordInput')
      addUser(username.value, password.value);
      usertemp = null;
      loadIndex();
    }
  });
};
function loadMainBone() {
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
        <div class="header__content"id="createGoalsOutput">
          <button id="createGoals">Set A Goal</button>
         <div>
          <canvas id="GoalChart" >
          </canvas>
          </div>
        </div>
      </div>
    </header>

    <!-- They can see their excercises, and can choose to resume -->
     <!-- Called it jump because they can jump right back in, dont blame me (i see you) -->
    <div class="jump" id="jump">
      <div class="section__container jump__container" id="jump__container">
        <div class="jump__image" id="quoteDisplay">
         <p id="generateQuote"></p>  
         <!-- generates a random quote -->
        </div>
        <div class="jump__content" id="jump_Ex_content">
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
            <button class="btn add_Ex_btn" id="add__btn" value="Cardio">Add</button>
          </div>
          <div class="service__card">
            <span>02</span>
            <h4>Lifting</h4>
            <p>
              Increases muscle strength and mass, improves bone density, and enhances metabolism.
            </p>
            <button class="btn add_Ex_btn" id="add__btn" value="Lifting">Add</button>
          </div>
          <div class="service__card">
            <span>03</span>
            <h4>Body-Weight Exercises</h4>
            <p>
              Builds upper body strength (chest, shoulders, triceps), engages the core, and enhances endurance.
            </p>
            <button class="btn add_Ex_btn" id="add__btn" value="Body-Weight-Exercises">Add</button>
          </div>
          <div class="service__card">
            <span>04</span>
            <h4>Stretches</h4>
            <p>
              A full-body workout that boosts cardio fitness, burns fat, builds strength, and improves agility.
            </p>
            <button class="btn add_Ex_btn" id="add__btn" value="Stretches">Add</button>  
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
              <button class="calorieReport" id="caloriesDataToGraphButton"><i class="ri-arrow-right-fill"></i></button>
            </span>
          </div>
          <div class="report__card">`+
    // <div>
    //   <h4>Statistics</h4>
    //   <p>See your productivity displayed on a chart</p>
    // </div>
    // <span>
    //   <button class="chartReport"><i class="ri-arrow-right-fill"></i></button>
    // </span>
    `</div>
          
          <div class="report__card">
            <div>
              <h4>Full Report</h4>
              <p>See your full report since your journey with us</p>
            </div>
            <span>
              <button class="fullReport" id="FullReportButton"><i class="ri-arrow-right-fill"></i></button>
            </span>
          </div>
          
        </div>
      </div>
      <div id="ReportOutputDiv">
      <div>
    </section>


    <!-- Called it inspire because it'll have badges and their goals -->
    <section class="inspire__container" id="inspire">
      <div class="inspire__image">
        <img src="images/BigDudeRunning.jpg" alt="inspire" />
      </div>
      <div class="inspire__content">
        <h2 class="section__header">Your Achievements</h2>
        <p id="badges">
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
  documentHead.innerHTML = newPageHeader;
  documentBody.innerHTML = newpagebody;


  let caloriesGraphButton = document.getElementById("caloriesDataToGraphButton")
  caloriesGraphButton.addEventListener('click', e => {
    let outContainer = document.getElementById('ReportOutputDiv')
    outContainer.innerHTML = '';
    let chart = document.createElement('canvas');
    chart.setAttribute('id', 'caloriesDataGraphFromButton');
    outContainer.appendChild(chart)
    if(userList[loggedInUser].length>0){
    createGraphFromCalories('caloriesDataGraphFromButton')
    }
    else{alert("Wait up there!!! maybe log some exercizes first")}
  })

  let fullReportButton = document.getElementById("FullReportButton")

  
  let logOutButton = document.querySelector("#logOut");
  logOutButton.addEventListener('click', e => {
    loggedInUser = -1;
    loadIndex();
  })

  //mainbone dedicated js
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");
  // const exerDropdown = document.getElementById('exerciseName');


  menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  document.querySelectorAll('.add_Ex_btn').forEach(item => {
    item.addEventListener('click', event => {
      LoadExerciseForm(item.value, '')
    })
  })


  // exerDropdown.oninput = LoadExerciseForm(currentExerFormGroup,exerDropdown.value)

  // defining animation setting
  const scrollRevealOption = {
    origin: "bottom", //animations start from bottom
    distance: "50px", //moves 50px
    duration: 1000,
  };

  //applies scrollreveal animation to head
  ScrollReveal().reveal(".header__content canvas", {
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

  // LoadExerciseForm("BodyWeight")
  function LoadExerciseForm(exerciseGroupInput, exeName) {

    let container = document.createElement('div')
    container.setAttribute("class", "form-container show")

    let head = document.createElement('h3')
    let exForm = document.createElement('form')
    container.appendChild(head)
    let exNameSelectLabel = document.createElement("label")
    exNameSelectLabel.setAttribute("for", "exerciseName")
    exNameSelectLabel.textContent = "Exercise Name:"
    let select = document.createElement('select')
    select.setAttribute('id', "exerciseName")
    select.setAttribute('name', "exerciseName")
    select.setAttribute('title', "exerciseName")
    select.setAttribute("required", '')

    let disBtn = document.createElement('button')
    disBtn.setAttribute("disabled",'true')
    disBtn.setAttribute("style", "display:none;")
    exForm.appendChild(disBtn)
    exForm.appendChild(exNameSelectLabel)


    let optionString;

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

    let buttonExInput = document.createElement('button')
    buttonExInput.setAttribute('type', "submit")
    buttonExInput.setAttribute('class', 'btn')

    console.log(exerciseGroupInput)
    // taking user input and storing it based off the exercise the user has chosen
    // also checking for achievements and user personal bests
    switch (exerciseGroupInput) {
      case "Cardio":
        head.textContent = "Cardio"
        exForm.setAttribute('id', 'exerForm Cardio')
        buttonExInput.setAttribute('value', 'Cardio')

        exerciseInput1Label.textContent = "Time (min):";
        exerciseInput2Label.textContent = "Distance you ran:"
        exerciseInput4Label.textContent = "Calories you burned:"
        optionString = exerciseTypeToOptionsList("Cardio")
        select.innerHTML = optionString

        if (exeName == "JumpRope") { exerciseInput3Label.textContent = "Reps:" }
        else {
          exerciseInput3Label.textContent = "Speed"
        }
        exForm.appendChild(select)
        exForm.appendChild(exerciseInput1Label)
        exForm.appendChild(exerciseInput1)
        exForm.appendChild(exerciseInput2Label)
        exForm.appendChild(exerciseInput2)
        exForm.appendChild(exerciseInput3Label)
        exForm.appendChild(exerciseInput3)
        exForm.appendChild(exerciseInput4Label)
        exForm.appendChild(exerciseInput4)
        break;
      case "Body-Weight-Exercises":
        head.textContent = "Body Weight Exercises"
        exForm.setAttribute('id', 'exerForm bodyWeightForm')
        buttonExInput.setAttribute('value', 'BodyWeight')

        exerciseInput1Label.textContent = "Time (min)";
        exerciseInput4Label.textContent = "Calories you burned"
        optionString = exerciseTypeToOptionsList("BodyWeight")
        if (exeName != "Plank") {
          exerciseInput2Label.textContent = "Reps"
          exerciseInput3Label.textContent = "Max reps"
        } else {
          exerciseInput2Label.textContent = "Hold time";
          exerciseInput3Label.textContent = "Max Hold Time"
        }
        select.innerHTML = optionString
        
        exForm.appendChild(select)
        exForm.appendChild(exerciseInput1Label)
        exForm.appendChild(exerciseInput1)
        exForm.appendChild(exerciseInput2Label)
        exForm.appendChild(exerciseInput2)
        exForm.appendChild(exerciseInput3Label)
        exForm.appendChild(exerciseInput3)
        exForm.appendChild(exerciseInput4Label)
        exForm.appendChild(exerciseInput4)
        break;
      case "Lifting":

        head.textContent = "Weight Lifting"
        exForm.setAttribute('id', 'exerForm weightLiftForm')
        buttonExInput.setAttribute('value', 'WeightedLifts')

        exerciseInput1Label.textContent = "Time (min)";
        exerciseInput2Label.textContent = "Reps"
        exerciseInput3Label.textContent = "Max reps"
        exerciseInput4Label.textContent = "Calories you burned"
        exerciseInput5Label.textContent = "Weight in kg"

        optionString = exerciseTypeToOptionsList("WeightedLifts")
        select.innerHTML = optionString

        exForm.appendChild(select)

        exForm.appendChild(exerciseInput1Label)
        exForm.appendChild(exerciseInput1)
        exForm.appendChild(exerciseInput2Label)
        exForm.appendChild(exerciseInput2)
        exForm.appendChild(exerciseInput3Label)
        exForm.appendChild(exerciseInput3)
        exForm.appendChild(exerciseInput4Label)
        exForm.appendChild(exerciseInput4)
        exForm.appendChild(exerciseInput5Label)
        exForm.appendChild(exerciseInput5)
        break;
      case "Stretches":

        head.textContent = "Streches"
        exForm.setAttribute('id', 'exerForm stretchesForm')
        buttonExInput.setAttribute('value', 'Stretches')

        exerciseInput1Label.textContent = "Time (min)";
        switch (exeName) {
          case "FoamRollingQuads":
            exerciseInput2Label.textContent = "Duration"
            exerciseInput3Label.textContent = "Max Duration"
            break
          case "TaiChiSlowMovements":
            exerciseInput2Label.textContent = "Reps"
            exerciseInput3Label.textContent = "Max Reps"
            break
          default:
            exerciseInput2Label.textContent = "HoldTime"
            exerciseInput3Label.textContent = "Max HoldTime"
            break;
        }

        optionString = exerciseTypeToOptionsList("Stretches");
        select.innerHTML = optionString

        exForm.appendChild(select)

        exForm.appendChild(exerciseInput1Label)
        exForm.appendChild(exerciseInput1)
        exForm.appendChild(exerciseInput2Label)
        exForm.appendChild(exerciseInput2)
        exForm.appendChild(exerciseInput3Label)
        exForm.appendChild(exerciseInput3)
        break;
    }

    
    buttonExInput.textContent = "Submit";
    exForm.appendChild(buttonExInput)
    container.appendChild(exForm)
    select.innerHTML += "<br>"
    exNameSelectLabel.innerHTML += "<br>"

    let jumpcontain = document.getElementById('jump_Ex_content')
    jumpcontain.innerHTML = '';
    jumpcontain.appendChild(container)

    select.addEventListener('change', event => {
      console.log(select.value)
      LoadExerciseForm(currentExerFormGroup, select.value)
    })


    buttonExInput.addEventListener("click", (event) => {
      console.log(`${buttonExInput.value},${select.value}`);
      addExercise(buttonExInput.value,select.value)
    })
    
  }
  
  let createGoalFormbtn = document.getElementById("createGoals")
  fullReportButton.addEventListener('click', userToFullDetails)


  createGoalFormbtn.addEventListener("click",e=>{
    let container = document.getElementById("createGoalsOutput")
    container.innerHTML=`
          <div>
          </div>`;
    
    container.setAttribute("class", "form-container show")


    let form = document.createElement('form');
    form.setAttribute("id","goalModalForm")

    form.innerHTML= `<link rel="stylesheet" href="addGoal.css">
            <h2>Enter Goal Details</h2>
            <label for="goalType">Goal Type:</label>
            <select id="goalType">
                <option value="calories burnt">Calories Burnt</option>
                <option value="distance covered">Distance Covered</option>
                <option value="weight lifted">Weight Lifted</option>
                <option value="time streching'>Time Streching</option>
                <option value="exercises logged">Exercises Logged</option>
            </select><br><br>

            <label for="goalDays">Days to Achieve Goal:</label>
            <input type="number" id="goalDays" min="1"><br><br>

            <label for="goalTarget">Goal Target:</label>
            <input type="number" id="goalTarget" min="1"><br><br>
            <button onclick="addGoal()">Submit</button>`
            
    form.style.opacity = '1'
    container.appendChild(form)
  })
  createGraphOfUserGoal("GoalChart");
  checkAchievements();
};

function loadLogin() {
  usertemp = null;
  let newPageHeader = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum Landing 5</title>
    <link rel="stylesheet" href="land5.css">
    `;
  let newpagebody = ` <header>
        <div class="logo">
            <img src="images/Logp.png" id="logo" alt="Momentum Logo">  <span class="mom">Momentum</span>
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
  documentHead.innerHTML = newPageHeader;
  documentBody.innerHTML = newpagebody;

 
  let landing3Button = documentBody.querySelector('#detailsForm2');
  let logoButton = documentBody.querySelector('#logo');

  logoButton.addEventListener('click', loadIndex);
  landing3Button.addEventListener('submit', function (e) {
    e.preventDefault();

    let username = documentBody.querySelector('#usernameInput');
    let password = documentBody.querySelector('#passwordInput');
    let found = false;
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].userName == username.value) {
        found = true;
        if (userList[i].userPassword == password.value) {
          loggedInUser = i;
        } else {
          alert("incorrect username or password");
          password.value = null;
          username.value = null;
        }
        break;
      }
    }

    if (!found) {
      alert("incorrect username or password");
      password.value = null;
      username.value = null;
    }

    if (this.checkValidity()) {
      loadMainBone();
    }
  });
};

// just populating the admin account for demonstration purposes
function populateAdminAccount() {

  loggedInUser = 0;

  let adminUser = userList[loggedInUser];

  adminUser.usersBestList = [
    cardio = [
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
        caloriesBurned: 0,
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
    bodyWeightExercises = [
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
    weightedLifts = [
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
    stretches = [
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
        maxHoldTime: 0,
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
    ]]

  adminUser.GoalDetails = {
    type: "distance covered", //type of 
    // [calories burnt, distance covered, weight lifted, time streching or exercises logged]
    updatesList: [[0, 0, new Date('2025/01/20')], [1000, 1000, new Date('2025/01/25')], [2010, 1010, new Date('2025/01/30')], [2500, 490, new Date('2025/02/4')], [5000, 2500, new Date('2025/02/10')], [6400, 1400, new Date('2025/02/14')], [7000, 600, new Date('2025/02/20')], [7700, 700, new Date('2025/02/25')]],
    startDate: new Date('2025/01/20'),
    endDate: new Date('2025/03/01'),// the date they enter in the form
    goalTarget: 10000, // end goal
    goalCounter: 7700 //running total 
  },
    adminUser.completedGoals = [],
    adminUser.missedGoals = []
  adminUser.datejoined = new Date("2024/11/05")
  adminUser.weight = 80;
  adminUser.weightLog = [
    [80, new Date("2024/11/05")],
    [75, new Date("2024/11/15")],
    [85, new Date("2024/12/25")],
    [86, new Date("2025/01/01")],
    [87, new Date("2025/01/15")],
    [84, new Date("2025/01/17")],
    [86, new Date("2025/01/25")],
    [86, new Date("2025/01/30")],
    [84, new Date("2025/02/11")],
    [80, new Date("2025/02/25")]
  ]



  loggedInUser = -1;

  console.log("Admin account populated with data.");
}


populateAdminAccount();
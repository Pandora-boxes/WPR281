let userList = { "user1": { GoalDetails: {} } }; 
let loggedInUser = "user1";

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
        Goal.goalCounter = 0;
        alert("Goal set successfully!");
    } else {
        alert("Please enter valid details!");
    }
}
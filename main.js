/*const menuBtn = document.getElementById("menu-btn");
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
*/
let loggedInUser = -1;
let userList=[];
let exerciseList = []
function Exercise(){
    this.name='',
    this.calariesBurntPerMinute=0.0,
    this.description=''
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

window.addEventListener('load',loadIndex);

    function loadIndex(){
    let newpagebody =  `   <header>
        <div class="logo">
            <img src="/Logp.png" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <div class="menu">
            <a href="#"><span>Login in</span></a>
        </div>
    </header>

    <section class="hero">
        <h1>Become more than you are</h1>
        <p>Train with us</p>
    </section>

    <section class="age-groups">
        <a class="index-age-card">
            <img src="/18-29.png" alt="Age 18-29">
            <p>Age: 18-29</p>
        </a>
        <a class="index-age-card">
            <img src="/30-39.png" alt="Age 30-39">
            <p>Age: 30-39</p>
        </a>
        <a class="index-age-card">
            <img src="/40-49.png" alt="Age 40-49">
            <p>Age: 40-49</p>
        </a>
        <a class="index-age-card">
            <img src="/50+.png" alt="Age 50+">
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
                <img src="/Logp.png" alt="Momentum Logo"> 
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
};
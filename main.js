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
let usertemp = {};
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
    weightLog : [[0,new Date()]]
}

let exercise = {
    exerciseName : "",
    exerciseDuration :null,
    calariesBurnt : null,
    exerciseDateTime : new Date()
}

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

function addUser(fusername,fUserPassword){
    
    userList.push(PopulateUser(fusername,fUserPassword,usertemp.firstName,usertemp.lastName,usertemp.height,usertemp.weight,usertemp.age,usertemp.email,usertemp.PhoneNumber));
        loggedInUser =-1;
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
        <a class="index-age-card" id="age-card-1">
            <img src="/18-29.png" alt="Age 18-29">
            <p>Age: 18-29</p>
        </a>
        <a class="index-age-card" id="age-card-2">
            <img src="/30-39.png" alt="Age 30-39">
            <p>Age: 30-39</p>
        </a>
        <a class="index-age-card" id="age-card-3">
            <img src="/40-49.png" alt="Age 40-49">
            <p>Age: 40-49</p>
        </a>
        <a class="index-age-card" id="age-card-4">
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

    let landing2Button1 = documentBody.querySelector('#age-card-1');
    let landing2Button2 = documentBody.querySelector('#age-card-2');
    let landing2Button3 = documentBody.querySelector('#age-card-3');
    let landing2Button4 = documentBody.querySelector('#age-card-4');

    landing2Button1.addEventListener('click',e=>{
        usertemp = PopulateUser('','','','','','',"18-29",'','');
        loadLanding2()});
    
    landing2Button2.addEventListener('click',e=>{
        usertemp = PopulateUser('','','','','','','30-39','','');
        loadLanding2()});

    landing2Button3.addEventListener('click',e=>{
        usertemp = PopulateUser('','','','','','',"40-49",'','');
        loadLanding2()});

    landing2Button4.addEventListener('click',e=>{
        usertemp = PopulateUser('','','','','','',"50+",'','');
        loadLanding2()});
};

function loadLanding2(){
    let newpagebody = `    <header>
        <div class="logo">
            <img src="/Logp.png" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <div class="menu">
            <a href="#"><span>Login in</span></a>
        </div>
    </header>

    <div class="container">
        <h1>Choose your body type</h1>

        <div class="body-type-options">
            <a class="landing2-body-card">
                <div class="option">
                    <img src="/Slim.webp" alt="Slim Body Type">
                    <span class="body">Slim</span>
               </div>
            </a>

            <a class="landing2-body-card">
                <div class="option">
                    <img src="/Average.webp" alt="Average Body Type">
                    <span class="body">Average</span>
                </div>
            </a>

            <a class="landing2-body-card">
                <div class="option">
                    <img src="/Heavy.webp" alt="Heavy Body Type">
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
                <img src="/Logp.png" alt="Momentum Logo"> 
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

    let landing3Button = documentBody.querySelector('.landing2-body-card');
    landing3Button.addEventListener('click',loadLanding3);
}

function loadLanding3(){
    let newpagebody =`<header>
        <div class="logo">
            <img src="/Logp.png" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <div class="menu">
            <a href="#"><span>Login in</span></a>
        </div>
    </header>

    <div class="container">
        <h1>Choose your goal</h1>
        <div class="goal-type-options">
            <a class="landing3-goal-card">
                <div class="option">
                    <img src="/Muscle Gain.png" alt="Muscle Gain Type">
                    <span class="goal">Muscle Gain</span>
                </div>
            </a>
            <a class="landing3-goal-card">
                <div class="option">
                    <img src="/Weight Loss.png" alt="Weight loss Type">
                    <span class="goal">Weight loss</span>
                </div>
            </a>
            <a class="landing3-goal-card">
                <div class="option">
                    <img src="/Get Shredded.png" alt="Shredded Type">
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
                <img src="/Logp.png" alt="Momentum Logo"> 
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

    let landing3Button = documentBody.querySelector('.landing3-goal-card');
    landing3Button.addEventListener('click',loadLanding4);
}
function loadLanding4(){
    let newpagebody = `
    <header>
        <div class="logo">
            <img src="/Logp.png" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <div class="menu">
            <a href="#"><span>Login in</span></a>
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
                <img src="/Logp.png" alt="Momentum Logo"> 
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
            <img src="/Logp.png" alt="Momentum Logo">  <span class="mom">Momentum</span>
        </div>
        <div class="menu">
            <a href="#"><span>Login in</span></a>
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
                <img src="/Logp.png" alt="Momentum Logo"> 
            </div>
        </div>
    </footer>`;

    let documentHead = document.querySelector('head');
    let documentBody = document.querySelector('body');
    documentHead.innerHTML=newPageHeader;
    documentBody.innerHTML = newpagebody;

    let landing3Button = documentBody.querySelector('#detailsForm2');
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
            console.log(userList[userList.length-1]);
            //send user to landingPage
            loadMainBone();
        }
    });
};
function loadMainBone(){
    let newpagebody = `<header>
      <nav>
        <div class="nav__header">
          <div class="nav__logo">
           
              <img src="LOgo (2).png" alt="logo" class="logo-white" />
              <img src="LOgo (2).png" alt="logo" class="logo-dark" />
            
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
          <li><a href="#report">Report</a></li>
          <li><a href="#inspire">Achievements</a></li>
          <li><a href="#">Join Now</a></li>
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
            <h4>Running</h4>
            <p>
              Improves cardiovascular endurance, burns calories, strengthens leg muscles, and boosts mental health.
            </p>
            <button class="btn" id="add__btn">Add</button>
          </div>
          <div class="service__card">
            <span>02</span>
            <h4>Lifting</h4>
            <p>
              Increases muscle strength and mass, improves bone density, and enhances metabolism.
            </p>
            <button class="btn" id="add__btn">Add</button>
          </div>
          <div class="service__card">
            <span>03</span>
            <h4>Push-ups</h4>
            <p>
              Builds upper body strength (chest, shoulders, triceps), engages the core, and enhances endurance.
            </p>
            <button class="btn" id="add__btn">Add</button>
          </div>
          <div class="service__card">
            <span>04</span>
            <h4>Burpees</h4>
            <p>
              A full-body workout that boosts cardio fitness, burns fat, builds strength, and improves agility.
            </p>
            <button class="btn" id="add__btn">Add</button>  
          </div>
          <div class="service__image">
            <img src="duderunning.jpg" alt="service" />
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
        <img src="BigDudeRunning.jpg" alt="inspire" />
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
            <img src="LOGOwhite.png" alt="logo" />
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

     <!-- allows for scroll animation -->
    <script src="https://unpkg.com/scrollreveal"></script>
    <link rel="stylesheet" href="mainstyle.css" />
    <title>web project</title>`;

    let documentHead = document.querySelector('head');
    let documentBody = document.querySelector('body');
    documentHead.innerHTML=newPageHeader;
    documentBody.innerHTML = newpagebody;

};

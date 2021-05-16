function ready() {

    const start = new Date().getTime();
    const timer = document.getElementById("time-left");
}

let currentTime = 20;
let totalTime = [];
    

function makeCuteMoleAppear() { //makes mole appear at random position on screen and starts timer
    let top = Math.random() * 200;
    let left = Math.random() * 270;
    if (window.innerWidth >= 900) {
        left = Math.random() * 750;
        top = Math.random() * 275;
    } else if (window.innerWidth <= 360) {
        left = Math.random() * 150;
    } else if (window.innerHeight <=414) {
        top = Math.random() * 85;
    }

    let width = (Math.random() * 300) + 100;

    document.getElementById("mole").style.width = width + "px";
    document.getElementById("mole").style.height = width + "px";
    document.getElementById("mole").style.top = top + "px";
    document.getElementById("mole").style.left = left + "px";
    document.getElementById("mole").style.display = "block";

    start = new Date().getTime();
}

function appearAfterDelay() { //sets the delay between appearances 
    setTimeout(makeCuteMoleAppear, Math.random() * 3000);
}

appearAfterDelay();

document.getElementById("mole").onclick = function () { //captures reaction time and removes mole from screen
    document.getElementById("mole").style.display = "none";

    let end = new Date().getTime();  
    let timeTaken = (end - start) / 1000; //returns users reaction time
    document.getElementById("reaction-time").innerHTML = timeTaken + "s";
    let totalAverage = timeTaken;
    totalTime.push(totalAverage);
    appearAfterDelay(); //resets game play 
};

console.log(totalTime);


//function countdownTimer(){} 

//function returnResults(){} 

//function endGame(){}



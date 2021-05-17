function ready() {

    const start = new Date().getTime();
    const timeLeftDisplay = document.getElementById("time-left");

}

let timeLeft = 20;
let totalTime = [];


//Credit to gattodigital on Github for random positioning and time capture. Adapted to suit this project
function makeCuteMoleAppear() { //makes mole appear at random position on screen and starts timer
    let top = Math.random() * 200;
    let left = Math.random() * 200;
    if (window.innerWidth >= 895) {
        left = Math.random() * 750;
        top = Math.random() * 450;
    } else if (window.innerWidth <= 360) {
        left = Math.random() * 150;
    } else if (window.innerHeight <= 414) {
        left = Math.random() * 400;
        top = Math.random() * 30;
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
    setTimeout(makeCuteMoleAppear, Math.random() * 1000);

}

appearAfterDelay();

document.getElementById("mole").onclick = function () { //captures reaction time and removes mole from screen
    document.getElementById("mole").style.display = "none";

    let end = new Date().getTime();
    let timeTaken = (end - start) / 1000; //returns users reaction time and pushes then to totalTime array
    document.getElementById("reaction-time").innerHTML = timeTaken + "s";
    totalTime.push(timeTaken);

    let totalAverageTime = 0; // adds all reaction times and divides them by array length to return the average 
    for (let i = 0; i < totalTime.length; i++) {
        totalAverageTime += totalTime[i] / totalTime.length
        totalAverageTime = Math.floor(totalAverageTime * 100) / 100;
        totalAverageTime.toFixed(2);
    }
    document.getElementById("total-average-time").innerHTML = totalAverageTime + "s";

    appearAfterDelay(); //resets game play 
}

console.log(totalTime);



//function endGame(){}
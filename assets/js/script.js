/*jshint esversion: 6 */
(function ready() {

    document.addEventListener("DOMContentLoaded", ready);
})();

const mole = document.getElementById("mole");
let buttonDisplay = document.getElementById("startGame");
let totalTime = [];
let moleCounter = 0;
let totalAverageTime;
let start;
let results;

//Credit to gattodigital on Github for random positioning and time capture. Heavily refactored to suit this project.

// Makes mole appear on random position on the screen
function makeCuteMoleAppear() {
    moleCounter++;
    if (moleCounter === 11) {
        endResults();
    }
    let top = Math.random() * 200;
    let left = Math.random() * 200;
    if (window.innerWidth >= 895) {
        left = Math.random() * 750;
        top = Math.random() * 400;
    } else if (window.innerWidth <= 360) {
        left = Math.random() * 150;
    } else if (window.innerHeight <= 414) {
        left = Math.random() * 400;
        top = Math.random() * 30;
    }

    let width = (Math.random() * 300) + 100;

    mole.style.width = width + "px";
    mole.style.height = width + "px";
    mole.style.top = top + "px";
    mole.style.left = left + "px";
    mole.style.display = "block";

    start = new Date().getTime();
}

//Sets time interval between appearances during game play
function appearAfterDelay() { 

    setTimeout(makeCuteMoleAppear, Math.random() * 1500);
}

let startGame = document.getElementById("startGame");
//Begins game when Start button is pressed
if (startGame) {
    startGame.onclick = function () {
        buttonDisplay.style.display = "none";
        appearAfterDelay();
    };
}
if (mole) {
    mole.onclick = function () { //captures reaction time and removes mole from screen
        mole.style.display = "none";

        let end = new Date().getTime();
        let timeTaken = (end - start) / 1000; //returns users reaction time and pushes them to totalTime array
        document.getElementById("reaction-time").innerHTML = timeTaken + "s";
        totalTime.push(timeTaken);

        totalAverageTime = 0; // adds all reaction times and divides them by array length to return the average 
        for (var i = 0; i < totalTime.length; i++) {
            totalAverageTime += totalTime[i] / totalTime.length;
            totalAverageTime = Math.floor(totalAverageTime * 100) / 100;
            totalAverageTime.toFixed(2);
            document.getElementById("total-average-time").innerHTML = totalAverageTime + "s";

        }

        appearAfterDelay();
    };
}
//Returns players results based on their overall average reaction time, returns start button and clears reaction times
function endResults() {
    moleCounter = 0;
    buttonDisplay.style.display = "inline-block";
    let reactionTime = document.getElementById("reaction-time");
    reactionTime.innerHTML = 0;
    let totalAverage = document.getElementById("total-average-time");
    totalAverage.innerHTML = 0;

    let resultsModal = new bootstrap.Modal(document.getElementById("exampleModal"));
    resultsModal.show();
    if (totalAverageTime <= 0.29) {
        results = document.getElementById("results").innerText = "Holey Moley!\nYour average reaction time is " + totalAverageTime + "s\n" + "You have the reaction times of a very young mole: \nUnder 18!\nAre you faster or slower than you thought?\nWhy not try again!";
    } else if (totalAverageTime <= 0.35) {
        results = document.getElementById("results").innerText = "My my, you are fast!\nYour average reaction time is " + totalAverageTime + "s\n" + "You have the reaction times of a young adult mole between: \n 18 & 26 years old\nAre you faster or slower than you thought?\nWhy not try again!";
    } else if (totalAverageTime <= 0.38) {
        results = document.getElementById("results").innerText = "We shall call you quick fingers!\nYour average reaction time is " + totalAverageTime + "s\n" + "You have the reaction times of a young(ish) adult mole between: \n 27 & 30 years old\nAre you faster or slower than you thought?\nWhy not try again!";
    } else if (totalAverageTime <= 0.43) {
        results = document.getElementById("results").innerText = "Great! Can you do better?\nYour average reaction time is " + totalAverageTime + "s\n" + "You have the reaction times of an adult mole between: \n 31 & 35 years old\nAre you faster or slower than you thought?\nWhy not try again!";
    } else if (totalAverageTime <= 0.47) {
        results = document.getElementById("results").innerText = "Good! Can you do better?\nYour average reaction time is " + totalAverageTime + "s\n" + "You have the reaction times of an adult mole between: \n 36 & 40 years old\nAre you faster or slower than you thought?\nWhy not try again!";
    } else if (totalAverageTime <= 0.53) {
        results = document.getElementById("results").innerText = "Are you just warming up...\nYour average reaction time is " + totalAverageTime + "s\n" + "You have the reaction times of an older adult mole between: \n 41 & 46 years old\nAre you faster or slower than you thought?\nWhy not try again!";
    } else if (totalAverageTime <= 0.59) {
        results = document.getElementById("results").innerText = "Even young moles must get older..\nYour average reaction time is " + totalAverageTime + "s\n" + "You have the reaction times of an aging adult mole between: \n 47 & 52 years old\nAre you faster or slower than you thought?\nWhy not try again!";
    } else if (totalAverageTime <= 0.68) {
        results = document.getElementById("results").innerText = "You must need a little rest after that..\nYour average reaction time is " + totalAverageTime + "s\n" + "You have the reaction times of a senior adult mole between: \n 53 & 60 years old\nAre you faster or slower than you thought?\nWhy not try again!";
    } else if (totalAverageTime >= 0.69) {
        results = document.getElementById("results").innerText = "Oh my, did you forget you were playing..!\nYour average reaction time is " + totalAverageTime + "s\n" + "You have the reaction times of a very senior adult mole: \nOver 60 years old\nAre you faster or slower than you thought?\nWhy not try again!";
    }

}

//End of script

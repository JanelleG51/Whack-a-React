function ready() {

    document.addEventListener("DOMContentLoaded", ready);
}

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


document.getElementById("startGame").onclick = function () {
    appearAfterDelay()
};

//Tyring to make this block of code run a specific number time using a do/while loop then call results function.
let numberOfAppearances = 10;
do {
    document.getElementById("mole").onclick = function () { //captures reaction time and removes mole from screen
        document.getElementById("mole").style.display = "none";

        let end = new Date().getTime();
        let timeTaken = (end - start) / 1000; //returns users reaction time and pushes then to totalTime array
        document.getElementById("reaction-time").innerHTML = timeTaken + "s";
        totalTime.push(timeTaken);

        var totalAverageTime = 0; // adds all reaction times and divides them by array length to return the average 
        for (var i = 0; i < totalTime.length; i++) {
            totalAverageTime += totalTime[i] / totalTime.length
            totalAverageTime = Math.floor(totalAverageTime * 100) / 100;
            totalAverageTime.toFixed(2);
        }
        document.getElementById("total-average-time").innerHTML = totalAverageTime + "s";

        appearAfterDelay(); //resets game play 
    }
} while (numberOfAppearances < 10);







//function results() {
//show reults modal
//let results;
//if(totalAverageTime <= 0.296)
//results = document.getElementById("").innerHTML = "Your total average time is + totalAverageTime + 's'\nHoley Moley! You have the reaction times of a very young mole:\nUnder 18 years old.\nAre you better or worse that you thought?\nWhy not try again!";
//} else if (totalAverageTime <=0.35)
//results = document.getElementById("").innerHTML = "Your total average time is + totalAverageTime + 's'\nMy My, you are fast! You have the reaction times of a young adult mole:\nBetween 18 & 26 years old.\nAre you better or worse that you thought?\nWhy not try again!";
//} else if (totalAverageTime <=0.38)
//results = document.getElementById("").innerHTML = "Your total average time is + totalAverageTime + 's'\nWe shall call you quick fingers! You have the reaction times of a young(ish) adult mole:\nBetween 27 & 30 years old.\nAre you better or worse that you thought?\nWhy not try again!";
//} else if (totalAverageTime <=0.43)
//results = document.getElementById("").innerHTML = "Your total average time is + totalAverageTime + 's'\nWe shall call you quick fingers! You have the reaction times of an adult mole:\nBetween 31 & 35 years old.\nAre you better or worse that you thought?\nWhy not try again!";
//} else if (totalAverageTime <=0.47)
//results = document.getElementById("").innerHTML = "Your total average time is + totalAverageTime + 's'\nWe shall call you quick fingers! You have the reaction times of an adult mole:\nBetween 36 & 40 years old.\nAre you better or worse that you thought?\nWhy not try again!";
//} else if (totalAverageTime <=0.53)
//results = document.getElementById("").innerHTML = "Your total average time is + totalAverageTime + 's'\nWe shall call you quick fingers! You have the reaction times of an adult mole:\nBetween 41 & 46 years old.\nAre you better or worse that you thought?\nWhy not try again!";
//} else if (totalAverageTime <=0.59)
//results = document.getElementById("").innerHTML = "Your total average time is + totalAverageTime + 's'\nWe shall call you quick fingers! You have the reaction times of an adult mole:\nBetween 47 & 52 years old.\nAre you better or worse that you thought?\nWhy not try again!";
//} else if (totalAverageTime <=0.68)
//results = document.getElementById("").innerHTML = "Your total average time is + totalAverageTime + 's'\nWe shall call you quick fingers! You have the reaction times of an adult mole:\nBetween 53 & 60 years old.\nAre you better or worse that you thought?\nWhy not try again!";
//} else if (totalAverageTime >=0.69)
//results = document.getElementById("").innerHTML = "Your total average time is + totalAverageTime + 's'\nWe shall call you quick fingers! You have the reaction times of an adult mole:\nOver 60 years old.\nAre you better or worse that you thought?\nWhy not try again!";
//}
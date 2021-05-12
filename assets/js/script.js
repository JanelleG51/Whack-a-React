let start = new Date().getTime();

function makeCuteMoleAppear() {
    let top = Math.random() * 200;
    let left = Math.random() * 300;
    let width = (Math.random() * 200) + 100;
    

    document.getElementById("mole").style.width = width + "px";
    document.getElementById("mole").style.height = width + "px";
    document.getElementById("mole").style.top = top + "px";
    document.getElementById("mole").style.left = left + "px";
    document.getElementById("mole").style.display = "block";
    

    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(makeCuteMoleAppear, Math.random() * 3000);
}

appearAfterDelay();

document.getElementById("mole").onclick = function() {
    document.getElementById("mole").style.display = "none";

    let end = new Date().getTime();
    let timeTaken = (end - start) / 1000;
    document.getElementById("reaction-time").innerHTML = timeTaken + "s";

    appearAfterDelay();
}


//function captureTimes(){}

//function returnResults(){} 

//function endGame(){}





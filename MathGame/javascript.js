//if we click on the start/reset
    //if we are playing
        //reload page
    //if we are not playing
        //set score to zero
        //show the countdown box
        //start reduce time by one second in loop
            //timeleft?
                //yes -> continue
                //no -> gameover
        //change button text to reset
        //generate new Q&A

//if we click on the answer box
    //if we are playing
        //correct?
            //yes -> increase score by one & show the correct box & generate new Q&A
            //no -> show try again box for 1 sec

var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("startreset").onclick =
    function () {
    if (playing==true) {
        location.reload(); //reloading page
    } else {
        score = 0;
        playing = true;
        document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        hide("gameOver");
        document.getElementById("startreset").innerHTML = "Reset Game";
        startCountdown();
        generateQA();
    }
}

for(i=1; i<5;i++) {
    document.getElementById("box" + i).onclick = 
    function() {
    if(playing==true) {
        if(this.innerHTML == correctAnswer) {
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function() {
                hide("correct");
            },1000);
            generateQA();
        } else {
            hide("correct");
            show("wrong");
            setTimeout(function() {
                hide("wrong");
            },1000);
        }
    }
}
}
    
    
document.getElementById("box1").onclick = 
    function() {
    if(playing==true) {
        if(this.innerHTML == correctAnswer) {
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function() {
                hide("correct");
            },1000);
            generateQA();
        } else {
            hide("correct");
            show("wrong");
            setTimeout(function() {
                hide("wrong");
            },1000);
        }
    }
}

function startCountdown() {
    action = setInterval(function(){
        timeremaining -= 1; 
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining==0) {
            stopCountdown();
            show("gameOver");
            document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    },1000)
}

function stopCountdown() {
    clearInterval(action);
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

function show(Id) {
    document.getElementById(Id).style.display = "block";
}

function generateQA() {
    var x = 1+Math.round(9 * Math.random());
    var y = 1+Math.round(9 * Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    for(var i=1;i<5;i++){
        if (i!=correctPosition) {
            var wrongAnswer = (1+Math.round(9 * Math.random()))*(1+Math.round(9 * Math.random()))
            document.getElementById("box" + i).innerHTML = wrongAnswer;
        }
    }
}
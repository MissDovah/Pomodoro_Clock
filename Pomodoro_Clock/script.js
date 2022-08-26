console.log("JavaScript");
let timer;
let session;

// jQuery

// Decrement
$("#break-decrement").click(function () {
    console.log("button1 ('Break') set break to 5 minutes");
    timer = 5 * 60;
    clearInterval(session);
    session = setInterval(decTime, 1000);
})
$("#session-decrement").click(function () {
    console.log("button2 set ('Session') break to 25 minutes");
    timer = 25 * 60;
    clearInterval(session);
    session = setInterval(decTime, 1000);
})

// Incremement
$("#break-increment").click(function () {
    console.log("button3 set break to 5 minutes from 0");
    timer = 0;
    clearInterval(session);
    session = setInterval(incTime, 1000);
})
$("#session-increment").click(function () {
    console.log("button4 set break to 25 minutes from 0");
    timer = 0;
    clearInterval(session);
    session = setInterval(incTime, 1000);
})

// Stop
$("#start_stop").click(function () {
    console.log("stop button");
    timer = 25 * 60;
    clearInterval(session);
})

// Reset
$("#reset").click(function () {
    console.log("reset button");
    timer = 25 * 60;
    clearInterval(session);
})


// Reset Button/Timer
timer = 25 * 60;

function decTime() {
    timer--;
    console.log(timer);

    $("#display").text(timer)
}

function incTime() {
    timer++;
    console.log(timer);

    $("#display").text(timer)
}


// let countDown = setInterval(decTime, 1000);
clearInterval(session);
if (timer <= 0) {
    clearInterval(session);
}

$("#time-left").text(timer);
$("#reset").click(function () {
    timeLeft = 0;
    $("#time-left").text(timer)
});


// Session Timer
session = 25 * 60;
function sessionTimer() {
    session--;
    console.log(session);
}

let sessionTimers = setInterval(sessionTimer, 1000);
clearInterval(sessionTimers);
if (timer <= 0) {
    clearInterval(sessionTimers);
}

$("#session-length").text(session);
$("#session-length").click(function () {
    timeLeft = 0;
    $("#session-length").text(session)
});


// Break Timer
timer = 5 * 60;
function breakTime() {
    timer--;
    console.log(timer);
}

let breakDown = setInterval(breakTime, 1000);
clearInterval(breakDown);
if (timer <= 0) {
    clearInterval(breakDown);
}

$("#break-length").text(timer);
$("#break-length").click(function () {
    timeLeft = 0;
    $("#break-length").text(timer)
});


// Time Converter Function
function timeParser(time) {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    return `${minutes}:${seconds}`
}



// Converter Function
// //  JS has a built in function for this called Date, so you'd use it like:
// let time = new Date('2022-07-15T09:44:00');
// // Then you have to get the hours using getHours()
// let hours = time.getHours('July 15, 2022 10:41:00');
// //Then we convert the hours by creating a new variable that is also equal to the hours/minutes
// let convertedTime = hours;



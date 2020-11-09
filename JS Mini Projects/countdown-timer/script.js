const newYears = '1 Jan 2021 ';
var daysInnerHTML = document.getElementById('days');
var hoursInnerHTML = document.getElementById('hours');
var minutsInnerHTML = document.getElementById('mins');
var secondsInnerHTML = document.getElementById('seconds');


function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const TotalSeconds = (newYearDate - currentDate) / 1000;
    const second = Math.floor(TotalSeconds % 60);
    const minuts = Math.floor(TotalSeconds / 60) % 60;
    const hour = Math.floor(TotalSeconds / 3600) % 24
    const days = Math.floor(TotalSeconds / 3600 / 24);
    console.log(days, hour, minuts, second);
    daysInnerHTML.innerHTML = days;
    hoursInnerHTML.innerHTML = hour;
    minutsInnerHTML.innerHTML = minuts;
    secondsInnerHTML.innerHTML = second;

}
//inital call
countdown();
setInterval(countdown, 1200);
const newYear = '8 Nov 2020';
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minEl = document.getElementById('minute')
const secEl = document.getElementById('second')

function countDown(){
    const newYearDate = new Date(newYear)
    const currentDate = new Date();
    const totalSeconds = (newYearDate-currentDate)/1000;
    const days   = Math.floor(totalSeconds / 3600/24);
    const hours  = Math.floor(totalSeconds/3600) % 24;
    const minute = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds % 60);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minEl.innerHTML = minute;
    secEl.innerHTML = seconds;



    console.log(days,hours,minute,seconds);
}
countDown();

setInterval(countDown,1000);
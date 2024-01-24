const clockDisplay = document.querySelector('.clock-display');
const weekdayDisplay = document.querySelector('.weekday-display');
const meridiemDisplay = document.querySelector('.meridiem-display');
const millisecondsCheckbox = document.querySelector('.milliseconds-checkbox');
const clockFormat = document.querySelector('.clock-format');



setInterval(() => {
    const date = new Date();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let weekday = date.getDay();
    let millisecond = date.getMilliseconds();
    let meridiem;
    let mainClock;

    if(hour < 10) {
        hour = '0' + hour;
    } 
    if(minute < 10) {
        minute = '0' + minute;
    } 
    if(second < 10) {
        second = '0' + second;
    } 

    if(millisecond < 10) {
        millisecond = '0' + millisecond;
    }

    else if(millisecond < 100) {
        millisecond = '0' + millisecond;
    }

    for(let i = 0; i < weekdays.length; i++) {
        if(i === weekday) {
            weekdayDisplay.innerHTML = weekdays[i];
        }
    }

    if(clockFormat.checked !== true) {
        if (hour < 12)  {
            meridiem = 'AM';
        }
        else {
            meridiem = 'PM';
        }
    }
    else {
        meridiem = '';
    }
    

    
    if(millisecondsCheckbox.checked == true) {
        mainClock = `${hour}:${minute}:${second}:${millisecond}`;
    }
    else {
        mainClock = `${hour}:${minute}:${second}`;
    }



    
    
    meridiemDisplay.innerHTML = meridiem;
    clockDisplay.innerHTML = mainClock;
}, 1);




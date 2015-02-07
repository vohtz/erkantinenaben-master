var now = new Date();
var year1 = now.getYear(); //outputs as 114
var month = now.getMonth();
var mday = now.getDate(); //month day.. 26, 27
var wday = now.getDay(); //week day... Sunday, Monday ect.
var hours = now.getHours();
var minutes = now.getMinutes();

var tomorrow = new Date();
tomorrow.setDate(now.getDate() + 1);
tomorrow = tomorrow.getDate();

var year = year1 + 1900;

var monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var monthName = monthList[now.getMonth()];

var d0000 = new Date(year, month, mday, 0, 0, 0, 0), // today 0:00:00:000
    d0745 = new Date(year, month, mday, 7, 45, 0, 0), // today 7:45:00:000
    d1245 = new Date(year, month, mday, 12, 45, 0, 0), // today 12:45:00:000
    d1330 = new Date(year, month, mday, 13, 30, 0, 0), // today 13:30:00:000
    d1420 = new Date(year, month, mday, 14, 20, 0, 0), // today 14:20:00:000
    d2400 = new Date(year, month, mday, 24, 0, 0, 0); // today 24:00:00:000

if (wday >= 1 && wday <= 4) { //if between monday and thursday   
    if (now >= d0000 && now <= d0745) { // time between 0 and 7:45
        timer =  mday + ' ' + monthName + ' ' + year + ' 7:45:00';
    }
    if (now >= d1245 && now <= d1330) { // time between 12:45 and 13:30
        timer = mday + ' ' + monthName + ' ' + year + ' 13:30:00';
    }
    if (now >= d1420 && now <= d2400) { // time between 14:20 and 24:00
        timer = tomorrow + ' ' + monthName + ' ' + year + ' 7:45:00';
    }
}
if (wday === 5) { //if weekday is friday
    if (now >= d0000 && now <= d0745) { // time between 0 and 7:45
        timer =  mday + ' ' + monthName + ' ' + year + ' 7:45:00';
    }
    if (now >= d1245 && now <= d2400) { // time between 14:20 and 24:00
        document.getElementById("countdown").innerHTML = "The canteen opens monday at 7.45";
    }
}
if (wday === 0 || wday === 6) { // if sunday or sataday
      document.getElementById("countdown").innerHTML = "The canteen is not open in the weekend";
}

$(document).ready(function () {
    $('#countdown').countdown({ date: timer }, function () {
        location.reload();
    });
});
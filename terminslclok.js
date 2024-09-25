setInterval(showTime, 1000);

// Defining showTime function
function showTime(hour1,min1,sec1) {
    // Getting current time and date

    let hour = hour1;
    let min = min1;
    let sec = sec1;
    am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + am_pm;
    console.log(currentTime);

    // Displaying the time
}

showTime(13,45,20);

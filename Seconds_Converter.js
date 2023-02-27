//1. Write a function named "secondsConverter" which takes two parameter(number,minute or hour) - first parameter being the number
// and second parameter in string will be either in "minute" or "hour" and return the converted secs in the formatted string.

// conversion from hour to secs
// 1 hr = 60 * 60 => 3600 secs
// conversion from minute to secs
// 1 min = 60 => 60 secs

// (5, "hour")=>  90000 secs (5 * 60 * 60)
// (35, "minute") => 2100 secs (35 * 60)

// Formatted string  output
// (5, "hour")=> input
// Output=> "90000 secs"



function secondsConverter(number,minute_or_hour){
    let seconds = 0;
    if (minute_or_hour == "hour") {
        seconds = number * 60 * 60 +" "+"secs";
    }
    else{
        seconds = number * 60 +" "+"secs";
    }
    return seconds;
}
console.log(secondsConverter(2,"minutes"));
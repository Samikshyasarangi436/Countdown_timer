let days = 2; 
let hours = 0; 
let minutes = 0; 
let seconds = 0; 

let totalSeconds =
days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

//temporary second holder
let tempSeconds = totalSeconds;

const convert = (value, inSeconds) => {
    if (value > inSeconds) {
        let x = value % inSeconds;
        tempSeconds = x;
        return (value - x) / inSeconds;
    } else {
        return 0;
    }
};

const setSeconds = (s) => {
    document.querySelector("#seconds").textContent = s + "s";
};

const setMinutes = (m) => {
    document.querySelector("#minutes").textContent = m + "m";
};

const setHours = (h) => {
    document.querySelector("#hours").textContent = h + "h";
};

const setDays = (d) => {
    document.querySelector("#days").textContent = d + "d";
};

// Update the count down every 1 second
var x = setInterval(() => {
//clears countdown when all seconds are counted
if (totalSeconds <= 0) {
     clearInterval(x);
}
setDays(convert(tempSeconds, 24 * 60 * 60));
setHours(convert(tempSeconds, 60 * 60));
setMinutes(convert(tempSeconds, 60));
setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
totalSeconds--;
tempSeconds = totalSeconds;
}, 1000);
    
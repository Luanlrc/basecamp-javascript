var currentnumberwrapper = document.getElementById('contador')
var currentnumber = 0;
var currentnumbermax = 10;

function increment (){
    currentnumber = currentnumber + 1;
    currentnumberwrapper.innerHTML = currentnumber;  
}

function decrement(){
    currentnumber = currentnumber - 1;
    currentnumberwrapper.innerHTML = currentnumber;
}




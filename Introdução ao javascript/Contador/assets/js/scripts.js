var contador = document.getElementById('contador')
var currentnumber = 0;
var teste = 10;
var contad = currentnumber

function increment (){
    currentnumber = currentnumber + 1;
    contador.innerHTML = currentnumber;  
}

function decrement(){
    currentnumber = currentnumber - 1;
    contador.innerHTML = currentnumber;
}

if (teste == contad){
    console.log("voce chegou a 10")
    alert("PArabens voce chegou a 10")
}




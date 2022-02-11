//USANDO THIS
const mercado1 = {
    frutas:10, 
    pessoas:60,
    meias:45,
    dogs:30
};

const mercado2 = {
    frutas:15,
    pessoas:60,
    meias:45,
    dogs:30
}

const array =[1 , 2, 3, 4];
const array2 = [1, 2]

// MERCADO1  PESSOAS

function mapcomThis1 (arr, thisArg) {
    return arr.map(function(item){
        return item * this.pessoas;
    }, thisArg);
}


console.log(mapcomThis1(array, mercado1))

// MERCADO2  FRUTAS


function mapcomThis2 (arr, thisArg) {
    return arr.map(function(item){
        return item * this.frutas;
    }, thisArg);
}


console.log(mapcomThis2(array2, mercado2))

///////////////////////////////////////////////////////////////////////
// SEM USAR O THIS
function semthis (arr){
    return arr.map(function(item){
        return item * 2
    });
}

const nums = [2,4,6,8,10]

console.log(semthis(nums));
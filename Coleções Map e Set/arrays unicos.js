const array = [30,30,40,5,223,2049,3034,5]

function arrayUnico(arr) {

const setArray = new Set(arr);

return [...setArray];

}

console.log(arrayUnico(array));
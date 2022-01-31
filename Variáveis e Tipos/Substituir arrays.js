function substituir(array){
    for (let i = 0; i < array.length; i++){
        if (!array) return -1;
        if (!array.length) return -1;
         if (array [i] === 0){
             console.log("Você ja é zero!")
         }else if(array [i] %2 ===0){
             console.log(`Substituindo ${array[i]} por 0...`);
             array[i] = 0
         }
    }
    return array;
}

let arr = [32,12,1321,21,32,123,1,321,98.55,54,87,8,4,8,]
console.log(substituir(arr));
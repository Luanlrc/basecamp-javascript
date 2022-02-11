const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function somentePares (arr){
    return arr.filter(function callback(item){
        return item % 2 === 0
    })
    }

    somentePares(nums)
///////////////////////////////////////////////////////////////////
const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function somentePares (arr){
    return arr.filter(callback);
    }

    function callback(item){
        return item % 2 === 0
    }

    somentePares(nums)

    // AS DUAS MANEIRAS TRAZEM O MESMO RESULTADO POREM DE MANEIRAS DIFERENTES
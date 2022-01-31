let array = ['string', 0, true, ['array1', 0, 1, 2],['array2'],['array3'],['array4']];
console.log(array);

// • forEach() – itera um array;
// array.forEach(function(item, index){console.log(item, index)});

// • push() – add item no final do array;
// array.push(0);
// console.log(array)

// • pop() – remove item no final do array;
// array.pop();
// console.log(array)

//• shift() – remove item no início do array;
// array.shift();
// console.log(array)

// • unshift() – add item no início do array;
// array.unshift('novo');
// console.log(array)

// • indexOf() – retorna o índice de um valor;
// console.log(array.indexOf(0));

// • splice() – remove ou substitui um item pelo índice;
// array.splice(0, 4)
// console.log(array)

// • slice() – retorna uma parte de um array existente;
// let novoArray = array.slice(0,3)
// console.log(novoArray)

// acessar caracteristicas do objeto
// let object = {string: 'stringtexto', number: 1, boolean: true, array: ["array"], objetoInterno:{objetoInterno: 'objeto Interno'} }
// console.log(object.boolean)


// desestruturar objeto:

// var texto = object.String;
// console.log(texto)

// var {boolean, string, number} = object;
// console.log(boolean, string, number);
 const array = [4,5,56,4,5,4,6,54,654,8,16,1,234,98,]

 function somaNums (arr){
      return arr.reduce(function(prev,current){
          console.log({prev})
          console.log({current})
          return prev + current;
         
      }/*valorinicial é opicional*/);
 }

 console.log(somaNums(array));

/////////////////////////////////////////////////////////////////////
let saldo = 1500;
const array = [saldo,5,56,4,5,4,6,54,654,8,16,1,234,98,]

function somaNums (arr){
     return arr.reduce(function(prev,current){
          console.log({prev})
          console.log({current})
         return prev - current;
         
     }/*valorinicial é opicional*/);
}

console.log(somaNums(array));
///////////////////////////////////////////////////////////////////

const lista = [{
    name: "sabonete",
    preco: 15,
},
{
    name: "cereal",
    preco: 18,

},
{
    name:"leite",
    preco: 45,
}];

const saldoDisponivel = 100;

function resultadoCompra(saldoDisponivel,lista){
    return lista.reduce(function(prev,current){
        
        return prev - current.preco;
    },saldoDisponivel);
}

console.log(resultadoCompra(saldoDisponivel,lista))

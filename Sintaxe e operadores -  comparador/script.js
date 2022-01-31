function comparador(){
const n1 = Number (prompt("Digite o primeiro valor a ser comparado:"))
const n2 = Number (prompt("Digite o segundo valor a ser comparado"))
let result = (n1+n2)

if (!n1 || !n2){
    alert('Digite um valor numérico!')
    comparador();
}

let igual;
    if (n1 === n2){
        igual = (`Os números ${n1} e ${n2} são iguais`)
    }else{
        igual = (`Os números ${n1} e  ${n2} não são iguais`)
    }

let soma = (`Sua soma é ${result}`)


let comparacao;
   if (result < 10){
       comparacao = ("O resultado da soma dos numeros é menor que 10.\n")
   }else if (result == 10){
    comparacao = ("O resultado da soma dos numeros é igual a 10.")
    }else if(result > 10 && result < 20){
       comparacao = ("O resultado da soma dos numeros é maior do que 10 e menor do que 20.")
   }else if(result == 20) {
       comparacao = ("O resultado da soma dos numeros é igual a 20.")
   } else {
       comparacao = ("O resultado da soma dos números é maior que 20.")
   }

    alert (`${igual}\n${soma}\n${comparacao}`);

    function repete(){
    let repet = Number(prompt("Deseja fazer o processo noamente?\n1- Sim\n2 - Não"))
    
    if (!repet){
     alert ('Digite uma opção valida!')
     repete();
    }else{
    
        if (repet == 1){
        comparador()
        }else if(repet == 2){
        alert ('Até logo')
        }else if(repet >2) {
        alert('Digite uma opcão valida!')
        repete();
        }else if(repet <1) {
            alert('Digite uma opcão valida!')
            repete();
        }
        }
    }               
repete();
}
comparador();

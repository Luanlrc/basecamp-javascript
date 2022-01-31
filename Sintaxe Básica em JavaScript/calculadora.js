function calculadora(){
    const operacao = Number (prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7 || operacao < 1){
        alert('Digite uma opção válida!')
        calculadora()
    }else 
  {

    let n1 = Number (prompt('Digite o primeiro numero:'))
    let n2 = Number (prompt('Digite o segundo numero:'))
    let result;
    
    if(!n1 || !n2){
        alert('Erro - parametros invalidos')
        calculadora();
    }else{

        function soma(){
            result = n1 + n2;
            alert(`${n1} + ${n2} = ${result}`)
    }
        function subtracao(){
            result = n1 - n2;
            alert(`${n1} - ${n2} = ${result}`)
    }
        function multiplicacao(){
            result = n1 * n2;
            alert(`${n1} * ${n2} = ${result}`)
    }
        function divisaoreal(){
            result = n1 / n2;
            alert(`${n1} / ${n2} = ${result}`)
    }
        function divisaointeira(){
            result = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${result}`)
    }
        function potenciacao(){
            result = n1 ** n2;
            alert(`${n1} elevado a ${n2} é igual a ${result}`)
    }
 

    // if(operacao == 1){
    // soma();    
    // }else if (operacao == 2){
    // subtracao();
    // }else if(operacao == 3){
    // multiplicacao();
    // }else if(operacao == 4){
    // divisaoreal();
    // }else if(operacao == 5){
    // divisaointeira();
    // }else if(operacao == 6) {
    // potenciacao();
    // }

        switch (operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoreal();
                break;
            case 5:
                divisaointeira();
                break;
            case 6:
                potenciacao();
                break;
        }
    
    novaOprecao();
    function novaOprecao(){
        let opcao = prompt('Deseja realixar outra operação?\n1 - Sim\n2 - Não');
        if (opcao==1){
            calculadora();
        }else if(opcao==2){
            alert('Até logo!')
        }else {
            alert('Digite uma opção válida!')
            novaOprecao();
        }
      }
    }
  }
}

calculadora();



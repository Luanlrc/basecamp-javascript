class ContaBancaria {
    constructor(agencia,numero,tipo){
        this.gencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo){
            return "Operação negada";
        }

       this._saldo = this._saldo - valor; 
       return this._saldo;
        
    }

    depositar (valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero);
        this._tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}



class ContaPoupanca extends ContaBancaria {
    constructor (agencia,numero){
        super(agencia,numero);
        this.tipo = "poupanca";
        
    }
   
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia,numero){
        super(agencia,numero)
        this.tipo = "Universiraria";
        
    }

    saque (valor){
        if (valor > 500){
            return "Operação Negada"
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}


// para testar crie uma novo conta no console do browser
// ex: 
//   ->    const minhaConta = new ContaCorrente (1      ,154     ,tru    )      <-
//                                            (agencia, numero, cartao de credito)
// Assim você pode movimentar a sua conta fazendo depositos, saques até mesmo verificar o saldo.

// deposito ->  " minhaConta.depositar(valor) "
// saque    ->  " minhaConta.sacar(valor) "
// saldo    ->  " minhaConta.saldo(valor) "

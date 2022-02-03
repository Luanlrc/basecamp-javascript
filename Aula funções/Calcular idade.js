const pessoa = {
	nome :"Cleiton",
	idade : 25
}

const idade = {
	idade : 25
}

anos = 17;

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

calculaIdade.call(pessoa)

//
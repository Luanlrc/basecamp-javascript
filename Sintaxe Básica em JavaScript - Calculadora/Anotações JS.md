# JavaScript



#### Declarar função

_function soma(a, b){

console.log (a+b);

return a  + b;

}

#### Adicionar arquivo .js e .css ao html

<link rel="stylesheet" href="assets/css/styles.css"/>

    <script src="assets/js/scripts.js"></script>





### Declaração de variáveis
Existem 3 modos de declarar as variáveis em JavaScript:

var – escopo global e local, pode ter seu valor alterado, se não
tiver um valor inicial será tratada como null;

let – escopo local de bloco, pode ter seu valor alterado, se não
tiver um valor inicial será tratada como null;

const – escopo local de bloco, somente leitura, o valor inicial é
obrigatório e não pode ser alterado.

### Escopo

O escopo em JavaScript define a limitação e visibilidade de um
bloco de código.

Escopo global – quando a variável é declarada fora de qualquer
bloco, sua visibilidade fica disponível em todo o código.

Escopo local – quando a variável é declarada dentro de um bloco,
sua visibilidade pode ficar disponível ou não.

### Regras de Uso de Variáveis
• Iniciar com letras, underscore _ ou cifrão $; Não iniciar com número.
Ex.: var 1nome ❌
var nome || var _nome ✔

• Não usar espaços (use o camelCase ou _);
Ex.: var nome completo ❌
var nomeCompleto || var nome_completo✔

• Não usar palavras reservadas;
Ex.: var function ❌

• Declarar variáveis no topo do bloco de código.



## Operadores aritméticos

São tipos de operadores matemáticos com valor numérico:

• + adição;
• - subtração;
• * multiplicação;
• / divisão real;
• % divisão inteira;
• ** potenciação;



## Operadores relacionais

São tipos de operadores que consultam a relação entre valores:

• > maior que;
• < menor que;
• >= maior ou igual a;
• <= menor ou igual a;

## Operadores lógicos

São tipos de operadores que consultam valores lógicos:

• && - “e” – considera que todos os valores sejam true;
• || - “ou” – considera que qualquer valor seja true;
• ! - “não” – inverte o valor de true para false ou vice-versa;



## Para saber mais

Tipagem –
https://danvitoriano.medium.com/tipagem-dinâmica-no-javascrip
t-e3551a445b38
Variáveis –
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/
Grammar_and_types
Escopo –
https://imasters.com.br/desenvolvimento/escopos-em-javascript
Operadores –
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/

.................................................................................................................

## Vetores ou arrays

Arrays são um tipo de lista, ou matriz de variáveis, onde cada
variável possui um índice. Os valores podem ser de vários tipos.

Imagina que um array é uma caixa com várias outras caixas dentro
e cada uma contendo algum valor;

Ex.: let array = [‘string’, 1, true...]

### Array

O array deve ser declarado entre colchetes “[]”, e podem guardar
qualquer valor dentro de seus índices: inclusive outros arrays.

Ex.: let array = ['string', 1, true, false, [‘array1], [‘array2’]...]

Obs.: O índice só é acessado por um número inteiro, onde 0 é o
primeiro índice. Cada índice é separado por vírgula.



## Manipulando Arrays

Ao ser declarado, o Array traz consigo uma série de métodos para
manipulá-lo.

• forEach() – itera um array;
• push() – add item no final do array;
• pop() – remove item no final do array;
• shift() – remove item no início do array;
• unshift() – add item no início do array;
• indexOf() – retorna o índice de um valor;

• splice() – remove ou substitui um item pelo índice;
• slice() – retorna uma parte de um array existente;

### Objetos

Dados que possuem propriedades e valores que definem suas
características. Deve ser declarado entre chaves “{}”.

Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários
tamanhos e funções(quero cafééé). Pode ser declarada assim:

var xicara = {
cor: ‘azul’,
tamanho: ‘p’,
funcao: tomarCafe()
}

#### acessar caracteristicas do objeto

let object = {String: 'string', number: 1, boolean: true, array: ["array"], objetoInterno:{objetoInterno: 'objeto Interno'} }

console.log(object.boolean)



#### desestruturar objeto

* var texto = object.String;

console.log(texto)

* var {boolean, string, number} = object;

console.log(boolean, string, number);



### Para saber mais

Arrays –
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Refere
nce/Global_Objects/Array
Objetos –
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/
Working_with_Objects
Desestruturação –
https://www.digitalocean.com/community/tutorials/understandi
ng-destructuring-rest-parameters-and-spread-syntax-in-javascript
-pt



## Condicionais

Podemos usar as palavras reservadas “if” para estabelecer uma
condição:
Ex.: var jogador1 = 0;
var jogador2 = 0;

if (jogador1 > 0) {
console.log(‘jogador1 marcou ponto’);
}
// como ler: se o jogador1 tiver valor maior que 0
ele marcou ponto.

else

No caso de a condição não ser atendida podemos usar o “else” :
Ex.: var jogador1 = 1;
var jogador2 = 0;

if (jogador1 > 0) {
console.log(‘jogador1 marcou ponto’);
} else {
console.log(‘ninguem marcou ponto’);
}

### else if

Caso haja mais de uma condição usamos o “else if“.
Ex.: var jogador1 = 1;
var jogador2 = 0;

if (jogador1 > 0) {
console.log(‘jogador1 marcou ponto’);
} else if (jogador2 > 0) {
console.log(‘jogador2 marcou ponto’);
} else {
console.log(‘ninguém marcou ponto);
}

### ninho de if

Podemos também usar o “if” dentro de um outro “if”, chamamos
isso de aninhamento de if’s ou ninho de if’s.
Ex.: if (jogador1 = -1) {
if (jogador1 > 0) {
console.log(‘jogador 1 marcou ponto’);
} else {
console.log(‘ninguém marcou ponto’);
}
} else {
console.log(‘jogador inválido’);
}

### If ternário

Podemos também fazer uma verificação em uma única linha
usando o “if” ternário:

Ex.: [condição] ? [instrução1] : [instrução2];

jogador1 > 0 ? console.log(‘marcou ponto’) : console.log(‘não
marcou ponto”);

// lembre de usar a interrogação “?” e dois pontos “:”

Usando switch/case

O “switch/case” funciona como uma estrutura condicional
também;

Ex.: switch (${expressao}) {
case 1:
${instrucao};
break;
case 2:
${instrução};
break;
}



## função

Funções

São blocos de comandos e instruções para a execução de
determinadas tarefas:

Ex.: function nomeDaFuncao() {
${instrucao};
}

nomeDaFuncao();

#### Como declarar?

Geralmente se utiliza a palavra reservada “function” seguida de
parênteses “()” e chaves “{}”:

Ex.: function funcao() {
console.log(“mensagem”);
}

### funcao();

() – indica que é um objeto do tipo function;
{} – indica que é um bloco de instrução;

### Funções declarativas

São funções que possuem o uso mais comum, deve ser declarada
usando a palavra reservada “function” seguida do nome da
função, parênteses “()” e chaves “{}”:

Ex.: function nomeDaFuncao() {
${instrucao};
}

// o nome da função é obrigatório;

Expressões de Funções

São funções atribuídas à expressões. A nomeação das funções por
expressão é opcional:

Ex. 1: var funcao = function nomeDaFuncao() {

${instrucao};
}

Ex. 2: var funcao = function() {

${instrucao};
};

### Arrow Function

São funções de expressão de sintaxe curta. Arrow functions
sempre serão anônimas, e portanto não podem ser nomeadas.
deve ser declarada com parênteses "()", seguido de "=>" e depois
chaves "{}"

Ex. 1: var funcao = () => {
${instrucao};
}

Criando uma calculadora
Para este exercício vamos utilizar alguns métodos nativos do
JavaScript:

• Number() – para converter valores em números;
• Prompt() – para registrar entradas de usuário;
• Alert() – para mostrar mensagem ao usuário;
• Template Strings – para usar strings junto com expressões;

### Para saber mais

Funções –
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/
Functions
Number –
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Refere
nce/Global_Objects/Number
Window.prompt –
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/pro
mpt



Window.alert –
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
Template String -
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Refere
nce/Template_literals

..................................................................................................................

### anotações

* criar um alerta no navegador:

  **alert("texto")**

  

* Você pode criar um arquivo a partir do nome dele segurando o botão **ctrl** e clicando sobre o nome, o vs code ira perguntar se dejesa criar o arquivo, ex: 

  <script src="script.js"></script>

basta segurar o ctrl e clicar sobre o nome do arquivo que o vs code ira criar o arquivo linkado ao arquivo html que voce ja tem.



* Sempre carregar o arquivo .js ao final do </body>.



* declarar variavel:

**var numero = 1;**



* Como saber o tipo da variavel

var nome = false;

console.log(typerof(nome));

Inspecionando o arquivo no navegador o console mostra o tipo da variavel.



*  mostrar variavel no console

**var num = 1;**

**console.log(num);**



* **var** – escopo global e local, pode ter seu valor alterado, se não
  tiver um valor inicial será tratada como null;

  **let** – escopo local de bloco, pode ter seu valor alterado, se não
  tiver um valor inicial será tratada como null;

  **const** – escopo local de bloco, somente leitura, o valor inicial é
  obrigatório e não pode ser alterado.

O escopo em JavaScript define a limitação e visibilidade de um
bloco de código.

Escopo global – quando a variável é declarada fora de qualquer
bloco, sua visibilidade fica disponível em todo o código.

Escopo local – quando a variável é declarada dentro de um bloco,
sua visibilidade pode ficar disponível ou não.


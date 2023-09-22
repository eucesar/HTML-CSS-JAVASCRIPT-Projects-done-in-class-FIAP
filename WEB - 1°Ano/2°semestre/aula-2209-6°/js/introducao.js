//usando concole
console.log('Olá, sou o console'); //log + enter - funciona sem ponto e virgula -  Case sensitivo
console.log('Usando o console');

//variaveis
//variaveis não tem tipo - n precisa definir o tipo
//tipagem é dinamica feita pelo JS

//tipos de var - usa let - escopo de bloco e função
let nome = 'Cesar';
let idade = 52;
let logado = true;
const dataNascimento = '02/12'; //é algo constante, n muda - meu niver n muda
//null é obj

//exibir no console as var, eu somo as var pela virgula
console.log(nome,idade,logado);
console.log(dataNascimento); 

//propriedade typeof - exibe o tipo atribuido da var
console.log(typeof nome, nome);
console.log(typeof idade, idade);
console.log(typeof(logado)); //pode usar entre parenteses
console.log(typeof dataNascimento);

logado = false;
//erro pois uma constante nao pode ter o seu valo alteado
//valor alterado
//dataNascimento = '02/11';

// Template Literal === template String
//deve iniciar e terminar com sinal de crase para chamar uma variavel, podemos usar ${} isso pode ser aplicado á uma função, método, objeto, etc...

console.log(`Nome = ${nome} idade = ${idade}`); //crase tem q usar para escrever e chamar variavel

    

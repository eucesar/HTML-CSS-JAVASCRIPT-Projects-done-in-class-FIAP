let  primeiroNum = 5;
let  segundoNum = 3;
let resultado = 5 ** 3; //elevado a 3
console.log(typeof resultado);

//se eu apreto enter ele da um espaço
console.log(resultado);
console.log(`${primeiroNum} ** ${segundoNum} = ${primeiroNum**segundoNum}`);


primeiroNum = 10;
segundoNum = '10';

//== - dois iguais vai comparar uma variavel com a outra
//=== - tres iguais compara o tipo da var
console.log((primeiroNum === segundoNum));
console.log(resultado);
console.log(typeof resultado);

console.log((primeiroNum !== segundoNum));
console.log(resultado);

//incremento
primeiroNum = 10;
segundoNum = 20;
console.log(primeiroNum, segundoNum);

//soma 1
primeiroNum++;
segundoNum++;
console.log(primeiroNum, segundoNum);

// operação pós-fixada
primeiroNum--;
segundoNum--;
console.log(primeiroNum, segundoNum);


resultado = primeiroNum++ + segundoNum--;
console.log(resultado);
console.log(primeiroNum, segundoNum);

// operaçãp pre-fixada
primeiroNum--;
segundoNum--;
console.log(primeiroNum, segundoNum);


resultado = ++primeiroNum + ++segundoNum;
console.log(resultado);

resultado+=10;
console.log(resultado);



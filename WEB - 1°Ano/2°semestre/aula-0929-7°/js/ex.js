const numeroSorteado = 7890; //sempre usar let
//sorteia um numero entre 0 e 1
for (let i = 0; i <= 9 ; i++) { //eu sorteio 9 vzs no max, pq já esta sorteando 1 vzs
    const numeroSorteado = parseInt(Math.random()*100); //parseInt
    console.log(numeroSorteado); 
}

console.log(numeroSorteado);

//Array
//declaração de array com metodo construtor
//const arr = new Array();

const pessoas = ['Eu','Tu','Ele','Nós','Vos','Eles']; //Prototype - tipos de array
console.log(pessoas);
console.log(pessoas[3]);
console.log(pessoas.length);
console.table(pessoas); //vai aparecer pessoas em tabela

//inserindo um valor no primeiro indice do array
pessoas.unshift('Eu Mesmo');
console.table(pessoas);

//excluir o primeiro indice - PERDE O VALOR
pessoas.shift();
console.table(pessoas);

// inserir no fim do array - MÉTODO MAIS COMUM
pessoas.push("Eu Mesmo");
console.table(pessoas);

//excluir o ultimo valor indice - perder o valor
pessoas.pop();
console.table(pessoas);

//excluindo a partir do indice 2 -, dois  valores
pessoas.splice(2,2);
console.table(pessoas);

//inserindo a partir do indice 2 - 6 valores / se eu n quero q delete nd, coloco 0
pessoas.splice(2,0,'Ele','Nos', true, 123,'casa','sono');
console.table(pessoas);



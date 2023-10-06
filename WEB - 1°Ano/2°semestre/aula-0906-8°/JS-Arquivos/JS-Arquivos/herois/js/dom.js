// pegar peli id
const getId1 = document.getElementById('herois'); //pegar o primeiro id - body - sendo ID
console.log(getId1);

// selector universal - pega tudo - retorna o primeiro que ele encontra - pega todo o conteudo da 1° tabela - armazena
const getId2 = document.querySelector('#heroi-um');
console.log(getId2);

// pegar pela class
const getClass1 = document.getElementsByClassName('nome'); //selecionar todos os nomes
console.log(getClass1);

const getClass2 = document.querySelectorAll('.nome');  //selecionar todos os nomes
console.log(getClass2);

// pegar pela tag
const getTag1 = document.getElementsByTagName('td'); //itens
console.log(getTag1);

const getTag2 = document.querySelectorAll('tr'); //selecionar todos as tags das divs
console.log(getTag2);

console.log(getClass2);
console.log(getClass2[3]);
console.log(getClass2[3].textContent); //tira as coisas escritas
getClass2[3].textContent = 'Mulher Maravilha'; //altera nome




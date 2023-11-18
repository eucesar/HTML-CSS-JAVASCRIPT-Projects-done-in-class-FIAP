//usando filter() para buscar todos os carros vermelhos
//retorna um novo array com o resultado da lógica

const carrosVermelhos = 
    //comparação no js são '3 ='
    carros.filter(carro => carro.cor.toLowerCase() === 'vermelho')
console.log(carrosVermelhos);

// usando map para dar um desconto de 50% em todos os carros
// retorna um novo array do mesmo tamanho do array original
// ele aplica um função a todos os elementos do array original - modifica

const carrosDesconto = 
    carros.map(carro => carro.preco * .5); //vezes meio
console.log(carrosDesconto);
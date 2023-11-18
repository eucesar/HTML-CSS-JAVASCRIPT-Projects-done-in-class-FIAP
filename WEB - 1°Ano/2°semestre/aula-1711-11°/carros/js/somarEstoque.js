//reduce - retorna apenas 1 valor
function somarEstoque(carros){
    const totalEstoque =
        carros.reduce((acumulador, carro) => acumulador + carro.preco, 0); //numero q ele comeca eh 0
        return totalEstoque;
}
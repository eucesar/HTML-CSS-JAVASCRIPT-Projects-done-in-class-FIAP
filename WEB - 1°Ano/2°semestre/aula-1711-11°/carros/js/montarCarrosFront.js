// recuperando o tbody
const tbody = document.querySelector('.table-car');
console.log(tbody);

// percorrer o array para montar o front
carros.forEach(carro => {
    
    //so igual vai pegar apenas o ultimo
    tbody.innerHTML += `
        <tr>
            <td>${carro.marca}</td>
            <td>${carro.modelo}</td>
            <td>${carro.ano}</td>
            <td>${carro.cor}</td>
            <td>${carro.transmissao}</td>
            <td>${carro.combustivel}</td>
            <td>${formatarMoeda(carro.preco)}</td>
        </tr>    
    `

})


// exibindo o total do estoque
document.querySelector('#total').textContent = 
    formatarMoeda(somarEstoque(carros));
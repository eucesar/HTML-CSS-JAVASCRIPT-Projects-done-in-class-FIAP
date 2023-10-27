// recuperando o tbody
const tbody = document.querySelector('tbody');
console.log(tbody);

// pegando o formulário
const form = document.querySelector('form');
console.log(form);

//  atriubuir um listener ao formulario para o submit criar uma função 
//  e passar o submit para dentro do método
// keyup - mostra a função 
form.addEventListener('submit', (e) => {  

    // o submit será cancelado - e aparece uma frase
    e.preventDefault();
    

    // pegando os campos do formulario e colocar em um array
    const campos = [
        form.querySelector('#usuario'),
        form.querySelector('#email'),
        form.querySelector('#dataCadastro'),
        form.querySelector('#tipoConta')
    ];
    console.log(campos);

    // criar a tr na variavel, js
    const tr = document.createElement('tr');


    // percorrer o array campos e para cada campo criar um td
    // cada campo precisa entrar na função do forEach
    campos.forEach(campo => {
        
        //criando uma nova td
        const td = document.createElement('td');

        // pegar o value do campo e passar para o textContent da td - tudo vai ser armazenado como value
        td.textContent = campo.value;

        // colocar a td dentro da tr - passa pra tr
        tr.appendChild(td);
    })

    // coloca no tbody a linha montada
    tbody.appendChild(tr);

    // limpar o formulario
    form.reset()

    //aparece as info colocadas
    console.log(tr);
});


//  o submit será cancelado
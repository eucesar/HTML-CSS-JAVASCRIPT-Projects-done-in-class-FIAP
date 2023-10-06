//pegar o elemento botão do HTML
const botao = document.querySelector('#calcular');
console.log(botao);

// atribuie um escutador de eventos - toda vez
// que o botão for clicado(evento click) - uma função
// será chamada

botao.addEventListener('click', () => { //function() - () => 

    // buscando os heróis no HTML - todos tem a classe heroi
    const herois = document.querySelectorAll('.heroi'); //tds os trs
    console.log(herois);
    
    // percorreno o array com forEach
    herois.forEach(heroi => {
        const forca = Number(heroi.querySelector('.forca').textContent); //o tesxtoContent tira os textos - uso o Number para tirar o elemento sendo String para Var
        const velocidade = Number(heroi.querySelector('.velocidade').textContent);
        const agilidade = Number(heroi.querySelector('.agilidade').textContent);
        const xpFinal = (forca + velocidade + agilidade)/3;
        heroi.querySelector('.xp').textContent = xpFinal.toFixed(2); //fixed - so deixa 11.11

        if (xpFinal < 80) {
            heroi.classList.add('bg-danger', 'text-light', 'lead') //usando a lsita de classes - css
        }
    });

});
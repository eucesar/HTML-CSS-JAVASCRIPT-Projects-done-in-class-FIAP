const jogadores = [{
        nome: 'De Paul',
        imagem: 'depaul.png',
        ritmo: 80,
        chute: 80,
        passe: 86,
        drible: 84,
        defesa: 77,
        fisico: 85,
        posicao: 'CM',
        xp: 0
    },
    {
        nome: 'Kalulu',
        imagem: 'kalulu.png',
        ritmo: 82,
        chute: 59,
        passe: 78,
        drible: 78,
        defesa: 85,
        fisico: 82,
        posicao: 'CB',
        xp: 0
    },
    {
        nome: 'Bonucci',
        imagem: 'bonucci.png',
        ritmo: 75,
        chute: 63,
        passe: 75,
        drible: 76,
        defesa: 88,
        fisico: 81,
        posicao: 'CB',
        xp: 0
    },
    {
        nome: 'Machado',
        imagem: 'machado.png',
        ritmo: 85,
        chute: 72,
        passe: 77,
        drible: 81,
        defesa: 76,
        fisico: 80,
        posicao: 'LWB',
        xp: 0
    },
    {
        nome: 'Mertens',
        imagem: 'mertens.png',
        ritmo: 82,
        chute: 86,
        passe: 86,
        drible: 88,
        defesa: 47,
        fisico: 55,
        posicao: 'ST',
        xp: 0
    },
    {
        nome: 'Wieffer',
        imagem: 'wieffer.png',
        ritmo: 80,
        chute: 72,
        passe: 81,
        drible: 81,
        defesa: 80,
        fisico: 86,
        posicao: 'CDM',
        xp: 0
    },
    {
        nome: 'Saka',
        imagem: 'saka.png',
        ritmo: 90,
        chute: 85,
        passe: 83,
        drible: 91,
        defesa: 63,
        fisico: 74,
        posicao: 'RW',
        xp: 0
    },
    {
        nome: 'Bruno Fernandes',
        imagem: 'fernandes.png',
        ritmo: 76,
        chute: 89,
        passe: 93,
        drible: 86,
        defesa: 71,
        fisico: 80,
        posicao: 'CAM',
        xp: 0
    },
    {
        nome: 'Openda',
        imagem: 'openda.png',
        ritmo: 94,
        chute: 82,
        passe: 73,
        drible: 83,
        defesa: 36,
        fisico: 81,
        posicao: 'ST',
        xp: 0
    },
    {
        nome: 'Halland',
        imagem: 'halland.png',
        ritmo: 91,
        chute: 94,
        passe: 67,
        drible: 82,
        defesa: 46,
        fisico: 90,
        posicao: 'ST',
        xp: 0
    },
    {
        nome: 'Osimhen',
        imagem: 'osimhen.png',
        ritmo: 92,
        chute: 89,
        passe: 70,
        drible: 86,
        defesa: 44,
        fisico: 85,
        posicao: 'ST',
        xp: 0
    },
    {
        nome: 'Dzeko',
        imagem: 'dzeko.png',
        ritmo: 77,
        chute: 89,
        passe: 75,
        drible: 81,
        defesa: 46,
        fisico: 80,
        posicao: 'ST',
        xp: 0
    },    
];

function getColorClass(valor) {
    if(valor < 50){
        return 'text-danger';
    } 
    else if(valor < 80){
        return 'text-warning';        
    }
    else{
        return 'text-success';        
    }
}


// recuperando a div cards
const cards = document.querySelector('#cards');

// percorrendo o array jogadores, para cada jogador, monta um card
jogadores.forEach(jogador => {


    // chamar a função e passar os valores de cada skill
    const ritmoColor = getColorClass(jogador.ritmo);
    const chuteColor = getColorClass(jogador.chute);
    const passeColor = getColorClass(jogador.passe);
    const dribleColor = getColorClass(jogador.drible);
    const defesaColor = getColorClass(jogador.defesa);
    const fisicoColor = getColorClass(jogador.fisico);

    // calcular o xp
    jogador.xp = (jogador.chute + jogador.defesa + jogador.drible + jogador.fisico + jogador.passe + jogador.ritmo)/6;

    //colocar o card na variável cards
    cards.innerHTML += 
    `
        <div class="col my-2">
            <div class="card border-0">
                <div class="photo">
                    <img src="./images/${jogador.imagem}" class="card-img-top" alt="Imagem do jogador 
                    ${jogador.nome}">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-primary text-center fs-2">${jogador.nome}</h5>
                    <hr>
                    <div class="box-skill">

                        <div class="skill">
                            <p>Ritmo</p>
                            <p class="${ritmoColor}">${jogador.ritmo}</p>
                        </div>
                        
                        <div class="skill">
                            <p>Chute</p>
                            <p class="${chuteColor}">${jogador.chute}</p>
                        </div>

                        <div class="skill">
                            <p>Passe</p>
                            <p class="${passeColor}">${jogador.passe}</p>
                        </div>
                        
                        <div class="skill">
                            <p>Dible</p>
                            <p class="${dribleColor}">${jogador.drible}</p>
                        </div>
                        
                        <div class="skill">
                            <p>Defesa</p>
                            <p class="${defesaColor}">${jogador.defesa}</p>
                        </div>
                        
                        <div class="skill">
                            <p>Físico</p>
                            <p class="${fisicoColor}">${jogador.fisico}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="info"> 
                        <h5>${jogador.xp.toFixed()}</h5>
                        <h5>${jogador.posicao}</h5>
                    </div>
                </div>
            </div>
        </div>
    `
})
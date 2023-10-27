//fução IIFE - função que é automaticamente invocada e executada 
(function () {
  const cnv = document.querySelector('#canvas');
  const ctx = cnv.getContext('2d');

  //movimentos
  let moveLeft = false;
  let moveUp = false;
  let moveRight = false;
  let moveDown = false;

  // arrays
  const quadrados = [];

  // quadrados
  const quadrado1 = new quadrado(20, 10, 50, 70, "#f60", 5);
  quadrados.push(quadrado1);

  const quadrado2 = new quadrado(100, 120, 550, 50, "#000", 0);
  quadrados.push(quadrado2);

  const quadrado3 = new quadrado(400, 350, 500, 50, "#000", 0);
  quadrados.push(quadrado3);


  // pressionar as teclas
  window.addEventListener('keydown', function (e) {
    const nomeKey = e.key;
    console.log(nomeKey);
    switch (nomeKey) {
      case 'ArrowLeft':
        moveLeft = true;
        break;
      case 'ArrowUp':
        moveUp = true;
        break;
      case 'ArrowRight':
        moveRight = true;
        break;
      case 'ArrowDown':
        moveDown = true;
        break;
    }
  });

  //soltar as teclas  
  window.addEventListener('keyup', (e) => {
    const key = e.key;
    switch (key) {
      case 'ArrowLeft':
        moveLeft = false;
        break;
      case 'ArrowUp':
        moveUp = false;
        break;
      case 'ArrowRight':
        moveRight = false;
        break;
      case 'ArrowDown':
        moveDown = false;
        break;
    }
  });

  function moverQuadrados() {
    if (moveLeft && !moveRight) {
      quadrado1.posX -= quadrado1.velocidade;
    }
    if (moveRight && !moveLeft) {
      quadrado1.posX += quadrado1.velocidade;
    }
    if (moveUp && !moveDown) {
      quadrado1.posY -= quadrado1.velocidade;
    }
    if (moveDown && !moveUp) {
      quadrado1.posY += quadrado1.velocidade;
    }

    //fiixar na tela - NÃO SAI DO CANVAS - Precisa pensar em como fazer isso com o obstáculo
    quadrado1.posX = Math.max(0, Math.min(cnv.width - quadrado1.width, quadrado1.posX));
    quadrado1.posY = Math.max(0, Math.min(cnv.height - quadrado1.height, quadrado1.posY));
  }


  function exibirQuadrados() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    for (const i in quadrados) {
      const spr = quadrados[i];
      ctx.fillStyle = spr.color
      ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
    }
  }
  //solicitar uma animação ao browser e chamar a função
  //que é a propria função atualizarTela
  function atualizarTela() {
    window.requestAnimationFrame(atualizarTela, cnv);
    moverQuadrados();
    exibirQuadrados();
  }
  atualizarTela();

}());
//sortear 10 valores entre 0 e 100 armazenar no array
const arraySorteado = [];
for (let i = 0; i <= 9; i++) {
   arraySorteado.push(parseInt(Math.random()*100));
}
document.getElementById('sorteio').textContent = arraySorteado;
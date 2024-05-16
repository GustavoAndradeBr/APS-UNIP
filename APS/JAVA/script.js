const carrossel = document.querySelector('.carrossel');
const imagens = document.querySelectorAll('.carrossel img');
const larguraImagem = imagens[0].clientWidth;
const numeroDeImagens = imagens.length;
const larguraTotal = larguraImagem * numeroDeImagens;

// Define a largura do carrossel para a largura total de totadas imagens 
carrossel.style.width = `${larguraTotal}px`;

let contador = 0;
let temporizador;

const iniciarTemporizador = () => {
    temporizador = setInterval(() => {
        moverCarrossel(); // faz mover para a proxima imagem
    }, 4500); // Reinicia o temporizador a cada 4,5 segundinhos
};

const pararTemporizador = () => {
    clearInterval(temporizador); // Para o temporizador
};

const moverCarrossel = () => {
    contador++;
    if (contador === numeroDeImagens) {
        contador = 0; // Reseta o contador para mostrar a primeira imagem depois d eaparecer a ultima
    }
    const deslocamento = -larguraImagem * contador;
    carrossel.style.transition = 'transform 1s ease'; // Aplica a transição para o movimento suave mais simples 
    carrossel.style.transform = `translateX(${deslocamento}px)`; // Move para a próxima imagem
};

carrossel.addEventListener('transitionend', () => {
    // Quando a transição terminar chegar na ultima imagem ou temporizador acabar
    if (contador === numeroDeImagens - 1) {
        carrossel.style.transition = 'none'; // Remove a transição para voltar à primeira imagem
        contador = 0; // Reseta o contador para a primeira imagem
        carrossel.style.transform = `translateX(0)`; // Volta para a primeira imagem
    }
});

iniciarTemporizador(); // Inicia o temporizador ao carregar a página
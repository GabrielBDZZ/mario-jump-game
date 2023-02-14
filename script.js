const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.modal')
const score = document.querySelector('.score');
const restartButton = document.querySelector('.restart');
let scoreValue;

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

function startGame() {
    document.addEventListener('keydown', jump);
    scoreValue = 0;
    const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 85 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.webp';
        mario.style.width = '50px';
        mario.style.left = '35px';

        clearInterval(loop);

    if (mario.src = './images/game-over.webp') {
        gameOver.style.display = 'flex';
        score.textContent = `Sua pontuação foi: ${scoreValue}`
    }
} 


if (marioPosition >= pipePosition && marioPosition < pipePosition + pipe.offsetWidth) {
    scoreValue++;
    console.log(scoreValue);
}

}, 10)
}

restartButton.addEventListener('click', () => {
    score.textContent = '';
    gameOver.style.display = 'none';
    mario.src="./images/mario.gif";
    mario.removeAttribute('style');
    pipe.removeAttribute('style');
    startGame();
    })

startGame();

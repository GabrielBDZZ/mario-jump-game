const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

let scoreValue;

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
        const gameOver = document.querySelector('.modal')
        gameOver.style.display = 'flex';

        const score = document.querySelector('.score');
        score.textContent = `Sua pontuação foi: ${scoreValue}`
        
        const restartButton = document.querySelector('.restart');

                restartButton.addEventListener('click', () => {
                    score.textContent = '';
                    gameOver.style.display = 'none';
                    mario.src="./images/mario.gif";
                    mario.removeAttribute('style');
                    pipe.removeAttribute('style');
                    startGame();
                    
                })
    }
    } 
    

    if (marioPosition >= pipePosition) {
        scoreValue++;

        console.log(scoreValue);
    }
}, 10)
}
startGame();

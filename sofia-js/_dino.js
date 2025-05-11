let dino = document.querySelector('.dinosaur');
let cactus = document.querySelector('.cactus');
let gameOver = document.querySelector('.game-over');
let restartBtn = document.querySelector('.restart');

function hendlerClick(){
    if(dino.classList != 'jump'){
        dino.classList.add('jump');
    }
    setTimeout(function(){
        dino.classList.remove('jump');
    }, 1000);
}
document.addEventListener('keydown', hendlerClick);

let dinoAlive = setInterval(function(){
    let dinoTop = parseInt(getComputedStyle(dino).top);
    let cactusLeft = parseInt(getComputedStyle(cactus).left);

    if (cactusLeft < 150 && cactusLeft > 60 && dinoTop > 100){
        gameOver.style.display = 'block';

         cactus.style.animation = 'none';
         cactus.style.left = '120px';
    }
}, 10);

restartBtn.addEventListener('click', function(){
    cactus.style.animation = 'cactusMove 1.3s infinite linear';
    gameOver.style.display = 'none';
})
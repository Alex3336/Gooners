const footballPitch = document.querySelector('.football-pitch');
const ball = document.querySelector('.ball');
let mouseX = 0 , mouseY = 0;

document.addEventListener('mousedown', (e) => {
    mouseX = e.pageX - footballPitch.offsetLeft
    mouseY = e.pageY - footballPitch.offsetTop
    if(mouseX - 25 <= 670 && mouseY - 25 <= 166 && mouseX - 24 > 0 && mouseY - 24 > 0){
        ball.style.left = mouseX - 25 + 'px';
        ball.style.top = mouseY - 25 + 'px';
    }
});
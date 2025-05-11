let buttons = document.querySelectorAll('.game-btn');
let comBtn = document.querySelector('.com-btn');
let userScoreTxt = document.querySelector('.user-score');
let comScoreTxt = document.querySelector('.computer-score');
let result = document.querySelector('.result');

let userChoice;
let comChoice;
let randomBtn;
let userScore = parseInt(userScoreTxt.textContent);
let comScore = parseInt(comScoreTxt .textContent);


buttons.forEach(btn =>{
    function hendlerUserClick(){
    userChoice = btn.id;
    console.log(btn);
}
btn.addEventListener('click', function(){
    hendlerUserClick();
    restart ();
} );
});

function hendlerComClick(){
    comChoice = parseInt(Math.random() *buttons.length) ;
    randomBtn = buttons[comChoice];
    console.log(randomBtn);
   if(userChoice === 'stone' && randomBtn.id === 'scissors' || userChoice === 'scissors' && randomBtn.id === 'paper' || userChoice ==='paper' && randomBtn.id === 'stone'){
            userScore++
            userScoreTxt.textContent = userScore; 
            console.log(userScore);
    }
            
    else if(userChoice ==='stone' && randomBtn.id === 'paper' || userChoice ==='scissors' && randomBtn.id === 'stone' || userChoice ==='paper' && randomBtn.id === 'scissors'){
            comScore++
            comScoreTxt.textContent = comScore; 
            console.log(comScore);
        }
        else{
            userScoreTxt.textContent = userScore;
            comScoreTxt.textContent = comScore;
        }
}

function showResult (){
    if( userScore === 3){
        result.textContent = 'Ви виграли раунд!';
        result.style.color = '#039900';
    }
    else if(comScore === 3){
        result.textContent = 'Комп’ютер виграв раунд!';
        result.style.color = '#990000';
    }
};
function restart (){
    if(userScore === 3 || comScore === 3){
        userScore = 0;
        comScore = 0;
        userScoreTxt.textContent = userScore;
        comScoreTxt.textContent = comScore;
        result.textContent ='';
    }
}

comBtn.addEventListener('click', function (){
    hendlerComClick();
    showResult ();
    
});

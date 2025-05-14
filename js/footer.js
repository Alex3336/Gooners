const body = document.querySelector('body');
const modalGratitude = document.querySelector('.js-gratitude-container');
const openGratitude = document.querySelector('.js-open-gratitude');
const closeGratitude = document.querySelector('.js-close-gratitude');
let emailInput = document.querySelector('#footer-form-email');

function hendlerClick () {
    if(emailInput.value){
       modalGratitude.classList.toggle('is-open');
       body.style.overflow = 'hidden';
    }
  else{
      alert('Введіть вашу електронну адресу')
  }
};
openGratitude.addEventListener('click', hendlerClick);
closeGratitude.addEventListener('click', EVENT =>{
  hendlerClick();
  body.style.overflow = 'auto';
} ); 
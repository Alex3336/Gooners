let sliderArr = document.querySelectorAll('.slider-el');
let leftArrow = document.querySelector('#arrow-left');
let rightArrow = document.querySelector('#arrow-right');
let rectangleArr = document.querySelectorAll('.rect-svg');

let elIndex = 0;
let svgIndex = 0;

function hendlerElShow(){
sliderArr.forEach((el, index) => {
        if(index === elIndex){
                el.classList.add('isActive');
        }
        else{
                el.classList.remove('isActive');
        }
});
rectangleArr.forEach((rect, index) => {
        if(index === svgIndex ){
                rect.classList.add('svg-active');
        }
        else{
                rect.classList.remove('svg-active');
        }
});
        if(elIndex === sliderArr.length - 1){
                rightArrow.style.display = 'none';
        }
        else{
                rightArrow.style.display = 'block';
        }
        if(elIndex === 0){
                leftArrow.style.display = 'none';
        }
        else{
                leftArrow.style.display = 'block';
        }
};

leftArrow.addEventListener('click', function(){
        elIndex--;
        svgIndex--;
        hendlerElShow();
}); 
rightArrow.addEventListener('click', function(){
        elIndex++;
        svgIndex++;
        hendlerElShow();
}); 
hendlerElShow();


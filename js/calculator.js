const firstInput = document.querySelector('.first');
const secondInput = document.querySelector('.second');
const resultOutput= document.querySelector('.result');
const resultButton = document.querySelector('.result-button');
const addButton = document.querySelector('.js-add');
const subtractButton = document.querySelector('.js-subtraction');
const multiplyButton = document.querySelector('.js-multiply');
const divideButton = document.querySelector('.js-devide');
let operation = '';
addButton.addEventListener('click', () => operation = calculateForStupidBitch('додати'));
subtractButton.addEventListener('click', () => operation = calculateForStupidBitch('відняти'));
multiplyButton.addEventListener('click', () => operation = calculateForStupidBitch('помножити'));
divideButton.addEventListener('click', () => operation = calculateForStupidBitch('поділити'));
// resultButton.addEventListener('click', () => calculateForStupidBitch(operation)) якщо аргумент з тз не пройде
function calculateForStupidBitch(operation){
    const num1 = parseFloat(firstInput.value);
    const num2 = parseFloat(secondInput.value);
    let result;
    switch(operation){
        case 'додати':
            result = num1 + num2
            break;
        case 'відняти':
            result = num1 - num2
            break;
        case 'помножити':
            result = num1 * num2
            break;
        case 'поділити':
            result = num1 / num2
            break;
        default:
            result = 'Невідома операція';
    }
    if(operation === 'додати' || operation === 'відняти'){
        resultOutput.innerHTML = `${num1} ${operation} ${num2} = ${result}`
    }
    else{
        resultOutput.innerHTML = `${num1} ${operation} на ${num2} = ${result}`
    }
}
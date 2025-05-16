function checkGuessNumber() {
    const userInput = document.querySelector(".guess-number-input").value;
    const output = document.querySelector(".guess-number-result");
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const computerNumber = numbers[randomIndex];
    if (parseInt(userInput) === computerNumber) {
        output.textContent = `Вітаю, ви вгадали число! ${computerNumber}`;
        output.style.color = "#039900"
    } 
    else {
        output.textContent = `Ви програли. Комп’ютер загадав ${computerNumber}`;
        output.style.color = "#990000"
    }
}
const button = document.querySelector(".guess-number-button");
button.addEventListener("click", checkGuessNumber)
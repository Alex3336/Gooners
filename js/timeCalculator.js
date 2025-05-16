function checktimekalck() {
    const minutes = parseInt(document.querySelector(".time-calculator-input").value);
    const output = document.querySelector(".time-calculator-result");
    if (isNaN(minutes) || minutes < 0) {
        output.textContent = "Введіть додатне число хвилин.";
        return;
    }
    const hours = Math.floor(minutes / 60);
    let mins = minutes % 60;
    if (mins < 10) {
        mins = "0" + mins;
    }
    output.textContent = hours + ":" + mins;
}
const button = document.querySelector(".time-calculator-button");
button.addEventListener("click", checktimekalck)
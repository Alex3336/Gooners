function checkLeapYear() {
    const year = parseInt(document.querySelector(".high-year-input").value);
    const output = document.querySelector(".high-year-result");  
    if (isNaN(year)) {
        output.textContent = "Будь ласка, введіть коректний рік.";
        output.style.color = "#990000"
        return;
    }
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        output.textContent = "Ви народилися у високосний рік!"; 
        output.style.color = "#039900"
    } 
    else {
        output.textContent = "Ваш рік народження не є високосним.";
        output.style.color = "#990000"
    }
}
const button = document.querySelector(".high-year-button");
button.addEventListener("click", checkLeapYear)
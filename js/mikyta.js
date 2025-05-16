function checkLeapYear() {
    const year = parseInt(document.getElementById("yearInput").value);
    const output = document.querySelectorAll(".outputtext")[0];  
    if (isNaN(year)) {
      output.textContent = "Будь ласка, введіть коректний рік.";
      return;
    }
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      output.textContent = "Ви народилися у високосний рік!";
      output.style.color = "#039900"
    } else {
      output.textContent = "Ваш рік народження не є високосним.";
      output.style.color = "#990000"
    }
  }
  function checkGuessNumber() {
    const userInput = document.getElementById("guessNinput").value;
    const output = document.querySelector(".outputNtext");
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const computerNumber = numbers[randomIndex];
    if (parseInt(userInput) === computerNumber) {
      output.textContent = `Вітаю, ви вгадали число! ${computerNumber}`;
      output.style.color = "#039900"
    } else {
      output.textContent = `Ви програли. Комп’ютер загадав ${computerNumber}`;
      output.style.color = "#990000"
    }
  }
  function checktimekalck() {
    const minutes = parseInt(document.getElementById("timekalckinput").value);
    const output = document.querySelector(".outputtime");
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
  function checkMaxNumber() {
    const a = +document.querySelectorAll("#maxnuminput")[0].value;
    const b = +document.querySelectorAll("#maxnuminput")[1].value;
    const c = +document.querySelectorAll("#maxnuminput")[2].value;
    const output = document.getElementById("result");
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    output.textContent = "Найбільше число, яке ви ввели — " + max;
  }
  document.querySelectorAll("#maxnuminput").forEach(input => {
    input.addEventListener("input", checkMaxNumber);
  });



document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modalbox");
  const saveBtn = document.querySelector(".modalbotton");
  const closeBtn = document.querySelector(".btnclose");
  const input = document.querySelector("#username");
  const nameDisplay = document.querySelector(".js-userName");
  modal.style.display = "block";
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    nameDisplay.textContent = savedName;
  }

  saveBtn.addEventListener("click", function () {
    const name = input.value.trim();
    if (name) {
      localStorage.setItem("userName", name);
      nameDisplay.textContent = name;
      modal.style.display = "none";
    } else {
     
    }
  });
  closeBtn.addEventListener("click", function addname() {
    modal.style.display = "none";
  });
});

  
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
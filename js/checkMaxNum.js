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
document.querySelectorAll("#maxnuminput").forEach((input) => {
	input.addEventListener("input", checkMaxNumber);
});
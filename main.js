const patientsWeight = document.querySelectorAll(".info-peso");
const patientsHeight = document.querySelectorAll(".info-altura");
export const infoBmi = document.querySelectorAll(".info-bmi");
export const tableRows = document.querySelectorAll(".paciente");

for (let i = 0; i < patientsHeight.length; i++) {
	const peso = parseFloat(patientsWeight[i].textContent);
	const altura = parseFloat(patientsHeight[i].textContent);

	var validInfo = validData(peso, altura);

	if (!validInfo) {
		infoBmi[i].textContent = "Informações inválidas";
		tableRows[i].classList.add("invalid-color");
		validInfo = false;
	}

	if (validInfo) {
		infoBmi[i].textContent = calcBmi(peso, altura);
		validInfo = true;
	}
}

export function calcBmi(peso, altura) {
	const imc = peso / (altura * altura);

	return imc.toFixed(2);
}

export function validData(peso, altura) {
	if (peso >= 1000 || peso <= 0 || altura >= 3 || altura <= 0) {
		return false;
	} else {
		return true;
	}
}

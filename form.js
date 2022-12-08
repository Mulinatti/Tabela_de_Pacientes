import { calcBmi, validData } from "./main.js";

const button = document.querySelector("#adicionar");

button.addEventListener("click", (e) => {
	e.preventDefault();

	const form = document.querySelector("form");

	const paciente = getPacient(form);

	const errorMessage = document.querySelector("#error-message");
	const error = validPatient(paciente);

	if (error.length > 0) {
		errorMessage.innerHTML = error;
		errorMessage.classList.remove("not-show");
		return;
	}
	if (error.length == 0) {
		errorMessage.innerHTML = error;
		errorMessage.classList.add("not-show");
	}

	addPacient(paciente);

	form.reset();
});

export function addPacient(paciente) {
	const pacienteTr = createTr(paciente);
	const table = document.querySelector("tbody");
	table.appendChild(pacienteTr);
}

function createTd(dado, classe) {
	const td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(`info-${classe}`);

	return td;
}

function createTr(paciente) {
	const pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("patient");

	const dadosPacientes = [
		paciente.nome,
		paciente.peso,
		paciente.altura,
		paciente.gordura,
		(paciente.imc = calcBmi(paciente.peso, paciente.altura)),
	];

	const classes = ["nome", "peso", "altura", "gordura", "bmi"];

	for (let i = 0; i < dadosPacientes.length; i++) {
		pacienteTr.appendChild(createTd(dadosPacientes[i], classes[i]));
	}

	return pacienteTr;
}

function getPacient(form) {
	const paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calcBmi(form.peso.value, form.altura.value),
	};

	return paciente;
}

export function validPatient(paciente) {
	let errors = [];

	if (
		!validData(paciente.peso, paciente.altura) ||
		paciente.nome == 0 ||
		paciente.nome == null ||
		paciente.gordura == 0 ||
		paciente.gordura == null
	) {
		errors.push("Informações inválidas");
	}

	return errors;
}

import { addPacient, validPatient } from "./form.js";

const searchButton = document.querySelector("#search-patients");

searchButton.addEventListener("click", () => {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", "pacientes.json", true);

	xhr.addEventListener("load", () => {
		if (xhr.status == 200) {
			const jsonStr = xhr.responseText;
			const patients = JSON.parse(jsonStr);

			patients.forEach((patient, i) => {
				addPacient(patient);
				const infoBmi = document.querySelectorAll(".info-bmi");
				const rows = document.querySelectorAll(".patient");

				const testas = validPatient(patient);
				if (testas.length > 0) {
					infoBmi[i].textContent = "Invalid-info";
					rows[i].classList.add("invalid-color");
				}
			});
		} else alert(xhr.status + " Error");
	});

	xhr.send();
});

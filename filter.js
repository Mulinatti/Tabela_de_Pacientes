const filterInput = document.querySelector("#filtro");

filterInput.addEventListener("input", () => {
	const pacientNames = document.querySelectorAll(".info-nome");

	pacientNames.forEach((names, i) => {
		const trs = document.querySelectorAll(".paciente");

		var regex = new RegExp(filterInput.value, "i");

		var nomes = names.textContent;

		if (!regex.test(nomes)) trs[i].classList.add("none");
		else trs[i].classList.remove("none");
	});
});

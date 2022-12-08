const tbody = document.querySelector("tbody");

tbody.addEventListener("dblclick", (e) => {
	e.target.parentNode.classList.add("fadeOut");

	setTimeout(() => {
		e.target.parentNode.remove();
	}, 500);
});

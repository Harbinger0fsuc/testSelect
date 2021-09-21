@include("functions/documentReady.js");

documentReady(() => {
	@include("components/select.js");

	const selectElements = document.querySelectorAll(".select-custom__wrapper");

	selectElements.forEach((select) => {
		new Select(select);
	});
});

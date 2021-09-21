class Select {
	constructor(element) {
		this.element = element;
		this.customSelect = document.createElement("div");
		this.inputWrapper = document.createElement("div");
		this.inputElement = document.createElement("input");
		this.dropdown = document.createElement("div");
		this.optionsList = document.createElement("ul");
		this.options = getFormattedOptions(element.querySelectorAll("option"));
		setUpCustomSelect(this);
		this.element.style.display = "none";
		this.element.after(this.customSelect);
	}

	get selectedOption() {
		return this.options.find((option) => option.selected);
	}

	selectValue(value) {
		const newSelectedOption = this.options.find((option) => {
			return option.value === value;
		});

		const prevSelectedOption = this.selectedOption;
		prevSelectedOption.selected = false;
		prevSelectedOption.element.selected = false;
		newSelectedOption.selected = true;
		newSelectedOption.element.selected = true;

		this.inputElement.value = newSelectedOption.label;
	}
}

function setUpCustomSelect(select) {
	select.customSelect.classList.add("custom-select");
	select.inputWrapper.classList.add("input-wrapper");
	select.dropdown.classList.add("custom-select-dropdown");
	select.inputElement.setAttribute("type", "text");
	select.inputElement.setAttribute("placeholder", "Select element");
	select.inputElement.classList.add("custom-select-input");
	select.inputWrapper.append(select.inputElement);
	select.customSelect.append(select.inputWrapper);
	select.optionsList.classList.add("custom-select-options");
	select.options.forEach((option) => {
		const optionElement = document.createElement("li");
		optionElement.classList.add("custom-select-option");
		optionElement.classList.toggle("selected", option.selected);
		optionElement.innerText = option.label;
		optionElement.dataset.value = option.value;
		select.optionsList.append(optionElement);
		optionElement.addEventListener("click", () => {
			select.optionsList.querySelector(`[data-value=${select.selectedOption.value}]`).classList.remove("selected");
			select.selectValue(option.value);
			optionElement.classList.add("selected");
			select.inputWrapper.classList.remove("is-focused-within");
			select.dropdown.classList.remove("is-visible");
		});
	});
	select.dropdown.append(select.optionsList);
	select.customSelect.append(select.dropdown);

	select.inputElement.addEventListener("focus", () => {
		select.inputWrapper.classList.add("is-focused-within");
		select.dropdown.classList.add("is-visible");
	});

	document.addEventListener("click", (e) => {
		if (e.target.closest(".custom-select")) return;

		select.inputWrapper.classList.remove("is-focused-within");
		select.dropdown.classList.remove("is-visible");
	});

	select.inputElement.addEventListener("input", (e) => {
		const value = e.currentTarget.value.trim().toUpperCase();
		let isNotFound = false;
		const notFoundElement = document.createElement("div");
		let matchesNumber = 0;

		select.customSelect.querySelectorAll(".custom-select-option").forEach((option, indexOf) => {
			if (option.innerHTML.toUpperCase().indexOf(value) > -1) {
				option.style.display = "block";
				matchesNumber++;
			} else {
				option.style.display = "none";
			}
		});

		if (matchesNumber === 0) {
			select.optionsList.firstChild.style.display = "block";
			select.optionsList.firstChild.style.pointerEvents = "none";
			select.optionsList.firstChild.innerHTML = "Not found";
		} else {
			select.optionsList.firstChild.style.display = "block";
			select.optionsList.firstChild.style.pointerEvents = "all";
			select.optionsList.firstChild.innerHTML = select.options[0].label;
		}
	});
}

function getFormattedOptions(options) {
	return [...options].map((option) => {
		return {
			value: option.value,
			label: option.label,
			selected: option.selected,
			element: option,
		};
	});
}

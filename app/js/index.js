import "./components/mainWrapper"

class ToggleSection {
  constructor(toggleButtonClass, toggleSectionClass) {
    this.toggleButton = document.querySelector(`.${toggleButtonClass}`);
    this.toggleSection = document.querySelector(`.${toggleSectionClass}`);
    this.init();
  }

  init() {
    this.toggleButton.addEventListener("click", () => this.toggle());
  }

  toggle() {
    if (this.toggleSection.classList.contains("visible")) {
      this.toggleSection.classList.remove("visible");
      this.toggleButton.textContent = "Больше параметров";
    } else {
      this.toggleSection.classList.add("visible");
      this.toggleButton.textContent = "Меньше параметров";
    }
  }
}

class AutoResizeTextarea {
  constructor(textareaClassName) {
    this.textarea = document.querySelector(`.${textareaClassName}`);
    this.init();
  }

  init() {
    this.textarea.addEventListener("input", () => this.resize());
    this.resize();
  }

  resize() {
    this.textarea.style.height = "auto";
    this.textarea.style.height = this.textarea.scrollHeight + 2 + "px";
  }
}

class NumberInputArrows {
  constructor(arrowUpClass, arrowDownClass) {
    this.arrowUpElements = document.querySelectorAll(`.${arrowUpClass}`);
    this.arrowDownElements = document.querySelectorAll(`.${arrowDownClass}`);
    this.init();
  }

  init() {
    this.arrowUpElements.forEach((arrow) => {
      arrow.addEventListener("click", (event) => this.handleArrowClick(event, 1));
    });
    this.arrowDownElements.forEach((arrow) => {
      arrow.addEventListener("click", (event) => this.handleArrowClick(event, -1));
    });
  }

  handleArrowClick(event, direction) {
    const input = event.target.parentElement.querySelector(".form-input");
    const step = parseFloat(input.step) || 1;
    const decimalPlaces = this.getDecimalPlaces(step);
    const currentValue = parseFloat(input.value) || 0;
    input.value = (currentValue + direction * step).toFixed(decimalPlaces);
  }

  getDecimalPlaces(step) {
    const strStep = step.toString();
    const decimalIndex = strStep.indexOf(".");
    return decimalIndex === -1 ? 0 : strStep.length - decimalIndex - 1;
  }
}

class FormValidator {
  constructor(formSelector, submitButtonSelector, errorMessageSelector) {
    
    this.form = document.querySelector(`.${formSelector}`);
    this.submitButton = document.querySelector(`.${submitButtonSelector}`);
    this.errorMessage = document.querySelector(`.${errorMessageSelector}`);
    this.init();
  }

  init() {
    this.form.addEventListener("input", () => this.validate());
    this.form.addEventListener("submit", (event) => this.handleSubmit(event));
    this.validate();
  }

  validate() {
    const errors = [];
    const requiredFields = [
      { id: "task-name", name: "Наименование" },
      { id: "formation", name: "Формирование", invalidValue: "option0" },
      { id: "zrk", name: "ЗРК", invalidValue: "option0" }
    ];

    requiredFields.forEach((field) => {
      const fieldElement = document.getElementById(field.id);
      if (fieldElement.value.trim() === "" || fieldElement.value === field.invalidValue) {
        errors.push(field.name);
      }
    });

    this.errorMessage.innerHTML = "";
    if (errors.length > 0) {
      this.submitButton.setAttribute('disabled', 'true');
      const formattedList = errors
        .map((item) => `<span class="underlined">${item}</span>`)
        .join(", ");
      this.errorMessage.innerHTML = "Не заполнены обязательные поля: " + formattedList;
    } else {
      this.submitButton.removeAttribute('disabled');
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {};
    const formElements = this.form.elements;
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.type !== "submit" && element.type !== "button") {
        if (element.type === "checkbox") {
          formData[element.id] = element.checked;
        } else {
          formData[element.id] = element.value;
        }
      }
    }
    const jsonData = JSON.stringify(formData, null, 2);
    console.log(jsonData);
  }
}

document.addEventListener("DOMContentLoaded", () => {

  // new ToggleSection("toggle-button-js", "toggle-section-js");
  // new AutoResizeTextarea("task-name-js");
  // new NumberInputArrows("arrow-up-js", "arrow-down-js");
  // new FormValidator("task-form-js", "form-button-js", "error-message-js");
});



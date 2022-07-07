const form = document.querySelector("[data-form]");
const inputField = document.querySelector("[data-input]");
const submitBtn = document.querySelector("[data-btn]");
const container = document.querySelector(".hero__content-container");
let isFormValid = false;
let isValidationOn = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();

  if (isFormValid) {
    form.submit();
  }
});

const resetElm = (elm) => {
  const formControl = elm.parentElement;
  formControl.classList.remove("invalid");
  container.classList.remove("invalid");
};

const invalidateElm = (elm, message) => {
  const formControl = elm.parentElement;
  formControl.classList.add("invalid");
  container.classList.add("invalid");

  const err = formControl.querySelector(".error-message");
  err.innerText = message;
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  if (!isValidationOn) return;
  isFormValid = true;
  resetElm(inputField);

  if (!isValidEmail(inputField.value)) {
    isFormValid = false;
    invalidateElm(inputField, "Please provide a valid email");
  }
};

inputField.addEventListener("invalid", (e) => {
  e.preventDefault();
});

inputField.addEventListener("input", () => {
  validateInputs();
});

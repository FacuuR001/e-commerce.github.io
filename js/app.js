import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("[data-seleccion]");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
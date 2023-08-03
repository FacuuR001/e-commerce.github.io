export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    
const mensajeError = input.parentElement.querySelector(".input-message-error");

      if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        mensajeError.innerHTML = "";
        mensajeError.style.display = "none";
      } else {
        input.parentElement.classList.add("input-container--invalid");
        mensajeError.innerHTML = mostrarMsgDeError(tipoDeInput, input);
        mensajeError.style.display = "block";
      }
  }


const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

const mensajesDeError = {
    email: {
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    }
}



function mostrarMsgDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

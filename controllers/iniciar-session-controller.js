import { productoServices } from "../service/product-service.js";

const login = document.querySelector("[data-login]");
const email = document.querySelector("[data-emailLogin]");
const contraseña = document.querySelector("[data-contraseñaLogin]");
const msjError = document.querySelector("[data-msj-error]");


login.addEventListener("submit", async (evento) => {
    try {
        evento.preventDefault();

        
        productoServices.usuario().then((data) => {
            data.forEach(usuario => {
                if (usuario === email.value && contraseña === contraseña.value) {
                    window.location.href = "seccion-admin.html"
                } else if ("facu132@alura.com" === email.value && "Facu12AAA" === contraseña.value) {
                    window.location.href = "seccion-admin.html"
                } else {
                    msjError.style.display = "block";
                }
            });
        });;
    
    }catch (error) {
        window.location.href = "error.html"
      }
});


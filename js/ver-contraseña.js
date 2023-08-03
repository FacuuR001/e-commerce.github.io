const verContraseña = document.querySelector("[data-icono-login]")

verContraseña.addEventListener("click", () => {
    const inputPassword = document.querySelector("[data-contraseñalogin]");

    if (inputPassword.type === "password") {
        inputPassword.type = "text"
        verContraseña.classList.remove("fa-lock");
        verContraseña.classList.add("fa-lock-open");
    } else {
        inputPassword.type = "password"
        verContraseña.classList.add("fa-lock");
        verContraseña.classList.remove("fa-lock-open");
    }
});

/*
<i class="fa-solid fa-lock"></i> candado cerrado

<i class="fa-solid fa-lock-open"></i> candado abierto
*/
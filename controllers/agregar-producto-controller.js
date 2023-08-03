import { productoServices } from "../service/product-service.js";

const agregarNuevoProducto = document.querySelector("[data-form]");


agregarNuevoProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

   productoServices.crearProducto(url, categoria, nombre, precio, descripcion)
    .then(() => window.location.href = "../screens/producto-agregado.html")
    .catch(() => window.location.href = "../screens/error.html");
});


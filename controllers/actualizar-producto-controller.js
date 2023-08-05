import { productoServices } from "../service/product-service.js";
const actalizar = document.querySelector("[data-formEditar]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    console.log(url.searchParams.get("id"));

    if (id === null) {
        window.location.href= "error.html";
    }

    const imgURL = document.querySelector("[data-url]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    try {
        const productoEditar = await productoServices.detallaProducto(id);

        if ( productoEditar.imgURL && productoEditar.categoria && productoEditar.nombre && productoEditar.precio && productoEditar.descripcion) {
            imgURL.value = productoEditar.imgURL;
            categoria.value = productoEditar.categoria;
            nombre.value = productoEditar.nombre;
            precio.value = productoEditar.precio;
            descripcion.value = productoEditar.descripcion;
        } else {
            throw new Error();
        }
    } catch(error) {
        alert("Oops! Ocurrio un error :(");
        window.location.href = "../screens/error.html"
    }
}

obtenerInformacion();

actalizar.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imgURL = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productoServices.actualizarProducto(imgURL, categoria, nombre, precio, descripcion, id)
        .then( () => window.location.href = "producto-editado.html")
        .catch(err => console.log(err));
});




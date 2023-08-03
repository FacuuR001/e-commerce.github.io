import { productoServices } from "../service/product-service.js";

const nuevoProducto = (imgURL, categoria, nombre, precio, descripcion, id) => {
    const card = document.createElement("div");
    card.classList.add("contenedor__producto");
    const contenido = `
        <div class="producto__img-contenido">
           <img class="producto__img" src=" ${imgURL} " alt=" ${categoria} ">
        </div>

        <div class="descripciones">
            <h2 class="producto__titulo"> ${nombre} </h2>
            <p class="producto__precio"><strong>US$ ${precio} </strong></p>
            <p class="producto__descripcion"> ${descripcion} </p>
        </div>
        
    `;

    card.innerHTML = contenido;

    return card;
}


const productos = document.querySelector("[data-info]");

const urlParams = new URLSearchParams(window.location.search);
const idProducto = urlParams.get("id");

const obtenerDetallesProducto = async (idProducto) => {
    try {
        if (!idProducto) {
            console.log("ID de producto no proporcionado en la URL");
            return;
        }

        // Llamar al servicio para obtener los detalles del producto por ID
        const data = await productoServices.detallaProducto(idProducto);

        if (data) {
            // Crear el nuevo producto y agregarlo al DOM
            const { imgURL, categoria, nombre, precio, descripcion, id } = data;
            const productoAdmin = nuevoProducto(imgURL, categoria, nombre, precio, descripcion, id);
            const productos = document.querySelector("[data-info]");
            productos.appendChild(productoAdmin);
        } else {
            // Mostrar un mensaje si no se encontró el producto con el ID proporcionado
            console.log("Producto no encontrado");
        }
    } catch (error) {
        console.log("Error al obtener los detalles del producto", error);
    }
}

obtenerDetallesProducto(idProducto);

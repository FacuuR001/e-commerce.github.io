import { productoServices } from "../service/product-service.js";

export const nuevoProducto = (imgURL, categoria, nombre, precio, descripcion, id) => {
    const card = document.createElement("div");
    card.classList.add("cards__contenido");
    const contenido = `
            <img  
                class="cards__img" 
                src="${imgURL}" 
                alt="${categoria}"
            >

            <p class="cards__marca" > ${nombre} </p>
            <p class="cards__precio" ><strong> US$ ${precio}</strong></p>
            <button class="cards__producto">Ver producto</button>
    `;

    card.innerHTML = contenido;
    card.dataset.id = id;
    
    
    const enlacesVerProducto = card.querySelectorAll("button");

    enlacesVerProducto.forEach(enlace => {
    enlace.addEventListener("click", (event) => {
        const idProducto = card.dataset.id;
        // Redireccionar al archivo del detalle del producto y pasar el ID como parámetro en la URL
        window.location.href = `screens/producto.html?id=${idProducto}`;
    });
});

    return card;
}
 

const autos = document.querySelector("[data-autos]");
const motos = document.querySelector("[data-motos]");
const barcos = document.querySelector("[data-barcos]");
const aviones = document.querySelector("[data-aviones]");
const helicopteros = document.querySelector("[data-helicopteros]");

productoServices.listaProductos().then((data) => {
    data.forEach(({ imgURL, categoria, nombre, precio, descripcion, id }) => {

        const productoNuevo = nuevoProducto(imgURL, categoria, nombre, precio, descripcion, id);

        switch (`${categoria}`) {
            case "auto":
                autos.appendChild(productoNuevo);
                break;
            case "moto":
                motos.appendChild(productoNuevo);
                break;
            case "barco":
                barcos.appendChild(productoNuevo);
                break;
            case "avion":
                aviones.appendChild(productoNuevo);
                break;
            case "helicoptero":
                helicopteros.appendChild(productoNuevo);
                break;
        }
    });
}).catch((error) => console.log("erooooooooooor", error));


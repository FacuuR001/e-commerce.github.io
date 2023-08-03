import { productoServices } from "../service/product-service.js";

const nuevoProducto = (imgURL, categoria, nombre, precio, descripcion, id) => {
    const card = document.createElement("div");
    card.classList.add("cards__contenido");
    const contenido = `

            <div class="cards--editar">
                <i class="fa-solid fa-trash cards__iconos cards__iconos--basura" data-borrar></i>
                <i class="fa-solid fa-pencil cards__iconos cards__iconos--editar" data-editar></i>
                <img  class="cards__img cards__img--editar" src="${imgURL}" alt="${categoria}">
            </div>

            <p class="cards__marca" > ${nombre} </p>
            <p class="cards__precio" ><strong> US$ ${precio}</strong></p>
            <button class="cards__producto">Ver producto</button>
    `;

card.innerHTML = contenido;
card.dataset.id = id;

    //Mostrar un producto segun su id
    const enlacesVerProducto = card.querySelectorAll("button");

    enlacesVerProducto.forEach(enlace => {
    enlace.addEventListener("click", (event) => {

        const idProducto = card.dataset.id;

        // Redireccionar al archivo del detalle del producto y pasar el ID como parámetro en la URL
        window.location.href = `producto.html?id=${idProducto}`;
    });
});

// Borrar un producto
const borrarProducto = card.querySelector("[data-borrar]");

borrarProducto.addEventListener("click", (evento) => {
   const modalBorrado = document.querySelector("[data-modalBorrado]");
   
   modalBorrado.style.display = "block";

   const btnModalSi = document.querySelector("[data-modalSi]");
   const btnModalNo = document.querySelector("[data-modalNo]");

    btnModalSi.addEventListener("click", () => {
        if (btnModalSi) {
            const id = card.dataset.id;
            productoServices.eliminarProducto(id)
            .then( () => window.location.href = "producto-eliminado.html")
            .catch( () => window.location.href = "error.html");
        } else {
            alert("no me borre");
        }
    });

    btnModalNo.addEventListener("click", () => {
        modalBorrado.style.display = "none";
    });
});

//Redireccionar evento de editar producto
const editarProducto = card.querySelector("[data-editar]");

editarProducto.addEventListener("click", () => {
    const idProducto = card.dataset.id;
    window.location.href = `editar-producto.html?id=${idProducto}`
});

    return card;
}

const productos = document.querySelector("[data-productos]");

productoServices.seccionAdmin().then(data => {
    data.forEach(({ imgURL, categoria, nombre, precio, descripcion, id }) => {
        const productoAdmin = nuevoProducto(imgURL, categoria, nombre, precio, descripcion, id);
        productos.appendChild(productoAdmin);
    });
}).catch((error) => console.log("eroooooooasdasdasdoooor", error));
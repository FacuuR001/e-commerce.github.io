import { productoServices } from "../service/product-service.js"; 

const inputBusqueda = document.querySelector('[data-search]');
const resultadosBusqueda = document.querySelector('[data-resul]');

inputBusqueda.addEventListener("input", () => {
    
    const searchTerm = inputBusqueda.value.trim().toLowerCase(); // Obtener el término de búsqueda sin espacios en blanco y en minúsculas

    if (searchTerm === '') {
        resultadosBusqueda.innerHTML = ''; // Si el término de búsqueda está vacío, limpiar los resultados
    } else {
        productoServices.buscador()
            .then(data => filtrarYMostrarResultados(data, searchTerm));
    }
});

function filtrarYMostrarResultados(productos, searchTerm) {
    const resultadosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm) ||
        producto.descripcion.toLowerCase().includes(searchTerm)
    );

    mostrarResultados(resultadosFiltrados);
}

function mostrarResultados(productos) {
    resultadosBusqueda.innerHTML = ''; // Limpiar resultados previos
    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add("resultados__busqueda");
        divProducto.innerHTML = `
            <a class="resultados__link" href="screens/producto.html?id=${producto.id}">
                <img class="resultados__img" src="${producto.imgURL}" alt="${producto.nombre}" width="100">
                <h3 class="resultados__titulo">${producto.nombre}</h3>
            </a>
        `;
        resultadosBusqueda.appendChild(divProducto);

        
    });
}



const mostrarLupa = () => {
    const buscadorLupa = document.querySelector("[data-lupa]");
    const btnLogin = document.querySelector("[data-btn-login]");
    const search = document.querySelector("[data-search]");
    let lupaVisible = false;

    if (window.innerWidth <= 767) {
        
        buscadorLupa.addEventListener("click", () => {
            
            lupaVisible = !lupaVisible;
            if (lupaVisible) {
                btnLogin.style.display = "none"
                search.style.display = "block"
            } else {
                btnLogin.style.display = "block";
                search.style.display = "none";
            }
        });
    }
}

mostrarLupa();

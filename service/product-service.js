const listaProductos = async () => fetch("https://backend-eccomerse.vercel.app/producto")
  .then( respuesta =>respuesta.json())
  .catch(() => alert( "No se encontro servidor")); 

const crearProducto = (imgURL, categoria, nombre, precio, descripcion, id) => {
    return fetch("https://backend-eccomerse.vercel.app/producto", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imgURL, categoria, nombre, precio, descripcion, id: uuid.v4() }),
    });
}


const seccionAdmin = () => {
  return fetch("https://backend-eccomerse.vercel.app/producto").then( respuesta =>respuesta.json());
}

const detallaProducto = (id) => {
  return fetch(`https://backend-eccomerse.vercel.app/producto/${id}`).then( (respuesta) => respuesta.json());
}

const eliminarProducto = (id) => {
  return fetch(`https://backend-eccomerse.vercel.app/producto/${id}`, {
    method: "DELETE"
  });
}

const actualizarProducto = (imgURL, categoria, nombre, precio, descripcion, id) => {
  return fetch(`https://backend-eccomerse.vercel.app/producto/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({ imgURL, categoria, nombre, precio, descripcion }),
  })
  .then((respuesta) => respuesta)
  .catch( err => console.log(err));
}

const usuario = async () => {
  return fetch("https://backend-eccomerse.vercel.app/perfil").then(respuesta => respuesta.json());
}





const buscador = () => {
  const inputBusqueda = document.querySelector('[data-search]');
  const terminoBusqueda = inputBusqueda.value.toLowerCase();
  return fetch(`https://backend-eccomerse.vercel.app/producto?q=${terminoBusqueda}`).then(respuesta => respuesta.json());
}

export const productoServices = {
  listaProductos,
  crearProducto,
  seccionAdmin,
  detallaProducto,
  eliminarProducto,
  actualizarProducto,
  usuario,
  buscador
}



const listaProductos = async () => fetch("http://localhost:3000/producto")
  .then( respuesta =>respuesta.json())
  .catch(() => alert( "No se encontro servidor")); 

const crearProducto = (imgURL, categoria, nombre, precio, descripcion, id) => {
    return fetch("http://localhost:3000/producto", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imgURL, categoria, nombre, precio, descripcion, id: uuid.v4() }),
    });
}


const seccionAdmin = () => {
  return fetch("http://localhost:3000/producto").then( respuesta =>respuesta.json());
}

const detallaProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then( (respuesta) => respuesta.json());
}

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE"
  });
}

const actualizarProducto = (imgURL, categoria, nombre, precio, descripcion, id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
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
  return fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());
}





const buscador = () => {
  const inputBusqueda = document.querySelector('[data-search]');
  const terminoBusqueda = inputBusqueda.value.toLowerCase();
  return fetch(`http://localhost:3000/producto?q=${terminoBusqueda}`).then(respuesta => respuesta.json());
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



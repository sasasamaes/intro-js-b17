const ListaProductosTienda = [
  {
    id: 1,
    nombre: 'Suero de Leche',
    precio: 10,
    cantidad: 10,
    imagen: 'https://via.placeholder.com/200',
    descripcion: 'Suero de Leche',
    ml: 100,
  },
  {
    id: 2,
    nombre: 'Suero de Almendra',
    precio: 15,
    cantidad: 5,
    imagen: 'https://via.placeholder.com/200',
    descripcion: 'Suero de Almendra',
    ml: 50,
  },
  {
    id: 3,
    nombre: 'Suero de Coco',
    precio: 20,
    cantidad: 1,
    imagen: 'https://via.placeholder.com/200',
    descripcion: 'Suero de Coco',
    ml: 1000,
  },
  {
    id: 4,
    nombre: 'Gaseosa de Coca Cola',
    precio: 30,
    cantidad: 40,
    imagen: 'https://via.placeholder.com/200',
    descripcion: 'Gaseosa de Coca Cola',
    ml: 3000,
  },
  {
    id: 5,
    nombre: 'Pepsi',
    precio: 25,
    cantidad: 30,
    imagen: 'https://via.placeholder.com/200',
    descripcion: 'Pepsi',
    ml: 1500,
  },
  {
    id: 6,
    nombre: 'Coca Cola',
    precio: 30,
    cantidad: 100,
    imagen: 'https://via.placeholder.com/200',
    descripcion: 'Esto es una coca cola',
    ml: 1500,
  },
]

window.addEventListener('DOMContentLoaded', () => {
  crearHtml()
})

const comprar = (nombre, precio) =>
  alert(`Hola, gracias por comprar el producto ${nombre} por un valor de $ ${precio}`)

const crearHtml = () => {
  const elementoPadre = document.getElementById('listaProductos')
  const productos = ListaProductosTienda

  productos.forEach((producto) => {
    console.log(producto)
    // createElement nos crea un objeto tipo nodeList o un elemento de html
    const elementoHijo = document.createElement('section')
    // Agregamos clases a un elemento
    elementoHijo.classList.add('producto')

    // Escribir en un nodo
    elementoHijo.innerHTML = `
      <img src="https://via.placeholder.com/200" alt="">
      <h2>${producto.nombre}</h2>
      <h3>Precio: <span>$ ${producto.precio}</span></h3>
      <p>Cantidad: <span>${producto.cantidad}</span></p>
      <p>Descripcion: <span>${producto.descripcion}</span></p>
      <p>Ml: <span>${producto.ml}</span></p>
      <button onclick="comprar('${producto.nombre}','${producto.precio}')">Comprar</button>
    `
    elementoPadre.appendChild(elementoHijo)
  })
}

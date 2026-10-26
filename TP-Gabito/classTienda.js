// Capturamos los elementos interactivos del DOM
const abrirBtn = document.getElementById('abrirCarrito');
const cerrarBtn = document.getElementById('cerrarCarrito');
const carritoMenu = document.getElementById('carritoMenu');
const contadorProductos = document.getElementById('contador-productos');
const botonesComprar = document.querySelectorAll('.btn-comprar');

let cantidadArticulos = 0;

// Evento para abrir el carrito lateral
abrirBtn.addEventListener('click', () => {
    carritoMenu.classList.add('activo');
});

// Evento para cerrar el carrito lateral
cerrarBtn.addEventListener('click', () => {
    carritoMenu.classList.remove('activo');
});


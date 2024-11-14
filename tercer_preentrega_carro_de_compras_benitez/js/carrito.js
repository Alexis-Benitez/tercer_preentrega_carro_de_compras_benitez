let carrito = [];

function agregarAlCarrito(id) {
    const producto = obtenerProductoPorId(id);
    if (producto) {
        carrito.push(producto);
        actualizarStorage();
        renderCarrito();
    }
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarStorage();
    renderCarrito();
}

function obtenerTotal() {
    return carrito.reduce((total, prod) => total + prod.precio, 0);
}
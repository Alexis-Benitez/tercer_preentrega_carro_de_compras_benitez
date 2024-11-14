function actualizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarStorage() {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
}

cargarStorage();
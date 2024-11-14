document.getElementById('vaciar-carrito').addEventListener('click', () => {
    carrito = [];
    actualizarStorage();
    renderCarrito();
});
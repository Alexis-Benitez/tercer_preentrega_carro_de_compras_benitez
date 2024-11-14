document.getElementById('lista-carrito').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-eliminar')) {
        const index = event.target.dataset.index;
        eliminarDelCarrito(index);
    }
});
document.getElementById('filtro-precio').addEventListener('input', (event) => {
    const maxPrecio = event.target.value;
    const productosFiltrados = filtrarProductosPorPrecio(maxPrecio);
    renderProductos(productosFiltrados);
});
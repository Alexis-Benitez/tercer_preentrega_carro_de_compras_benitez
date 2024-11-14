function filtrarProductosPorPrecio(maxPrecio) {
    return productos.filter(prod => prod.precio <= maxPrecio);
}

function buscarProductoPorNombre(nombre) {
    return productos.filter(prod => prod.nombre.toLowerCase().includes(nombre.toLowerCase()));
}
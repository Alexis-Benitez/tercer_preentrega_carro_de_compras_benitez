const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 150 },
    { id: 3, nombre: 'Producto 3', precio: 200 }
];

function obtenerProductoPorId(id) {
    return productos.find(prod => prod.id === id);
}

function listarProductos() {
    return productos;
}
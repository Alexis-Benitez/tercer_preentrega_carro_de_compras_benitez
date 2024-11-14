function renderProductos() {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';
    listarProductos().forEach(producto => {
        const prodDiv = document.createElement('div');
        prodDiv.className = 'producto-card';
        prodDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
        `;
        listaProductos.appendChild(prodDiv);
    });
}

function renderCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach((producto, index) => {
        const item = document.createElement('li');
        item.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        listaCarrito.appendChild(item);
    });

    document.getElementById('total').innerText = `Total: $${obtenerTotal()}`;
}

document.addEventListener('DOMContentLoaded', () => {
    renderProductos();
    renderCarrito();
});
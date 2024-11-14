function aplicarAnimacionAgregar(id) {
    const productoElemento = document.querySelector(`#producto-${id}`);
    productoElemento.classList.add('animacion-agregar');
    setTimeout(() => productoElemento.classList.remove('animacion-agregar'), 500);
}
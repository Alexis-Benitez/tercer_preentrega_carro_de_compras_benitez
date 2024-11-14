function formatearMoneda(valor) {
    return `$${valor.toFixed(2)}`;
}

function validarEntrada(input) {
    return !isNaN(input) && input > 0;
}
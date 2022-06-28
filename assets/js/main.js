let cantidad = 0;
let color;
let precioFoto = document.querySelector('#numero-pedido');
let resultadoCantidad = cantidad * Number(precioFoto);
let resultadoColor;

imprimirResultadoCantidad = document.querySelector('#resultado-total');
imprimirResultadoCantidad.innerHTML = precioFoto;
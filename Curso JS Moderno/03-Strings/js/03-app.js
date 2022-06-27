const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD ';

//concatenar de manera tradicional
console.log(producto + precio);
console.log("El producto " + producto +" tiene un precio de " + precio);
console.log("El producto ", producto ," tiene un precio de ", precio);

//ECMASscript 6
console.log(`El producto ${producto} tiene un precio de $${precio}`);

// unir las dos candejas de texto por medio de metodos
console.log(producto.concat(precio));
console.log(producto.concat("en descuento!!"));





const producto = 'Monitor 20 Pulgadas';

// .replace() reemplaza un string por otro especificado
console.log(producto.replace('Pulgadas', '"'))
console.log(producto.replace('Monitor', 'Monitor Curvo '))

// .slice() corta un string desde una posicion especifica

console.log(producto.slice(0, 10))
console.log(producto.slice(8)) // inicia el  8vo caracter  hasta el ultimo
console.log(producto.slice(5, 1)) // no hace nada

// .substring() corta un string desde una posicion especifica igual que slice pero si pones un numero mayor de inicio incia con el numero menor y termina con el mayor

console.log(producto.substring(0, 10))
console.log(producto.substring(5, 1)) // inicia en el 1  y termina en el 5
console.log(producto.charAt(0)); // devuelve el caracter en la posicion 0

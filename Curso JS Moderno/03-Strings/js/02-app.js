const producto = "Monitor 20 Pulgadas";

console.log(producto);

// Conocer la cantidad de letras de la cadena de texto
console.log(producto.length);


// Conocer la posicion de una letra en la cadena de texto

console.log(producto.indexOf("a")); // indexOf te dice la posicion de la  primera coincidencia de la letra dada,
// si la palabra tiene mas de 1 "a" el te retorna la primera "a" que encuentre 

// el metodo includes(), si la palabra contiene la letra dada, retorna true, si no, retorna false
console.log(producto.includes("Pulgadas"));
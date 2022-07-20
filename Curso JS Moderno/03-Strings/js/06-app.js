const producto = 'Monitor 20 Pulgadas';

// .repeater te va a permitir repetir un string

const text = 'Hola'.repeat(5); // repite 5 veces el Hola

console.log(text);
console.log(`${producto} ${text}!!`);



// Split, dividir un string 

const actividad  = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, Caminar, Escuchar musica, Ver series, Jugar videojuegos';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split("#"));

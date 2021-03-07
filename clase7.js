//Declaramos Objeto tipo persona nombre Omar

var daniel = {
 nombre: 'Daniel',
 apellido: 'Federic',
 edad: 21
}

//Declaramos Objeto tipo persona nombre Maria
var sasha = {
   nombre:  'Sasha',
   apellido: 'Chavez',
   edad: 28
}
// // Mandamos llamar la funcion de objeto persona y convertimos a Mayusculas
// function imprimirNombreMayus(persona){
//   // var nombre = persona.nombre;
//   var {nombre} =  persona;
//   console.log(nombre.toUpperCase());
// }

//Imprimimos funcion del Objeto persona Omar & Maria
// imprimirNombreMayus(omar);
// imprimirNombreMayus(maria);
// imprimirNombreMayus({ nombre: 'Pepe'});


function imprimirNombreEdad(persona){
 var {nombre,edad} = persona;

  console.log(' Hola, me llamo ' + nombre + ' y tengo '+ edad + ' años');
}
imprimirNombreEdad(daniel, 21);
imprimirNombreEdad(sasha, 28);

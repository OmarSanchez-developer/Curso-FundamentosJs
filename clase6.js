//Declaramos Objeto tipo persona nombre Omar

var omar = {
 nombre: 'Omar',
 apellido: 'Federic',
 edad: 28
}

//Declaramos Objeto tipo persona nombre Maria
var maria = {
   nombre:  'Maria',
   apellido: 'Chavez',
   edad: 31
}
// Mandamos llamar la funcion de objeto persona y convertimos a Mayusculas
function imprimirNombreMayus({nombre}){
  console.log(nombre.toUpperCase());
}

//Imprimimos funcion del Objeto persona Omar & Maria
imprimirNombreMayus(omar);
imprimirNombreMayus(maria);
// imprimirNombreMayus({ nombre: 'Pepe'});


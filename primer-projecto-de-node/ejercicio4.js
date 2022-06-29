
//Una cadena de texto con tu Nombre
let nombre="roger";

//Otra cadena de texto con tu Apellido
let apellido="castillo";

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre.concat(" ").concat(apellido);

console.log( estudiante); 
//roger castillo


//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let str2=" estudianteMayus";
console.log( str2.toUpperCase() );

// ESTUDIANTEMAYUS 

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let str3="estudianteMinus";

console.log(str3.toLowerCase());
//estudianteminus

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(estudiante.length)
//14

//Una variable que contenga la primera letra del Nombre
console.log(nombre.charAt(0));

//r

// Otra variable que contenga la última letra del Apellido
let Apellidofinal = apellido[apellido.length - 1]
console.log(Apellidofinal)
//o

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudianteSinEspacios = estudiante.replace(" ", "")
console.log(estudianteSinEspacios)
//rogercastillo

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let str4 = estudiante.includes(nombre);
console.log(str4)
//true
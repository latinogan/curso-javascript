// ejercisio2

//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const obj = {
    nombre:"roger",
    apellido:"castillo",
    edad:27 ,
    alturo:1.85,
    esDev:true
}

//Una variable que obtenga tu edad a partir del objeto anterior

const edad2=obj.edad;
//console.log(edad2) resultado 27


//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const lista =[{
    ...obj
},
{ 
nombre:"alejandro",
apellido:"gonzales",
edad:19 ,
alturo:1.95,
esDev:true
},
{ 
    nombre:"brian",
    apellido:"castillo",
    edad:26 ,
    alturo:1.75,
    esDev:false
    }

]
lista.sort((a, b) => b.edad - a.edad);
console.log(lista)
//sets

//la diferencia entre .set y un array es q set no va a repetir un valor dentro de un array
const array= [ 1,2,3,4,5,6 ,7,1];
const miset= new Set(array);
console.log(miset)


// .add para añadir 
miset.add(8);
console.log(miset)

//delete para eliminar un valor
miset.delete(5)
console.log(miset)

// .has  para saber si un array tiene un valor 
console.log(miset.has(4));



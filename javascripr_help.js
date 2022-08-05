/* el .filter  La función filter está definida en Array.prototype, lo que hace que todos los arrays
 cuente con esta función por default. Como parte de su definición, filter acepta como parámetro una función (callback) la cual se ejecutará
  por cada elemento del array y deberá de retornar true para indicar que el elemento actual debe de ser incluido en el nuevo array o false en caso contrario. 
  Veamos un ejemplo:  */

  //ejemplo de .filter
  
  let numArray = [1,2,3,4,5,6,7,8,9,10] 
let filterNumArray = numArray.filter(element => element > 5)

console.log("numArray => ", numArray)
console.log("filterNumArray => ", filterNumArray)

//Output
//numArray =>  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
//filterNumArray =>  [ 6, 7, 8, 9, 10 ]

//ejemplo .filter 2
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

//console.log(onlyNumbers); devuelve solo los numeros dentro del array



/*  .map   Con map(), podemos tomar todos los nombres de la matriz y añadir el sufijo "man" a todos y cada uno de ellos:*/

//ejemplo.map 
let prefijos = ["super", "spider", "ant", "iron"]
let sufijo = "man";

let nombresCompletos = prefijos.map(prefijo => prefijo + sufijo);

console.log(nombresCompletos);

// ["superman", "spiderman", "antman", "ironman"]

let numeros = [10, 20, 30, 40]
let multiplicador = 2;

let productos = numeros.map(numero => numero * multiplicador);

console.log(productos);

// [20, 40, 60, 80]


// ejemplo .forEach

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});
// devuelve lo que hay dentro del array mas el string


//metodo .findIndex()

//We sometimes want to find the location of an element in an array

onst animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal= animals.findIndex(animals => {
  return animals == 'elephant'
})
//console.log(foundAnimal) result 7


// .reduce 

const newNumbers = [1, 3, 5, 7];

const newSum=newNumbers.reduce((accumulator , currentValue) => {
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator +currentValue
} ,10)

console.log(newSum) //26

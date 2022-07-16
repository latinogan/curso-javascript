//En el entrypoint index.js, importa el módulo controller.js

import {suma,multiplicar} from "./controller.js"

//Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
import chalk from 'chalk';



//El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
const sum =suma(1,2);
const sum1=suma(4,5)

const multiplica = multiplicar(1,2);
const multiplica1 = multiplicar(4,5)


console.log(chalk.green(sum))
console.log(sum1)
console.log(multiplica)

//- Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde
console.log(chalk.green(multiplica1))
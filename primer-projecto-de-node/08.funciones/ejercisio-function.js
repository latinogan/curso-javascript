//Una función sin parámetros que devuelva siempre "true"
function devuelveTrue() {
    return true
}

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function Promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

//Una función generadora de índices pares automáticos
function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}
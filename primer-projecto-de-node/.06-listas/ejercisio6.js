//Una variable que contenga la lista de la compra (mínimo 5 elementos)
let compras=["arroz","azucar","frijol","banano","verduras"];
//Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.push("Aceite de Girasol")
//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop()

//console.log(compras)


//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculas=[  {
    titulo:"el conjuro",
    director:"James Wan",
    fecha: new Date ( 2013,06,11 )
},
{ 
titulo:"el conjuro2",
director:"James Wan",
fecha: new Date ( 2016,06,9 )
},
{ 
titulo:"arrastrame al infierno",
director:"james wan",
fecha: new Date ( 2019,08,15 )
}]

let peliculasnuevas = peliculas.filter(peliculas => peliculas.fecha > new Date(2010, 0, 1))



const directores = peliculas.map(pelicula => {
    return pelicula.director
   
})
const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
const directores_titulos = directores.concat(titulos)
const directores_titulos_prop = [...directores, ...titulos]

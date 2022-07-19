class estudiante {
    constructor (nombre){ 
    this.nombre="roger"
    }
    lista=[ "Javascript","HTML","CSS"] 
    obtendatos (){
        return {
            nombre: this.nombre,
            lista: this.lista
        }

    }
}
let estudiante1= new estudiante()
console.log(estudiante1.obtendatos())



// otra forma sin el constructor

/*class estudiante {
    nombre="roger"

    lista=[ "Javascript","HTML","CSS"] 
    obtendatos (){
        return {
            nombre: this.nombre,
            lista: this.lista
        }

    }
}
let estudiante1= new estudiante()
console.log(estudiante1.obtendatos())*/

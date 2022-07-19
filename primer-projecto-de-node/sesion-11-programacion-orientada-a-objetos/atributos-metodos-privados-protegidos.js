class persona {
    // Private -> #
    // Private -> Sólo se puede acceder desde dentro de la clase
    #nombre
    #edad

     // Protected ->  _
    // Protected -> Sólo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true


    constructor(nom,eda){
        this.#nombre=nom
        this.#edad=eda
        
    }
    saludo() {
        console.log(`hola mi nombre es ${this.nombre} tengo ${this.edad } `)
    }
    //function crea por mi para tener accesso a los atributos privado
    obtennombre(){  // Función getter -> Nos permite acceder (de forma controlada) a algún atributo protegido
        return this.#nombre
    }
    obtenEdad () {
        return this.#edad
    }
   getEdad(){ //metodo getter
        return this.#edad
    }
    setEdad (nuevaedad){ //metodo setter
        this.#edad=nuevaedad
    }
}
let persona1= new persona("roger",27)
persona1.saludo()

//privado por consola
console.log(persona1.obtennombre())


//llamar al getter por consola
const edad = persona1.getEdad()
console.log(edad)

// Setter -> métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona1.setEdad(15)
console.log(persona1.getEdad())



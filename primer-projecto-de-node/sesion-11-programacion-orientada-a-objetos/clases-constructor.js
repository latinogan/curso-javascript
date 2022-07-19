class persona {
    constructor(nombre,edad,developer){
        this.nombre=nombre
        this.edad=edad
        this.developer=developer
    }
    saludo() {
        console.log(`hola mi nombre es ${this.nombre} tengo ${this.edad } developer: ${this.developer}`)
    }
}

let persona1=new persona("Roger",26,true);
persona1.saludo()

let persona2= new persona("brian",24,false);
persona2.saludo()

console.log(persona)

//instanceof es igual a typeof pero para un clases(constructor)
console.log(persona1 instanceof persona)
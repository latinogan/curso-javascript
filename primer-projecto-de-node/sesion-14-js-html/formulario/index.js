const form =document.getElementById("formulario");
let boton= document.getElementById("btn")
let p =document.getElementById("demo")
let boton3= document.getElementById("btn3")

form.addEventListener("submit",evento=> {
    console.log(evento)
    evento.preventDefault()

})
boton.onclick=displaydate;
function displaydate() {
    p.innerHTML=Date()
}
boton3.addEventListener("click",hello)
function hello(){
    alert("hollaaaa")
}
/*arrow function funciona igual
boton3.addEventListener("click",hello => {
    alert("hollaaaa")
})
*/
let boton =document.getElementById("btn");

boton.addEventListener("click",hello => {
    alert("Has Oprimido el boton")
})


/*boton.onclick = mifuncion;
function mifuncion(){
    alert("esto es sin arrow")
}*/
$("#btn").click(function() {
    console.log("esto es un mensaje de jQuery por consola")
})

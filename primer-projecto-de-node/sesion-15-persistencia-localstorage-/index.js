//localstorage

//localStorage.setItem("nombre","roger")
//localStorage.setItem("nombre","brian")

// console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona", JSON.stringify({ nombre: "ROGER", edad: 27 }))

// console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "roger")

/* Cookies */

document.cookie = "nombreCookie=GorkaCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)
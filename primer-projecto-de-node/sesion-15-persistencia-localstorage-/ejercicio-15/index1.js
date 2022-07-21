let nombre ="roger";
let apellido ="smith"

 obj = {
    nombre,
    apellido
}

sessionStorage.setItem("obj",JSON.stringify(obj));
localStorage.setItem("obj" ,JSON.stringify(obj))


const date = new Date()
document.cookie = `obj=${JSON.stringify(date)};expires=${new Date(date.getTime() + 2 * 80000)}`
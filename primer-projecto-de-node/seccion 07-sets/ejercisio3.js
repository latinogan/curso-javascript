//  La fecha de hoy
const fecha= new Date();

// La fecha de tu nacimiento
const fecha1=new Date(1993,5,28)
//console.log(fecha1)

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const mayor =fecha > fecha1;
//console.log(mayor)   true

const diafecha1 = fecha1.getDate()
const mesfecha1 = fecha1.getMonth() + 1
const añofecha1 = fecha1.getFullYear();
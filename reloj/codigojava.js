"use strict";
const addZeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora
    document.querySelector(".min").textContent = min
    document.querySelector(".seg").textContent = seg
}
actualizarHora();
setInterval(actualizarHora, 1000);

let fecha = new Date(2070,11,28);

console.log(fecha.getYear()); 
// getyear mmuestra el año menos 1900,funcion: console.log(fecha.getYear()+1900);
console.log(fecha.getFullYear());
console.log(fecha.getMonth());
// getMonth nos devuelve el número de mes en forma de array, entonces, Enero = 0 y Diciembre = 11
console.log(fecha.getDay());
// getDay nos devuelve el número de día en forma de array, entonces, Domingo = 0 y Sábado = 6
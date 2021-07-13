"use strict";
const modal = document.querySelector(".modal-overlay");

const definirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("Idioma","en")
        cerrarModal()
    })
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("Idioma","es")
        cerrarModal()
    })
}

const cerrarModal = ()=>{
    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(()=>modal.style.display = "none",1000);
}

const idioma = localStorage.getItem("Idioma")

if (idioma === null) definirIdioma();
else {
    console.log(`El idioma es: ${idioma}`);
    modal.style.display = "none";
}

// usamos estas funciones ligandolas a las páginas correspondientes
// if (idioma == "es") mostrarEnEspañol();
// else mostrarEnIngles();
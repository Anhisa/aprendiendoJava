let alumnos = [{
    nombre: "Andrés Higuera Sánchez",
    email: "anhisa@hotmail.com",
    materia: "Teoría del cine"
},{
    nombre: "Diana Díaz",
    email: "dd@hotmail.com",
    materia: "comunicación política"
},{
    nombre: "Judith Sánchez",
    email: "jusavi@hotmail.com",
    materia: "interventoría"
},{
    nombre: "Germán Higuera",
    email: "ghiguera@hotmail.com",
    materia: "hidraúlica"
},{
    nombre: "Camilo Gómez",
    email: "cmilo@hotmail.com",
    materia: "microbiologia"
}];

const boton = document.querySelector(".conf-btn");
const contenedor = document.querySelector(".grid-container");



for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;
    contenedor.innerHTML += htmlCode;
}




boton.addEventListener("click", ()=>{
    let confirmar = confirm("Estas seguro que quieres confirmar")
    if (confirmar) {
        document.body.removeChild(boton)
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos) {
        semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
})
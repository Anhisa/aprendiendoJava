const materiasHTML = document.querySelector(".materias")

const materias = [
    {
        nombre: "Fisica 1",
        nota: 5
    },{
        nombre: "Matemáticas Esp.",
        nota: 4.5
    },{
        nombre: "química",
        nota: 2.7
    },{
        nombre: "Calculo 3",
        nota: 4.8
    },{
        nombre: "Electiva 1",
        nota: 4.9
    }
]

const obtenerMateria = (id)=>{
    return new Promise((res,rej)=>{
        materia = materias[id];
        if (materia == undefined) rej("La materia no existe");
        else setTimeout(()=>{res(materia)},Math.random()*2400)
    })
}

const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        console.log(materia[i])
        let newHTMLCode = `<div class="materia">
        <div class="nombre">${materia[i].nombre}</div>
        <div class="nota">${materia[i].nota}</div>
    </div>`;
    materiasHTML.innerHTML += newHTMLCode;
        }
}

devolverMaterias()

const request = new XMLHttpRequest();

console.log(request)
const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click", ()=>{
    let resultado,mensaje;
    try {
        prevRes = parseInt(document.getElementById('nota').value);
        if (isNaN(prevRes)) {
            throw "Gracioso";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(4,2.5,prevRes);
    } catch(e){
        resultado = "¿sos gracioso?"
        mensaje = "He descubierto que intentas hakear el sitio";
    }
    abrirModal(resultado,mensaje,`Tu promedio final fue: <b>${promedio}</b>`);
});

const definirMensaje = (pr)=>{
    let resultado;
    switch(pr) {
    case 0: resultado = "0, Nunca viniste.";
        break;
    case 1: resultado = "1, Muy mal.";
        break;
    case 2: resultado = "2, Falta constancia.";
        break;
    case 3: resultado = "3, Pasaste raspando.";
        break;
    case 4: resultado = "4, bien.";
        break;
    case 5: resultado = "5, Excelente, sigue así.";
        break;
    default: resultado = null;
    }
    return "Tu examen: " + resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = ((nota1 + nota2 + prevRes)/3).toFixed(1);
    if (promedio >= 3) {
        return "<span class='green'>APROBADO</span>";
    }
    return "<span class='red'>REPROBADO</span>";

}

const abrirModal = (res,msg,prm)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    document.querySelector(".promedio").innerHTML = prm;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}


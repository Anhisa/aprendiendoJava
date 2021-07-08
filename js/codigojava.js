const getInfo = async ()=>{
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
        }
    resultado = await axios("JSON/informacion.txt");
    document.querySelector(".info-nombre").innerHTML = capitalize(resultado.data.nombre);
    document.querySelector(".info-pais").innerHTML = capitalize(resultado.data.pais);
    document.querySelector(".info-embajada").innerHTML = capitalize(resultado.data.embajada);
    document.querySelector(".info-funciones").innerHTML = capitalize(resultado.data.funciones);
}

document.getElementById("getInfo").addEventListener("click",getInfo);
const getInfo = async ()=>{
    try{
        function capitalize(word) {
            return word[0].toUpperCase() + word.slice(1);
            }
        resultado = await axios("JSON/informacion.txt");
        document.querySelector(".info-nombre").innerHTML = capitalize(resultado.data.nombre);
        document.querySelector(".info-pais").innerHTML = capitalize(resultado.data.pais);
        document.querySelector(".info-embajada").innerHTML = capitalize(resultado.data.embajada);
        document.querySelector(".info-funciones").innerHTML = capitalize(resultado.data.funciones);
    } catch(e) {
        document.querySelector(".info-nombre").innerHTML = "La API Falló o no hay informacion";
        document.querySelector(".info-pais").innerHTML = "La API Falló o no hay informacion";
        document.querySelector(".info-embajada").innerHTML = "La API Falló o no hay informacion";
        document.querySelector(".info-funciones").innerHTML = "La API Falló o no hay informacion";
    }
}

document.getElementById("getInfo").addEventListener("click",getInfo);
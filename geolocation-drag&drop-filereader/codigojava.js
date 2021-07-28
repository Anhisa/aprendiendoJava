// "use strict";

const geolocation = navigator.geolocation;

const posicion = (pos)=>{
    console.log(pos)
}

const err = ()=> console.log(e);

const options = {
    maximumAge: 0,
    enableHightAccuracy: true
}

geolocation.getCurrentPosition(posicion,err,options);

const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover",e=>{
    e.preventDefault();
    changeStyle(e.target,"#444");
})

zona.addEventListener("dragleave",e=>{
    e.preventDefault();
    changeStyle(e.target,"#999");
})

zona.addEventListener("drop",e=>{
    e.preventDefault();
    changeStyle(e.target,"red");
    cargarVideo(e.dataTransfer.files[0]);
    // cargarImagenes(e.dataTransfer.files[0]);
    // cargarTexto(e.dataTransfer.files[0])
})

const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

const reader = new FileReader();
const nblob = new Blob();

// para cargar una imagen, no funciona 100%

const cargarImagenes = im =>{
    reader.readAsDataURL(nblob,im);
    reader.addEventListener("load",e=>{
        let url = URL.createObjectURL(nblob);
        let img = document.createElement("IMG");
        img.setAttribute("src",url);
        document.querySelector(".resultado").appendChild(img);
    })
}

// para cargar un texto, no funciona 100%

const cargarTexto = tx =>{
    reader.readAsText(tx);
    reader.addEventListener("load",e=>{
        document.querySelector(".resultado").textContent = e.currentTarget.result;
    })
}

// para cargar un video, funciona.

const cargarVideo = vid =>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(vid);
    reader.addEventListener("progress",e=>{
        let carga = Math.round(e.loaded/vid.size*100);
        zona.textContent = `${carga}%`;
        document.querySelector(".barra-de-carga").style.padding = "75px 20px";
        document.querySelector(".barra-de-carga").style.width = `${carga}%`;
    });
    reader.addEventListener("loadend", _e=>{
        changeStyle(zona,"#2e7");
        zona.style.borderStyle = "solid";
        document.querySelector(".barra-de-carga").style.background = "#2e7";
        setTimeout(()=>{
            zona.style.color = "#fff";
            zona.style.animation = "aparecer 1s forwards";
            zona.textContent = "¡Carga Completa!"
        },500);
    });
    reader.addEventListener("load",e=>{
        let video = new Blob([new Uint8Array(e.currentTarget.result)],{type:`video/mp4`});
        let url = URL.createObjectURL(video);
        let img = document.createElement("VIDEO");
        img.setAttribute("src",url);
        document.querySelector(".resultado").appendChild(img);
        img.play();
    })
}



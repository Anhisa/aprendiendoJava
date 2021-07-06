class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if (this.instalada == false) {
            this.instalada = true;
            alert("app instalada exitosamente");
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    desinstalar(){
        if (this.instalada == true && this.instalada == true) {
            this.instalada = false;
            alert("app desinstalada exitosamente");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuación: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}


app1 = new App("16","1 Estrellas","2.300mb");
app2 = new App("6.050","3 Estrellas","560mb");
app3 = new App("19.362","5 Estrellas","1.900mb");
app4 = new App("13.000","4 Estrellas","73mb");
app5 = new App("17.584","5 Estrellas","890mb");
app6 = new App("16.400","3 Estrellas","1Tb");
app7 = new App("12.510","2 Estrellas","90mb");


document.write(`
${app1.appInfo()} <br>
${app2.appInfo()} <br>
${app3.appInfo()} <br>
${app4.appInfo()} <br>
${app5.appInfo()} <br>
${app6.appInfo()} <br>
${app7.appInfo()} <br>
`);

app1.instalar()
app1.abrir()
app1.cerrar()
app1.desinstalar()
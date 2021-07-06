// <<<<<<< HEAD
class Calculadora {
    constructor() {     
    }
sumar(num,num2){
    return parseInt(num) + parseInt(num2);
}
restar(num,num2){
    return parseInt(num) - parseInt(num2);
}
dividir(num,num2){
    return parseInt(num) / parseInt(num2);
}
multiplicar(num,num2){
    return parseInt(num) * parseInt(num2);
}
potenciar(num,exp){
    return Math.pow(num,exp);
}
raizCuadrada(num){
    return Math.sqrt(num);
}
raizCubica(num){
    return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

alert("Vamos a hacer unas operaciones, ¿quieres?");
let operacion = prompt("1: Suma, 2: Resta, 3: División, 4: multiplicación, 5: Potenciación, 6: Raíz Cuadrada, 7: Raiz Cúbica");

if (operacion == 1) {
    let numero1 = prompt("Primer número para sumar");
    let numero2 = prompt("Segundo número para sumar");
    let resultado = calculadora.sumar(numero1,numero2)
    alert(`Tu resultado es: ${resultado}`);
}
if (operacion == 2) {
    let numero1 = prompt("Primer número para restar");
    let numero2 = prompt("Segundo número para restar");
    let resultado = calculadora.restar(numero1,numero2)
    alert(`Tu resultado es: ${resultado}`);
}
if (operacion == 3) {
    let numero1 = prompt("Primer número para Dividir");
    let numero2 = prompt("Segundo número para Dividir");
    let resultado = calculadora.dividir(numero1,numero2)
    alert(`Tu resultado es: ${resultado}`);
}
if (operacion == 4) {
    let numero1 = prompt("Primer número para Multiplicar");
    let numero2 = prompt("Segundo número para Multiplicar");
    let resultado = calculadora.multiplicar(numero1,numero2)
    alert(`Tu resultado es: ${resultado}`);
}
if (operacion == 5) {
    let numero1 = prompt("Número para Potenciar");
    let numero2 = prompt("Exponente");
    let resultado = calculadora.potenciar(numero1,numero2)
    alert(`Tu resultado es: ${resultado}`);
}
if (operacion == 6) {
    let numero1 = prompt("Conocer la raíz cuadrada de:");
    let resultado = calculadora.raizCuadrada(numero1)
    alert(`Tu resultado es: ${resultado}`);
}
if (operacion == 7) {
    let numero1 = prompt("Conocer la raíz cúbica de:");
    let resultado = calculadora.raizCubica(numero1)
    alert(`Tu resultado es: ${resultado}`);
}
else {
    alert("No se ha encontrado la operación.")
// =======
class Calculadora {
    constructor() {     
    }
sumar(num,num2){
    return parseInt(num) + parseInt(num2);
}
restar(num,num2){
    return parseInt(num) - parseInt(num2);
}
dividir(num,num2){
    return parseInt(num) / parseInt(num2);
}
multiplicar(num,num2){
    return parseInt(num) * parseInt(num2);
}
potenciar(num,exp){
    return Math.pow(num,exp);
}
raizCuadrada(num){
    return Math.sqrt(num);
}
raizCubica(num){
    return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

alert("Vamos a hacer unas operaciones, ¿quieres?");
let operacion = prompt("1: Suma, 2: Resta, 3: División, 4: multiplicación, 5: Potenciación, 6: Raíz Cuadrada, 7: Raiz Cúbica");

if (operacion == 1) {
    let numero1 = prompt("Primer número para sumar");
    let numero2 = prompt("Segundo número para sumar");
    let resultado = calculadora.sumar(numero1,numero2)
    alert(`Tu resultado es: ${resultado}`);
}
if (operacion == 2) {
    let numero1 = prompt("Primer número para restar");
    let numero2 = prompt("Segundo número para restar");
    let resultado = calculadora.restar(numero1,numero2)
    alert(`Tu resultado es: ${resultado}`);
}
if (operacion == 3) {
    let numero1 = prompt("Primer número para Dividir");
    let numero2 = prompt("Segundo número para Dividir");
    let resultado = calculadora.dividir(numero1,numero2)
    alert(`Tu resultado es: ${resultado}`);
}
if (operacion == 4) {
    let numero1 = prompt("Primer número para Multiplicar");
    let numero2 = prompt("Segundo número para Multiplicar");
    let resultado = calculadora.multiplicar(numero1,numero2)
    alert(`Tu resultado es: ${resultado}`);
}
if (operacion == 5) {
    let numero1 = prompt("Número para Potenciar");
    let numero2 = prompt("Exponente");
    let resultado = calculadora.potenciar(numero1,numero2)
    alert(`Tu resultado es: ${resultado}`);
}
if (operacion == 6) {
    let numero1 = prompt("Conocer la raíz cuadrada de:");
    let resultado = calculadora.raizCuadrada(numero1)
    alert(`Tu resultado es: ${resultado}`);
}
if (operacion == 7) {
    let numero1 = prompt("Conocer la raíz cúbica de:");
    let resultado = calculadora.raizCubica(numero1)
    alert(`Tu resultado es: ${resultado}`);
}
else {
    alert("No se ha encontrado la operación.")
}
}
// >>>>>>> 38316d9 (primer commit del curso de java soy dalto)
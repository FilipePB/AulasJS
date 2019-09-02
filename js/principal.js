/*
    Armazena o valor do título
*/
var titulo = document.querySelector(".titulo");

/*
    Apresenta a tag 
*/
console.log(titulo);

/*
    Altera o valor tag
*/
console.log(titulo.textContent);

/*
    Altera o valor do título
*/
titulo.textContent = "Aparecida Nutricionista";

/*
    Altera o valor do título
*/

var paciente = document.querySelector("#primeiro-paciente");

console.log(paciente);

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

console.log (imc);

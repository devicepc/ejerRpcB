
import { textoCorrecM, textoIncM } from "./variables.js";

const btnMem1 = document.querySelector("#btnejer1Ram");
// Agregar listener
btnMem1.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res1ram").innerHTML =textoCorrecM;
    document.getElementById("Res1ram").style.color="green";
    document.getElementById("button-containerRAM").style.height="360px";
});

const btnMem2 = document.querySelector("#btnejer2Ram");
// Agregar listener
btnMem2.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res1ram").innerHTML =textoIncM;
    document.getElementById("Res1ram").style.color="red";
    document.getElementById("button-containerRAM").style.height="360px";
});

const btnMem3 = document.querySelector("#btnejer3Ram");
// Agregar listener
btnMem3.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res2ram").innerHTML =textoCorrecM;
    document.getElementById("Res2ram").style.color="green";
    document.getElementById("button-containerRAM").style.height="360px";
});

const btnMem4 = document.querySelector("#btnejer4Ram");
// Agregar listener
btnMem4.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res2ram").innerHTML =textoIncM;
    document.getElementById("Res2ram").style.color="red";
    document.getElementById("button-containerRAM").style.height="360px";
});

const btnMem5 = document.querySelector("#btnejer5Ram");
// Agregar listener
btnMem5.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res3ram").innerHTML =textoCorrecM;
    document.getElementById("Res3ram").style.color="green";
    document.getElementById("button-containerRAM").style.height="360px";
});
const btnMem6 = document.querySelector("#btnejer6Ram");
// Agregar listener
btnMem6.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res3ram").innerHTML =textoIncM;
    document.getElementById("Res3ram").style.color="red";
    document.getElementById("button-containerRAM").style.height="360px";
});

// EJERCICIO 4
const btnMem7 = document.querySelector("#btnejer8Ram");
// Agregar listener
btnMem7.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	document.getElementById("Res4ram").innerHTML =textoCorrecM;
    document.getElementById("Res4ram").style.color="green";
    document.getElementById("button-containerRAM").style.height="360px";
});

let btns = document.querySelectorAll('.inEj4RAM');
for (i of btns) {
  i.addEventListener('click', function() {
	document.getElementById('Res4ram').innerHTML= textoIncM;
	document.getElementById("Res4ram").style.color="red";
  });
}


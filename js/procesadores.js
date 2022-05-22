import { textoCorrecM, textoIncM, questionTiposProc } from "./variables.js";

// ejercicios de partes de procesadores
//  ejercicio 1
const btnPartesprocejer1 = document.getElementById("btnTipProcej1");
btnPartesprocejer1.addEventListener("click", function(evento){
    document.getElementById("ResTipProc1").innerHTML = textoCorrecM;
    document.getElementById("ResTipProc1").style.color= "green";
   
})
const btnPartesprocejer2 = document.getElementById("btnTipProcej2");
btnPartesprocejer2.addEventListener("click", function(evento){
    document.getElementById("ResTipProc1").innerHTML = textoIncM;
    document.getElementById("ResTipProc1").style.color= "red";
   
})
//  ejercicio 2
const btnPartesprocejer3 = document.getElementById("btnTipProcej3");
btnPartesprocejer3.addEventListener("click", function(evento){
    document.getElementById("ResTipProc2").innerHTML = textoCorrecM;
    document.getElementById("ResTipProc2").style.color= "green";
   
})
const btnPartesprocejer4 = document.getElementById("btnTipProcej4");
btnPartesprocejer4.addEventListener("click", function(evento){
    document.getElementById("ResTipProc2").innerHTML = textoIncM;
    document.getElementById("ResTipProc2").style.color= "red";
   
})

 function init() {
    document.getElementById("ej1TiposProc").textContent=questionTiposProc[0];
    document.getElementById("ej2TiposProc").textContent=questionTiposProc[0];
    document.getElementById("ej1PartesProc").textContent = questionTiposProc[1];
}

export{init};



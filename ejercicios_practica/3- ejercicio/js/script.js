"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener todos los botones utilizando su clase o ID
y asignarle el evento de mouse "click"

Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)

*/

const btnClass1= document.querySelectorAll(".btn");
boton1.addEventListener("click", function(){
    boton1.classList.add("fuego");
    boton1.style.background="red";
});

const btnClass2= document.querySelectorAll(".btn");
boton2.addEventListener("click",function(){
    boton2.classList.add("fuego");
    boton2.style.background="orange";
});

const btnClass3= document.querySelectorAll(".btn");
boton3.addEventListener("click", function(){
    boton3.classList.add("fuego");
    boton3.style.background="yellow";
});
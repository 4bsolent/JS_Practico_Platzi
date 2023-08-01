const valorUno = document.querySelector('#valorUno');
const valorDos = document.querySelector('#valorDos');
const btnCalcular = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const formCalcular = document.querySelector('#formCalcular');

// EVENTO EN EL BUTTON

// function btnOnClick() {

    // let resultado = parseInt(valorUno.value) + parseInt(valorDos.value);

    // pResult.textContent = "El resultado del ejercicio es: " + resultado
// } 

// btnCalcular.addEventListener('click', btnOnClick);


// EVENTO EN UN FORMULARIO - BUTTON DE TYPE SUBMIT

function calcularSuma (event) {

    event.preventDefault();
    
    let resultado = parseInt(valorUno.value) + parseInt(valorDos.value);
    pResult.textContent = "El resultado del ejercicio es: " + resultado;
}

formCalcular.addEventListener('submit', calcularSuma)

// En este caso lo que se hace al indicarle el parametro event a la función y utilizar el método .preventDefault dentro de la función es evitar que el formulario recargue automaticamente la pagina despues de darle click al botón el cual se establecio de con un TYPE SUBMT

// Esto tambier se podría hacer si el boton se estableciera en TYPE BUTTON pero se utilizaría otro eventlist no al formulario como tal sino al botón.




const inputUno = document.getElementById('valorUno')
const inputDos = document.getElementById('valorDos')
const btnCalcular = document.getElementById('btnCalcular')
const pResult = document.querySelector('#result')


function onClick() {
    let result = parseInt(inputUno.value) + parseInt(inputDos.value)
    
    pResult.textContent = "El resultado del ejercicio es: " + result;
}


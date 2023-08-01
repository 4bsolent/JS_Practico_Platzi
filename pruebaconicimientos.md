/* Prueba de Conocimiento en JS

VARIABLES Y OPERADORES

1. Responde las siguientes preguntas en la sección de comentarios:

* ¿Qué es una variable y para qué sirve?

RTA: Es un especiado que se reserva en memoria para almacenar un valor o dato (información).

* ¿Cuál es la diferencia entre declarar e inicializar una variable?

RTA: Al momento de declararla estamos indicando que se reservara un espacio en memoria para la variable que estamos nombrando, al momento de inicializarla le estamos indicando a esa variable que valor o que dato tendrá.

* ¿Cuál es la diferencia entre sumar números y concatenar strings?

RTA: Cuando hablamos de suma, se habla de una operación matemática la cual adiciona un número a otro, concatenar strings nos habla de unir o juntar cadenas de texto.

* ¿Cuál operador me permite sumar o concatenar?

RTA: +

2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

* Nombre = “Alejandro” - string
* Apellido = “Aldana Martínez” - string
* Nombre de usuario en Platzi = “Absolent” - string
* Edad = 30 - int
* Correo electrónico = “ba.aldana92@gmail.com” - string
* Mayor de edad = true - bolean
* Dinero ahorrado = 500 - int
* Deudas = 200 - int

3. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.*/

let nombre = "Alejandro"
let apellido = "Aldana"
let usuario = "Absolent"
let edad = 30 
let email = "ba.aldana92@gmail.com"
let mayorEdad = true 
let ahorro = 500
let deuda = 200 

/* Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

* Nombre completo (nombre y apellido)
* Dinero real (dinero ahorrado menos deudas) */

let fullName = nombre + " " + apellido;
let dineroTotal = (ahorro - deuda)

dineroTotal

/* FUNCIONES

1. Responde las siguientes preguntas en la sección de comentarios:

* ¿Qué es una función?

RTA: Una función se puede entender como un proceso que se almacena en la memoria, el cual tiene elementos de entrada como parámetros y/o argumentos, los cuales sirven para ejecutar acciones definidas dentro de la función las cuales arrojaran un resultado final.

* ¿Cuándo me sirve usar una función en mi código?

RTA: Cuando se evidencie que una acción requiere ejecutarse varias veces dentro del software o sistema.

* ¿Cuál es la diferencia entre parámetros y argumentos de una función?

RTA: Un parametro es un valor simbolico que se define en una función, mientras que el argumento es el valor real para que la función ejecute la acción definida. 

2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función: */

const NAME = "Alejandro";
const LASTNAME = "Aldana Martínez";
const COMPLATENAME = NAME + " " + LASTNAME;
const NICKNAME = "Absolent";


// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function printInfo (complatename, nickname) {
    console.log(`Mi nombre es ${complatename}, pero prefiero que me digas ${nickname}`)
}

printInfo(COMPLATENAME, NICKNAME);

/* CONDICIONALES 

1. Responde las siguientes preguntas en la sección de comentarios:

* ¿Qué es un condicional?

RTA: Un condicional es una regla que se define la cual da como resultado true o false.

* ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

if else

else if

switch 

Operador ternario condicion ? true (acción) : false (acción)

* ¿Puedo combinar funciones y condicionales?

RTA: Si

2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if: */

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("Registrate y accede a cualquiera de nuestras suscripciones");
}

// 3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} 

if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} 

if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Solución Platzi

function encontrarTipoSuscripcion (suscripcion) {

    if (suscripcion === "Free") {
        console.log("Solo puedes tomar los cursos gratis");

        return;
    } 
    
    if (suscripcion === "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

        return;
    } 
    
    if (suscripcion === "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

        return;
    }
    
    if (suscripcion === "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

        return;
    }
    
    console.warn("Ese tipo de suscripción no existe!!")
}

// Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

const tiposDeSuscripcion = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año", 
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

function bonusConseguirTipoSuscripcion(suscripcion) {
    
    if (tiposDeSuscripcion[suscripcion]) {
        console.log(tiposDeSuscripcion[suscripcion]);
        return;
    }

    console.warn("Ese tipo de suscripción no existe!!")

}

/* CICLOS

1. Responde las siguientes preguntas en la sección de comentarios:

* ¿Qué es un ciclo?

RTA: Una acción que se repite x cantidad de veces.

* ¿Qué tipos de ciclos existen en JavaScript?

RTA: for , for of, while

* ¿Qué es un ciclo infinito y por qué es un problema?

RTA: Una acción que nunca termina de ejecutarse, esto esta consumiendo permanentemente los recursos disponibles del ordenador.

* ¿Puedo mezclar ciclos y condicionales?

RTA: Si 

2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while: */

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let contador1 = 0;

while (contador1 < 5) {
    console.log("El valor de i es: " + contador1);
    contador1 ++
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let contador2 = 10;

while (contador2 >= 2) {
    console.log("El valor de i es: " + contador2);
    contador2--
}

// 3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

var respuesta = prompt("Cual es el resultado de 2 + 2")

if (respuesta == 4) {
    alert("Respuesta Correcta!")
} else {
    while (!(respuesta == 4)) {
        alert("Respuesta incorrecta, vuelve a intentarlo")
        var respuesta = prompt("Cual es el resultado de 2 + 2")
    }
    if (respuesta == 4) {
        alert("En está ocasión la respuesta es correcta!!")
    }
}

/* LISTAS - ARRAYS - OBJETOS

1. Responde las siguientes preguntas en la sección de comentarios:

* ¿Qué es un array?

RTA: Es un tipo de dato que permite agrupar elementos dentro, estos elementos pueden ser de diferentes tipos.

* ¿Qué es un objeto?

RTA: Un objeto es la abstracción de algo en el mundo real a el código, los cuales contienen atributos y métodoso.

* ¿Cuándo es mejor usar objetos o arrays?

RTA: Dpendiendo el caso, si hablamos que los elementos solo contienen un dato se recomienda unsar arrays, sin embargo, si los elementos contienen varios datos en esa ocasión se recomienda usar un objeto.

* ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

RTA: Si 

2. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. */

let myArray1 = ["Alejandro", "Blanca", "Daniela", "Julian", "Juliana"]

let myArray2 = [1,2,3,4,5,6]

function printFirstElement (array) {
    console.log(array[0])
}

// 3. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function printAllElements(array) {
    array.forEach(element => {
        console.log(element)
    });
}

// 4. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

var myObject = {
    name: "Alejandro",
    lastname: "Aldana",
    age: 30,
    height: 1.73
}

function printDetailsObject(object) {
    console.log(object.name, object.lastname, object.age, object.height)
}

function printDetailsObject2(obj) {
    let arr = Object.values(obj)
    arr.forEach(element => {
        console.log(element)
    });
}


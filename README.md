# JS_Practico_Platzi
Curso practico de JavaScript - Platzi (Profesor: Juan David Castro)

Lo primero que se debe tener en cuenta es que hay varias forma de utilizar JavaScript (FrondEnd - BackEnd), la forma de ejecutar JS es tener un entorno de desarrollo, dichos entornos pueden ser el navegador web, node.js (entorno de ejecución de JS para el BackEnd). 

¿Como Conectar JavaScript con HTML? 

Por buenas practicas se recomienda usar archivos independientes de JavaScript a los de HTML, si bien pueden coexistir los dos en el mismo documento se recomienda importarlos utilizando la etiqueta <script></script>, dentro de esta irá el atributo SRC=”” el cual contendrá la ruta de ubicación del archivo JavaScript, por ejemplo: 

<script src=“./ruta_de_ubicación_archivo_javascript”></script>

Leyendo HTML desde JavaScript

JavaScript cuenta con métodos que permiten identificar, leer y seleccionar elementos (etiquetas) HTML, esto se puede hacer gracias a la manipulación del DOM. 

Escribiendo HTML desde JavaScript

Así como podemos identificar, leer y seleccionar elementos HTML del DOM, también podemos cambiar su conteniendo de texto utilizando innerHTML, innerText y textContent.

Leer y Modificando Atributos HTML desde JavaScript

Para leer y modificar los atributos de los elementos HTML se utilizan dos métodos los cuales son: .getAttribute el cual nos permite leer el atributo que estemos especificando en un respectivo elemento, y tenemos setAttribute el cual nos permite cambiar el valor de una propiedad de un elemento y un atributo previamente seleccionados.

Agregar y Remover Clases desde JavaScript

Si bien, se podrían utilizar aquellos métodos como getAttribute y setAttribute estos no serían la mejor opción al momento de hablar de clases y laque JS ofrece métodos específicos para poder trabajar con clases entre ellos encontramos:

parentElement.classList.add(‘añadirClase’):
parentElement.classList.remove(‘claseARemover’):
parentElement.classList.toggle(‘nombreDeLaClase’):
parentElement.classList.contains(‘nombreDeLaClase’):

Modificar Valores en los Atributos desde JavaScript

Existen algunos elementos de HTML que permiten cambiar directamente su valor sin necesidad de recurrir a métodos en JS, por ejemplo los elementos input, a los cuales se les puede asignar el valor del elemento de la siguiente forma:

Input.value = “Este es el nuevo valor del input” // No se escribe dentro de un paréntesis ya que se asigna directamente el valor.

Escuchar Eventos en JavaScript

Eventos en Atributos

Una de las formas de “escuchar” eventos en JavaScript es a través de atributos que existen para ciertos elementos (etiquetas) de HTML, por ejemplo:

Eventos de <body> y <frameset>

* onload: Se produce al cargarse el contenido de la pagina web.
* onunload: Se lanza al momento de cargar otro documento o pagina web.

Eventos de <form> y sus componentes

* onblur: Cuando un elemento pierde el foco.
* onchange: Al modificar un elemento.
* onfocus: Cuando un elemento contiene el foco.
* onreset: Al resetear un formulario.
* onselect: Al seleccionar un elemento.
* onsubmit: Al enviar un formulario.

Eventos de <img>

* onabort: Se produce al interrumpirse la carga de una imagen.

Eventos de teclado

* onkeydown: Cuando se presiona una tecla.
* onkeypress: Al pulsar una tecla correspondiente a un carácter.
* onkeyup: Cuando se levanta una tecla tras pulsarla.

Eventos del ratón 

* onclick: Al hacer click en un elemento.
* ondblclick: Cuando se hace doble click en un elemento.
* onmousedown: Al pulsar un botón del ratón.
* onmousemove: Al mover el ratón dentro del área que ocupa un elemento.
* onmouseput: Al mover el ratón fuera del área de un elemento.
* onmouseover: Al mover el ratón en el área de un elemento.
* onmouseup: Cuando se levanta el botón del ratón después de haberse presionado en un elemento.

Nota: Dentro de los atributos de eventos definidos en los elementos HTML usualmente se llaman y ejecutar funciones previamente establecidas.

EventListener

Es la forma mas utilizada debido a que deja un HTML mucho mas limpio, ya que divide el código HTML del JS. Al utilizar esta forma se utiliza el método addEventListener(‘evento’, función) el cual recibe dos parámetros, uno de ellos es el evento en si y el otro parámetro es la función que ejecutará la acción que se requiera.ΩΩΩ

// lEYENDO HTML DESDE JAVASCRIPT

const h1 = document.querySelector('h1');
const pClass = document.querySelector('div .parrafo');
const pId = document.getElementById('parrafoid');
const input = document.querySelector('div #inputID')
const div = document.querySelector('div');

// Imprimir en Consola solo la etiqueta

console.log(h1)

// Imprimir en Consola - Se evidencian todos las propiedades de los elementos HTML

console.log({
    h1,
    pClass,
    pId,
    input,
})

// ESCRIBEINDO HTML DESDE JAVASCRIPT

h1.textContent = "Modificando el Título Desde JavaScript Utilizando textContent"

pClass.innerHTML = "Cambiando el texto del parrafo con Clase definida usando <b>JavaScrip Combinandolo con HTML Utilizando innerHTML</b>" // Este tipo de código se puede insertar el cual puede interpretar tambien JavaScrip y este puede contener código malicioso o XSS

pId.innerText = "Cambiando el texto del parrafo con ID definido usando <p>JavaScript Combinandolo con HTML Utilizando innerText</b>" // En este caso no se puede insertar código malicioso ya que todo se interpreta como texto.

// LEYENDO ATRIBUTOS HTML DESDE JAVASCRIPT

console.log(pClass.getAttribute('class')) // En este caso se leería el atributo class del elemento que estamos especificando.

// MODIFICANDO ATRIBUTOS HTML DESDE JAVASCRIPT

pId.setAttribute('class','cambioClaseInicial') // En este caso se modifica el atributo class del elemento que estamos especificando.

// AÑADIR Y REMOVER CLASES EN ELEMENTOS HTML DESDE JAVASCRIPT

input.classList.add ('añadiendoUnaClase', 'añadiendoUnaSegundaClase') // En este caso se añade dos clases al elemento que estamos especificando

div.classList.remove ('quitarClaseDesdeJS')

// div.classList.toggle();
// div.classList.contains();

// MODIFICANDO VALORES EN LOS ATRIBUTOS

input.value = "Modificando el VALUE desde JS"

// EJEMPLO DE CREACIÓN DE ELEMENTO E INSERCIÓN EN EL DOCUMENTO

const img = document.createElement('img')

console.log(img)

img.setAttribute('src', 'https://th.bing.com/th/id/R.d744b77f08792957268788ce1b9d5591?rik=3N%2fZ%2f%2bOFgstPOg&riu=http%3a%2f%2ftusimagenesde.com%2fwp-content%2fuploads%2f2017%2f03%2fimagenes-chidas-55-1.jpg&ehk=6cn%2bHWiHBL8Y9UooAPhsXRxxL9%2baviX8%2bwgC5xDZPDE%3d&risl=&pid=ImgRaw&r=0')

div.append(img)


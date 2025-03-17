<h1>Challenge: Amigo Secreto </h1>
Este proyecto es un desafío diseñado para fortalecer las habilidades en lógica de programación. Este proyecto es una aplicación web simple que permite a los usuarios ingresar nombres y luego sortear un amigo secreto al azar

<h2>Descripción del proyecto</h2>
La aplicación cuenta con las siguientes funcionalidades:

- **Agregar nombres a la lista**: Permite al usuario ingresar un nombre a través de un campo de entrada. Si el campo está vacío, se muestra una alerta solicitando ingresar un nombre.
- **Visualizar la lista de nombres**: Cada nombre agregado se muestra en una lista actualizada dinámicamente en la página.
- **Realizar el sorteo del amigo secreto**: Al hacer clic en el botón correspondiente, se selecciona aleatoriamente un nombre de la lista y se muestra como el amigo secreto sorteado.

<h2>Funcionalidades principales</h2>

- **Validación de entrada:**
Antes de agregar un nombre, se verifica que el campo de entrada no esté vacío.
- **Actualización dinámica de la lista:**
Cada nombre ingresado se almacena en un array y se muestra en una lista HTML.
- **Sorteo aleatorio:**
Se utiliza Math.random() para seleccionar un índice aleatorio del array, determinando así el amigo secreto.

<h2>Estructura del código</h2>
El código se organiza de la siguiente manera: <br></br>

1. **Variables y elementos del DOM:***
- Se obtienen referencias a los elementos HTML, tales como el campo de entrada, la lista de nombres y el área de resultado mediante `document.getElementById`.

2. **Función `agregarAmigo()`:**
- Valida que el campo de entrada no esté vacío.
- Agrega el nombre ingresado al array `names`.
- Limpia el campo de entrada.
- Llama a la función `updateListName()` para actualizar la lista visual.

3. **Función `updateListName()`:**
- Recorre el array `names` y genera dinámicamente etiquetas `<li>` para cada nombre.
- Actualiza el contenido HTML del elemento que muestra la lista de nombres.

4. **Función `sortearAmigo()`:**
- Verifica que el array `names` tenga elementos.
- Selecciona un índice aleatorio utilizando `Math.floor(Math.random() * names.length)`.
- Muestra el resultado en el área designada y limpia la lista de nombres.

<h2>Tecnologías utilizadas</h2>
- JavaScript
- HTML
- CSS

<h2>Cómo utilizar</h2>
1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.
3. Ingresa los nombres de los participantes en el campo de texto y haz clic en "Añadir".
4. Una vez que hayas ingresado todos los nombres, haz clic en "Sortear amigo" para revelar a tu amigo secreto.

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Establer const necesarios

//const 1ra parte --- validar datos // agregar nombre a lista HYML y array
const NAME_INPUT = document.getElementById('amigo')
const LIST_NAME = document.getElementById('listaAmigos')

//const 2da parte --- validar datos // elegir amigo secreto (al azar)
const LIST_RESULT = document.getElementById('resultado')

//variable necesaria
let names = []

//Funciones para boton-add
function agregarAmigo(){
  //Validar entrada
  if(NAME_INPUT.value == ' ' || NAME_INPUT.value == ''){
    //Si no hay nada dentro del input alerta ingresar un nombre
    alert("Por favor, inserte un nombre.")
  } else {
    //Actializar array
    names.push(NAME_INPUT.value)
    //Limpiar input
    NAME_INPUT.value = ''
  }
  //Llamamos a la funcion Update
  updateListName()
}

function updateListName(){
  let label = ""
  //Recorrer array names
  names.forEach(element => {
    //Generar etiquetas <li> de HTML por elemento de array
    label = `${label}<li>${element}</li>`
  });
  //Actualizar lista de nombres en HTML
  LIST_NAME.innerHTML = label
}

//Funciones para boton-draw
function sortearAmigo(){
  if (names.length > 0){
    //Elejir por azar un id del array names
    let idName = Math.floor(Math.random() * names.length)
    //contruir etiquetas para HTML
    let label = `<li>El amigo secreto sorteado es: ${names[idName]}</li>`
    //Limpiar lista de nombres
    LIST_NAME.innerHTML = ''
    //Actualizar lista de resultado
    LIST_RESULT.innerHTML = label
  }else{
    //Si no hay nombres ingresados alerta ingresar un nombre
    alert("Por favor, inserte un nombre.")
  }
}
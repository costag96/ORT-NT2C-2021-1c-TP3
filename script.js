const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const list = document.getElementById('todo-list')

let tareasTotales = 0
let tareasNoRealizadas = 0

function addTodo() {

  const tarea = prompt("Ingrese una tarea");
  if (tarea === null) {
    return;
  }

  const division = document.createElement('div');

  const li = document.createElement('li')
  li.className = classNames.TODO_ITEM
  

  const check = document.createElement('input')
  check.type = "checkbox"
  check.className = classNames.TODO_CHECKBOX
  check.onchange = listenerTareas

  li.innerHTML = `${tarea}`
  
  li.appendChild(check)
  division.appendChild(li)
  list.appendChild(division)

  contadorItems()
}

function contadorItems(){
  tareasTotales++
  tareasNoRealizadas++
  itemCountSpan.innerHTML = tareasTotales
  uncheckedCountSpan.innerHTML = tareasNoRealizadas
}

function listenerTareas(evento){

  if(evento.target.checked){
    tareasNoRealizadas--
  }else{
    tareasNoRealizadas++
  }
  uncheckedCountSpan.innerHTML = tareasNoRealizadas;
}





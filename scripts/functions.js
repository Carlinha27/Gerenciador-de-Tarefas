import { createTaskItem } from "./dom.js";
import { tasks } from "./data.js";

export function renderElements(lista) {
  const listaTarefas = document.querySelector(".tasks__list");
  //listaTarefas.innerHTML = ""; //Remove todos os nós filhos
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  } //segunda forma de limpar os filhos

  for (let i = 0; i < lista.length; i++) {
    let tarefa = createTaskItem(lista[i].title, lista[i].type);
    listaTarefas.appendChild(tarefa);
  }
  localStorage.setItem("tasks", JSON.stringify(lista));
}

export function ativarBotoesRemover() {
  const botaoRemove = document.querySelectorAll(".task__button--remove-task");
  for (let i = 0; i < botaoRemove.length; i++) {
    botaoRemove[i].addEventListener("click", function (event) {
      tasks.splice(i, 1);
      renderElements(tasks);
      ativarBotoesRemover();
    });
  }
}
/* OUTRA FORMA DE FAZER COM QUE O BOTÃO EXCLUA UM ELEMENTO
const listaDeTarefas = document.querySelector(".task__list")
listaDeTarefas.addEventListener("click", function(event){
if (event.target.classList.cantains("task__button--remove-task")){
const li = event.target.parentElement;
li.remove()
}
});
*/

const text = document.querySelector(".header__input--search");
text.addEventListener("input", () => {
  const value = text.value;
  console.log(value);
  const resultado = tasks.filter((element) =>
    element.title.toLowerCase().includes(value.toLowerCase()),
  );
  (renderElements(resultado), console.log(resultado));
});

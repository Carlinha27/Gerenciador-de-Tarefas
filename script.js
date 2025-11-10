const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(lista) {
  const listaTarefas = document.querySelector(".tasks__list");
  //listaTarefas.innerHTML = ""; //Remove todos os nós filhos
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  } //segunda forma de limpar os filhos

  for (let i = 0; i < lista.length; i++) {
    let tarefa = createTaskItem(lista[i].title, lista[i].type);
    listaTarefas.appendChild(tarefa);
  }
}
renderElements(tasks);

function createTaskItem(title, type) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const paragrafo = document.createElement("p");
  const botao = document.createElement("button");

  li.classList.add("task__item");
  div.classList.add("task-info__container");

  if (type === "Urgente") {
    span.classList.add("task-type", "span-urgent");
  } else if (type === "Importante") {
    span.classList.add("task-type", "span-important");
  } else if (type === "Normal") {
    span.classList.add("task-type", "span-normal");
  } else {
    span.classList.add("task-type", "span-normal");
  }

  paragrafo.innerText = title;
  botao.classList.add("task__button--remove-task");

  li.appendChild(div);
  div.appendChild(span);
  div.appendChild(paragrafo);
  li.appendChild(botao);

  return li;
}

const adcTarefa = document.querySelector(".form__button--add-task");
adcTarefa.addEventListener("click", function () {
  event.preventDefault();
  const titulo = document.querySelector(".form__input--text").value;
  const type = document.querySelector(".form__input--priority").value;
  const obj = {};
  obj.title = titulo;
  obj.type = type;

  tasks.push(obj);
  renderElements(tasks);
  document.querySelector(".form__input--text").value = "";
  document.querySelector(".form__input--priority").value = "";
});

const botaoRemove = document.querySelectorAll(".task__button--remove-task");
for (let i = 0; i < botaoRemove.length; i++) {
  botaoRemove[i].addEventListener("click", function (event) {
    const li = event.currentTarget.parentElement; //parentElement acessa o pai do item q foi clicado
    li.remove();
  });
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

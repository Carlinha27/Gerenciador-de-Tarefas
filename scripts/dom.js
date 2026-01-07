export function createTaskItem(title, type) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const paragrafo = document.createElement("p");
  const botao = document.createElement("button");

  li.classList.add("task__item");
  div.classList.add("task-info__container");

  const tipo = type.toLowerCase();

  if (tipo === "urgente") {
    span.classList.add("task-type", "span-urgent");
  } else if (tipo === "importante") {
    span.classList.add("task-type", "span-important");
  } else if (tipo === "normal") {
    span.classList.add("task-type", "span-normal");
  } else {
    span.classList.add("task-type", "span-normal");
  }

  paragrafo.innerText = title;
  botao.classList.add("task__button--remove-task");
  botao.type = "button";

  li.appendChild(div);
  div.appendChild(span);
  div.appendChild(paragrafo);
  li.appendChild(botao);

  return li;
}

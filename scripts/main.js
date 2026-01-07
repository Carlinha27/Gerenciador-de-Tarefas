import { tasks } from "./data.js";
import { renderElements, ativarBotoesRemover } from "./functions.js";

renderElements(tasks);
ativarBotoesRemover();

const adcTarefa = document.querySelector(".form__button--add-task");
if (!adcTarefa) {
  console.error(
    'Botão de adicionar tarefa não encontrado: ".form__button--add-task"'
  );
} else {
  adcTarefa.addEventListener("click", function (event) {
    console.log("Evento clique em Adicionar capturado");
    event.preventDefault(); // Interrompe o comportamento padrão do formulário
    const titulo = document.querySelector(".form__input--text").value;
    const type = document.querySelector(".form__input--priority").value;

    console.log("Valores do formulário:", { titulo, type });

    if (titulo.trim() === "") {
      console.warn("Título vazio - tarefa não será adicionada");
      return; // não adiciona tarefa vazia
    }

    const obj = {
      title: titulo,
      type: type,
    };

    tasks.push(obj);
    renderElements(tasks);
    ativarBotoesRemover();
    document.querySelector(".form__input--text").value = "";
    document.querySelector(".form__input--priority").value = "";
  });
}

import { tasks } from "./data.js";
import { renderElements, ativarBotoesRemover } from "./functions.js";

renderElements(tasks);
ativarBotoesRemover();

const adcTarefa = document.querySelector(".form__button--add-task");
if (adcTarefa) {
  adcTarefa.addEventListener("click", function (event) {
    event.preventDefault(); // Interrompe o comportamento padrão do formulário
    const titulo = document.querySelector(".form__input--text").value;
    const type = document.querySelector(".form__input--priority").value;

    if (titulo.trim() === "") {
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

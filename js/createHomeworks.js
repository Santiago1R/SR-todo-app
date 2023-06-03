import icons from "./imgs/svg.js";
import { createTag } from "./utilities.js";
import { EventChecked } from "./functionalities/checked.js";
import { cambiarEstadoHomeWork } from "./tareas.js";
export function crearTarea(tarea) {
  const { texto, id } = tarea;

  const article = createTag("article", "homework");
  article.setAttribute("id",id)

  const div = createTag("div");

  const input = createTag("input", "circular-checkbox");
  input.setAttribute("type", "checkbox");

  const textHomework = createTag("span");
  textHomework.textContent = texto;

  const close = createTag("button");
  close.innerHTML = icons.cross;

  article.append(div, close);
  div.append(input, textHomework);

  input.addEventListener("change", () => EventChecked(input, textHomework));
  input.addEventListener("change", () => cambiarEstadoHomeWork(tarea, input));
  return article;
}




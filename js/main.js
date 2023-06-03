import { insertarTarea } from "./validationHomework.js";
import { obtenerTareas } from "./tareas.js";
import { insertarDatosTarea } from "./tareas.js";
import { generarIdÚnico } from "./utilities.js";


const homeworkAssignment = document.getElementById("text");
homeworkAssignment.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const txtNuevaTarea = e.target.value;
    const idNuevaTarea = generarIdÚnico(); 
    if (txtNuevaTarea.trim() !== "") {
      insertarTarea({
        id:idNuevaTarea,
        texto: txtNuevaTarea
      });
      insertarDatosTarea(txtNuevaTarea,idNuevaTarea);
      document.getElementById("text").value = "";
    }
  }
});

const tareas = obtenerTareas();
tareas.forEach(insertarTarea);
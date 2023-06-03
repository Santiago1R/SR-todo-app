export const tareas = [];

export const insertarDatosTarea = (text,id) => {
  const nuevaTarea = {id:id,texto: text, finalizado: false };
  tareas.push(nuevaTarea);
  console.log(tareas);
};
export const obtenerTareas = () => {
  return tareas;
};

export const cambiarEstadoHomeWork = (tarea, input) => {
  const tareas = obtenerTareas();
  if (input.checked) {
    tarea.finalizado = true;
  } else {
    tarea.finalizado = false;
  }
  function elementsLeft(){
    const elementosFaltantes = tareas.filter(elemento => elemento.finalizado == false)
    const numeroDeElementos = elementosFaltantes.length
    const hola = (''+numeroDeElementos)
    const p = document.getElementsByClassName('p0');
    p.textContent = hola +" prueba"
    console.log(p);
    return p
    
  }
 elementsLeft()

  tareas.map((t) => {
    if (t.id === tarea.id) {
      t.finalizado = tarea.finalizado;
    }

    return t;
  });
};

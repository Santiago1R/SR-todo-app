// import { obtenerTareas, tareas } from "../tareas.js";
// export const cambiarEstadoHomeWork = (tarea, input) => {
//   const tareas = obtenerTareas();

//   if (input.checked) {
//     tarea.finalizado = true;
//   } else {
//     tarea.finalizado = false;
//   }

//   tareas.map((t) => {
//     if (t.texto == tarea.texto) {
//       t.finalizado = tarea.finalizado;
//     }
//     return t;
//   });
// };
// export const generarIdÚnico = () =>{
//   const idAleatorio = Math.random().toString(8).substring(2,5);
//   return idAleatorio
// }
// function generarIdÚnico() {
//   const sufijoUnico = new Date().getTime().toString(36); // Utilizamos un timestamp como sufijo único
//   const numeroAleatorio = Math.random().toString(36).substr(2); // Generamos un número aleatorio y eliminamos el '0.' inicial
//   return `${sufijoUnico}-${numeroAleatorio}`;
// }
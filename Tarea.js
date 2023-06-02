// Datos
const Notas = [
  { titulo: "Una variable puede declararse usando let o const" },
  { titulo: "Un arreglo es un conjunto de datos ordenados" },
  { titulo: "terminar el curso" },
];

// Funciones
function crearNota(titulo) {
  const nuevaNota = {
    titulo: titulo,
  };
  Notas.push(nuevaNota);
}

function EditarNota(indice) {
  const Notas = nota[indice];
  tarea.completada = !tarea.completada;
}

function eliminarTarea(indice) {
  tareas.splice(indice, 1);
}

function imprimirNota(indice, nota) {
  console.log(`${indice}. ${nota.titulo}`);
}

function imprimirNotas() {
  console.log(`Usted tiene ${Notas.length} notas`);
  // let tareas = [1, 2, 3, 4, 5];

  for (let i = 0; i < Notas.length; i++) {
    const nota = Notas[i];
    imprimirNota(i, nota);
  }
}

function imprimirMenu() {
  console.log(`-----------------------
  ¿Qué desea hacer?
  1. Crear nota
  2. Editar nota
  3. Eliminar nota`);
}

function obtenerIndice(mensaje) {
  while (true) {
    let indice = prompt(mensaje);
    if (indice === null) {
      break;
    }

    indice = Number(indice);

    if (indice >= 0 && indice < tareas.length) {
      return indice;
    }
  }
}

// Flujo del programa

while (true) {
  console.clear();
  imprimirNotas();
  //   imprimirTareas();
  imprimirMenu();
  const opcion = prompt("Elije una opción");

  if (opcion === "1") {
    const titulo = prompt("Crear Nota:");
    crearNota(titulo);
    //} else if (opcion === "2") {
    //const indice = obtenerIndice("Escribe el indice de la tarea a alternar:"); //
    //if (indice !== undefined) {
    // alternarTarea(indice);//
    //     }
    //   } else if (opcion === "3") {
    //     const indice = obtenerIndice("Escribe el indice de la tarea a eliminar:");
    //     if (indice !== undefined) {
    //       eliminarTarea(indice);
    //     }
  } else if (opcion === null) {
    console.log("Gracias por usar Notas 😁");
    break;
  }
}

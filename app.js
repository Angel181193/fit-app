// Datos de los ejercicios
const entrenamientos = [
  {
    dia: "Lunes",
    ejercicios: [
      { nombre: "Press inclinado con mancuernas", grupo: "Pecho", series: 5, reps: "8-12", tiempo: 12 },
      { nombre: "Aperturas con mancuernas", grupo: "Pecho", series: 4, reps: "10-12", tiempo: 8 },
      { nombre: "Fondos en banco", grupo: "Tríceps", series: 4, reps: "12-15", tiempo: 8 },
      { nombre: "Crunch en polea", grupo: "Abdomen", series: 4, reps: "12-15", tiempo: 7 },
      // Agrega más ejercicios aquí
    ]
  },
  // Puedes agregar los ejercicios para los otros días de la semana
];

// Función para mostrar los entrenamientos
function cargarEntrenamientos() {
  const contenedor = document.getElementById("entrenamientos");
  contenedor.innerHTML = ''; // Limpiar contenido anterior

  entrenamientos.forEach(dia => {
    const diaDiv = document.createElement("div");
    diaDiv.classList.add("entrenamiento");
    const diaHTML = `
      <h3>${dia.dia}</h3>
      <ul>
        ${dia.ejercicios.map(ejercicio => `
          <li>
            <input type="checkbox" id="${ejercicio.nombre}" onclick="actualizarResumen()">
            <label for="${ejercicio.nombre}">
              ${ejercicio.nombre} - ${ejercicio.grupo} (${ejercicio.series} series x ${ejercicio.reps}) - ${ejercicio.tiempo} min
            </label>
          </li>
        `).join('')}
      </ul>
    `;
    diaDiv.innerHTML = diaHTML;
    contenedor.appendChild(diaDiv);
  });
}

// Función para actualizar el resumen de tiempo
function actualizarResumen() {
  let tiempoTotal = 0;
  const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  
  checkboxes.forEach(checkbox => {
    const ejercicio = entrenamientos.flatMap(dia => dia.ejercicios).find(ej => ej.nombre === checkbox.id);
    if (ejercicio) {
      tiempoTotal += ejercicio.tiempo;
    }
  });

  document.getElementById("tiempo-total").innerText = `Tiempo Total: ${tiempoTotal} minutos`;
}

// Función para restablecer todo
document.getElementById("reset").addEventListener("click", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(checkbox => checkbox.checked = false);
  actualizarResumen();
});

// Inicializar la aplicación
cargarEntrenamientos();

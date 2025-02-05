// Datos de los ejercicios para cada día
const entrenamientos = {
  lunes: [
    { nombre: "🏃‍♂️ Calentamiento en cinta", grupo: "-", series: "-", reps: "-", tiempo: 5 },
    { nombre: "🔥 Press inclinado con mancuernas", grupo: "Pecho", series: 5, reps: "8-12", tiempo: 12 },
    { nombre: "🔥 Aperturas con mancuernas", grupo: "Pecho", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Press plano con mancuernas", grupo: "Pecho", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Fondos en banco (con peso en piernas)", grupo: "Tríceps", series: 4, reps: "12-15", tiempo: 8 },
    { nombre: "🔥 Extensión de tríceps en polea", grupo: "Tríceps", series: 4, reps: "12-15", tiempo: 8 },
    { nombre: "🔥 Patada de tríceps con mancuerna", grupo: "Tríceps", series: 3, reps: "15", tiempo: 6 },
    { nombre: "🔥 Crunch en polea", grupo: "Abdomen", series: 4, reps: "12-15", tiempo: 7 },
    { nombre: "🔥 Planchas con peso", grupo: "Abdomen", series: 3, reps: "30-45 seg", tiempo: 5 },
    { nombre: "🚀 Cardio final: Cinta o HIIT", grupo: "-", series: "-", reps: "-", tiempo: 5 }
  ],
  martes: [
    { nombre: "🏃‍♂️ Calentamiento en cinta", grupo: "-", series: "-", reps: "-", tiempo: 5 },
    { nombre: "🔥 Remo con mancuerna", grupo: "Espalda", series: 5, reps: "8-12", tiempo: 12 },
    { nombre: "🔥 Jalón al pecho en polea", grupo: "Espalda", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Pullover con mancuerna", grupo: "Espalda", series: 4, reps: "12-15", tiempo: 8 },
    { nombre: "🔥 Curl con barra Z o mancuernas", grupo: "Bíceps", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Curl martillo con mancuernas", grupo: "Bíceps", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Curl concentrado con mancuerna", grupo: "Bíceps", series: 3, reps: "12-15", tiempo: 6 },
    { nombre: "🔥 Elevación de piernas colgado o en banco", grupo: "Abdomen", series: 4, reps: "12-15", tiempo: 7 },
    { nombre: "🔥 Russian Twists con mancuerna", grupo: "Abdomen", series: 3, reps: "15-20", tiempo: 5 },
    { nombre: "🚀 Cardio final: Cinta o HIIT", grupo: "-", series: "-", reps: "-", tiempo: 5 }
  ],
  miercoles: [
    { nombre: "🏃‍♂️ Calentamiento en cinta", grupo: "-", series: "-", reps: "-", tiempo: 5 },
    { nombre: "🔥 Press militar con mancuernas", grupo: "Hombros", series: 5, reps: "8-12", tiempo: 12 },
    { nombre: "🔥 Elevaciones laterales con mancuernas", grupo: "Hombros", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Elevaciones frontales con mancuernas", grupo: "Hombros", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Remo al mentón con barra Z o mancuernas", grupo: "Trapecio", series: 4, reps: "12-15", tiempo: 8 },
    { nombre: "🔥 Encogimientos de hombros con mancuernas", grupo: "Trapecio", series: 4, reps: "12-15", tiempo: 8 },
    { nombre: "🔥 Face Pull en polea", grupo: "Hombros", series: 3, reps: "12-15", tiempo: 6 },
    { nombre: "🔥 Crunch en banco declinado", grupo: "Abdomen", series: 4, reps: "12-15", tiempo: 7 },
    { nombre: "🔥 Planchas laterales", grupo: "Abdomen", series: 3, reps: "30-45 seg", tiempo: 5 },
    { nombre: "🚀 Cardio final: Cinta o HIIT", grupo: "-", series: "-", reps: "-", tiempo: 5 }
  ],
  jueves: [
    { nombre: "🏃‍♂️ Calentamiento en cinta", grupo: "-", series: "-", reps: "-", tiempo: 5 },
    { nombre: "🔥 Press inclinado con mancuernas", grupo: "Pecho", series: 5, reps: "8-12", tiempo: 12 },
    { nombre: "🔥 Aperturas con mancuernas", grupo: "Pecho", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Press plano con mancuernas", grupo: "Pecho", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Fondos en banco (con peso en piernas)", grupo: "Tríceps", series: 4, reps: "12-15", tiempo: 8 },
    { nombre: "🔥 Extensión de tríceps en polea", grupo: "Tríceps", series: 4, reps: "12-15", tiempo: 8 },
    { nombre: "🔥 Patada de tríceps con mancuerna", grupo: "Tríceps", series: 3, reps: "15", tiempo: 6 },
    { nombre: "🔥 Crunch en polea", grupo: "Abdomen", series: 4, reps: "12-15", tiempo: 7 },
    { nombre: "🔥 Planchas con peso", grupo: "Abdomen", series: 3, reps: "30-45 seg", tiempo: 5 },
    { nombre: "🚀 Cardio final: Cinta o HIIT", grupo: "-", series: "-", reps: "-", tiempo: 5 }
  ],
  viernes: [
    { nombre: "🏃‍♂️ Calentamiento en cinta", grupo: "-", series: "-", reps: "-", tiempo: 5 },
    { nombre: "🔥 Remo con mancuerna", grupo: "Espalda", series: 5, reps: "8-12", tiempo: 12 },
    { nombre: "🔥 Jalón al pecho en polea", grupo: "Espalda", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Pullover con mancuerna", grupo: "Espalda", series: 4, reps: "12-15", tiempo: 8 },
    { nombre: "🔥 Curl con barra Z o mancuernas", grupo: "Bíceps", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Curl martillo con mancuernas", grupo: "Bíceps", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Curl concentrado con mancuerna", grupo: "Bíceps", series: 3, reps: "12-15", tiempo: 6 },
    { nombre: "🔥 Elevación de piernas colgado o en banco", grupo: "Abdomen", series: 4, reps: "12-15", tiempo: 7 },
    { nombre: "🔥 Russian Twists con mancuerna", grupo: "Abdomen", series: 3, reps: "15-20", tiempo: 5 },
    { nombre: "🚀 Cardio final: Cinta o HIIT", grupo: "-", series: "-", reps: "-", tiempo: 5 }
  ],
  domingo: [
    { nombre: "🏃‍♂️ Calentamiento (sentadillas + estocadas dinámicas)", grupo: "-", series: "-", reps: "-", tiempo: 5 },
    { nombre: "🔥 Sentadillas con mancuernas", grupo: "Piernas", series: 5, reps: "12-15", tiempo: 12 },
    { nombre: "🔥 Zancadas con mancuernas", grupo: "Piernas", series: 4, reps: "12-15", tiempo: 8 },
    { nombre: "🔥 Peso muerto rumano con mancuernas", grupo: "Isquiotibiales", series: 4, reps: "10-12", tiempo: 8 },
    { nombre: "🔥 Hip thrust con mancuerna", grupo: "Glúteos", series: 4, reps: "12-15", tiempo: 8 },
    { nombre: "🔥 Elevación de talones con mancuernas", grupo: "Gemelos", series: 5, reps: "15-20", tiempo: 8 },
    { nombre: "🔥 Abducciones de cadera en el suelo", grupo: "Glúteos", series: 3, reps: "15-20", tiempo: 6 },
    { nombre: "🔥 Planchas con elevación de piernas", grupo: "Core", series: 3, reps: "30-45 seg", tiempo: 5 },
    { nombre: "🚀 Cardio final: Saltos, burpees o carrera corta", grupo: "-", series: "-", reps: "-", tiempo: 5 }
  ]
};

// Función para cargar los entrenamientos
function cargarEntrenamientos() {
  const diaSeleccionado = document.getElementById("dias").value;
  const contenedor = document.getElementById("entrenamientos");
  contenedor.innerHTML = ""; // Limpiar entrenamientos previos

  const entrenamientosDia = entrenamientos[diaSeleccionado];
  let tiempoTotal = 0;

  entrenamientosDia.forEach(ejercicio => {
    const divEntrenamiento = document.createElement("div");
    divEntrenamiento.classList.add("entrenamiento");
    divEntrenamiento.innerHTML = `
      <h3>${ejercicio.nombre}</h3>
      <p>Grupo: ${ejercicio.grupo}</p>
      <p>Series: ${ejercicio.series}</p>
      <p>Repeticiones: ${ejercicio.reps}</p>
      <p>Tiempo: ${ejercicio.tiempo} minutos</p>
    `;
    contenedor.appendChild(divEntrenamiento);
    tiempoTotal += ejercicio.tiempo;
  });

  document.getElementById("tiempo-total").textContent = `Tiempo Total: ${tiempoTotal} minutos`;
}

// Inicialización de los entrenamientos
document.addEventListener('DOMContentLoaded', cargarEntrenamientos);

// Restablecer selección
document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("dias").value = "lunes";
  cargarEntrenamientos();
});

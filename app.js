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
  domingo: [
      { nombre: "🏃‍♂️ Calentamiento (sentadillas + estocadas dinámicas)", grupo: "-", series: "-", reps: "-", tiempo: 5 },
      { nombre: "🔥 Sentadillas con mancuernas", grupo: "Piernas", series: 5, reps: "12-15", tiempo: 12 },
      { nombre: "🔥 Zancadas con mancuernas", grupo: "Piernas", series: 4, reps: "12-15", tiempo: 8 },
      { nombre: "🔥 Peso muerto rumano con mancuernas", grupo: "Isquiotibiales", series: 4, reps: "12-15", tiempo: 8 },
      { nombre: "🔥 Elevaciones de talones con mancuernas (gemelos)", grupo: "Piernas", series: 4, reps: "15-20", tiempo: 8 },
      { nombre: "🔥 Abducciones de cadera con banda elástica", grupo: "Glúteos", series: 4, reps: "15", tiempo: 7 },
      { nombre: "🔥 Crunch en suelo con peso", grupo: "Abdomen", series: 4, reps: "12-15", tiempo: 7 },
      { nombre: "🔥 Elevaciones de piernas colgado", grupo: "Abdomen", series: 3, reps: "12-15", tiempo: 6 },
      { nombre: "🚀 Cardio final: Cinta o HIIT", grupo: "-", series: "-", reps: "-", tiempo: 5 }
  ]
};

// Variables para el cronómetro
let tiempoTotal = 0;
let tiempoEntrenamiento = 0;
let cronometro = null;

// Cargar entrenamientos de acuerdo con el día seleccionado
document.getElementById('dias').addEventListener('change', cargarEntrenamiento);

function cargarEntrenamiento() {
  const diaSeleccionado = document.getElementById('dias').value;
  const listaEntrenamientos = entrenamientos[diaSeleccionado];
  const contenedorEntrenamientos = document.getElementById('entrenamientos');
  contenedorEntrenamientos.innerHTML = "";
  tiempoTotal = 0;

  listaEntrenamientos.forEach((ejercicio, index) => {
      let divEjercicio = document.createElement('div');
      divEjercicio.classList.add('entrenamiento');
      divEjercicio.innerHTML = `
          <h3>${ejercicio.nombre}</h3>
          <p>Grupo: ${ejercicio.grupo}</p>
          <p>Series: ${ejercicio.series} | Reps: ${ejercicio.reps}</p>
          <p>Tiempo estimado: ${ejercicio.tiempo} min</p>
          <div class="checkbox">
              <input type="checkbox" id="completado-${index}" /> Completado
          </div>
          <div class="checkbox">
              <input type="checkbox" id="serie-${index}" /> Marca serie completa
          </div>
      `;
      contenedorEntrenamientos.appendChild(divEjercicio);
      tiempoTotal += ejercicio.tiempo;
  });

  // Mostrar tiempo total estimado
  document.getElementById('tiempo-total').innerHTML = `Tiempo total estimado: ${tiempoTotal} minutos`;
}

// Iniciar el entrenamiento y cronómetro
document.getElementById('iniciar-entrenamiento').addEventListener('click', function() {
  let tiempoInicio = Date.now();

  cronometro = setInterval(function() {
      tiempoEntrenamiento = Math.floor((Date.now() - tiempoInicio) / 1000);
      document.getElementById('tiempo-entrenamiento').innerText = `Tiempo de entrenamiento: ${Math.floor(tiempoEntrenamiento / 60)}m ${tiempoEntrenamiento % 60}s`;
  }, 1000);

  document.getElementById('iniciar-entrenamiento').disabled = true;
});

cargarEntrenamiento();

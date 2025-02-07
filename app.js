const ejerciciosPorDia = {
  "lunes": [
    { "nombre": "🏃Correr", "grupo": "HIT", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Press inclinado con barra", "grupo": "Pecho", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Press plano con barra", "grupo": "Pecho", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Prees Militar", "grupo": "Hombro", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Jalón al pecho polea", "grupo": "Espalda", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Jalón espalda polea", "grupo": "Espalda", "series": 8, "realizadas": 0 },
    { "nombre": "🏃Correr", "grupo": "HIT", "series": 10, "realizadas": 0 },
  ],
  "martes": [
    { "nombre": "🏃Correr", "grupo": "HIT", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Extension polea triceps", "grupo": "triceps", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Curl con polea", "grupo": "Bíceps", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Curl con polea 1 mano", "grupo": "Bíceps", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Pres frances pie", "grupo": "triceps", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Curl concentrado con mancuerna", "grupo": "Bíceps", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Abdomen", "grupo": "Abdomen", "series": 5, "realizadas": 0 }
  ],
  "miércoles": [
    { "nombre": "🏃Correr", "grupo": "HIT", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Remo sentado polea", "grupo": "Espalda", "series": 10, "realizadas": 0 },
    { "nombre": "🏋️Remo sentado polea 1 mano", "grupo": "Espalda", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Prees pecho Maquina", "grupo": "pecho", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Press hombro Maquina", "grupo": "Hombro", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Aperturas maquina espalda", "grupo": "espalda", "series": 8, "realizadas": 0 },
    { "nombre": "🏃Correr", "grupo": "HIT", "series": 10, "realizadas": 0 },
  ],
  "jueves": [
    { "nombre": "🏃Correr", "grupo": "HIT", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Extension polea triceps", "grupo": "triceps", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Curl con polea", "grupo": "Bíceps", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Curl con polea 1 mano", "grupo": "Bíceps", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Pres frances pie", "grupo": "triceps", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Curl concentrado con mancuerna", "grupo": "Bíceps", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Abdomen", "grupo": "Abdomen", "series": 5, "realizadas": 0 }
  ],
  "viernes": [
    { "nombre": "🏃Correr", "grupo": "HIT", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Press inclinado con barra", "grupo": "Pecho", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Press plano con barra", "grupo": "Pecho", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Prees Militar", "grupo": "Hombro", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️alón al pecho polea", "grupo": "Espalda", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Jalón espalda polea", "grupo": "Espalda", "series": 8, "realizadas": 0 },
    { "nombre": "🏃Correr", "grupo": "HIT", "series": 10, "realizadas": 0 },
  ],
  "sábado": [
    { "nombre": "🏃Correr", "grupo": "HIT", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Extension polea triceps", "grupo": "triceps", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Curl con polea", "grupo": "Bíceps", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Curl con polea 1 mano", "grupo": "Bíceps", "series": 5, "realizadas": 0 },
    { "nombre": "🏋️Pres frances pie", "grupo": "triceps", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Curl concentrado con mancuerna", "grupo": "Bíceps", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Abdomen", "grupo": "Abdomen", "series": 5, "realizadas": 0 }
  ],
  "domingo": [
    { "nombre": "🏋️Sentadillas con mancuernas", "grupo": "Pierna", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Zancadas con mancuernas", "grupo": "Pierna", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Elevación de talones", "grupo": "Pierna", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Sentadillas abrir cerrar", "grupo": "Pierna", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Zancadas HIT", "grupo": "Pierna", "series": 8, "realizadas": 0 },
    { "nombre": "🏋️Abdomen", "grupo": "Abdomen", "series": 5, "realizadas": 0 },
  ]
};

// Mapeo para convertir el número del día (getDay) a cadena en español
const diasMapping = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miércoles",
  4: "jueves",
  5: "viernes",
  6: "sábado"
};

// Detecta el día actual
const hoy = new Date().getDay();
const diaActual = diasMapping[hoy];

// Referencias a elementos del DOM
const selectDia = document.getElementById("select-dia");
const listaEjercicios = document.getElementById("ejercicios-lista");
const startWorkoutBtn = document.getElementById("start-workout");
const finishWorkoutBtn = document.getElementById("finish-workout");
const timerDisplay = document.getElementById("timer");

let timer;
let seconds = 0;

// Al cargar, se selecciona automáticamente el día actual
selectDia.value = diaActual;

// Actualiza la lista de ejercicios según el día seleccionado
function actualizarListaEjercicios() {
  const diaSeleccionado = selectDia.value;
  const ejercicios = ejerciciosPorDia[diaSeleccionado] || [];
  listaEjercicios.innerHTML = "";

  ejercicios.forEach((ejercicio, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="checkbox" id="ejercicio-${index}" class="checkbox" onchange="verificarCompletados()"></td>
      <td>${ejercicio.nombre}</td>
      <td>${ejercicio.grupo}</td>
      <td class="series-column">${ejercicio.series}</td>
      <td class="realizadas-column">
        <div class="series-tracker">
          <button onclick="restarSerie(${index})">-</button>
          <span id="series-${index}">${ejercicio.realizadas}</span>
          <button onclick="sumarSerie(${index})">+</button>
        </div>
      </td>
    `;
    listaEjercicios.appendChild(row);
  });

  // Si el día seleccionado no es el día actual, deshabilitamos interacciones
  if (diaSeleccionado !== diaActual) {
    // Deshabilita los checkboxes
    const checkboxes = listaEjercicios.querySelectorAll('.checkbox');
    checkboxes.forEach(chk => { chk.disabled = true; });

    // Deshabilita los botones de más y menos
    const buttons = listaEjercicios.querySelectorAll('.series-tracker button');
    buttons.forEach(btn => { btn.disabled = true; });

    // Oculta los botones de iniciar y finalizar entrenamiento
    startWorkoutBtn.style.display = "none";
    finishWorkoutBtn.style.display = "none";
  } else {
    // Si es el día actual, se habilitan las interacciones
    const checkboxes = listaEjercicios.querySelectorAll('.checkbox');
    checkboxes.forEach(chk => { chk.disabled = false; });

    const buttons = listaEjercicios.querySelectorAll('.series-tracker button');
    buttons.forEach(btn => { btn.disabled = false; });

    startWorkoutBtn.style.display = "block";
    finishWorkoutBtn.style.display = "none";
  }
  verificarCompletados();
}

// Inicia el temporizador (solo si es el día actual)
function iniciarEntrenamiento() {
  if (selectDia.value !== diaActual) return;
  clearInterval(timer);
  seconds = 0;
  timerDisplay.innerText = "Tiempo: 00:00";

  timer = setInterval(() => {
    seconds++;
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    timerDisplay.innerText = `Tiempo: ${min}:${sec < 10 ? "0" : ""}${sec}`;
  }, 1000);
}

// Finaliza el entrenamiento (solo si es el día actual)
function finalizarEntrenamiento() {
  if (selectDia.value !== diaActual) return;
  clearInterval(timer);
  timerDisplay.innerText += " (Finalizado)";
  finishWorkoutBtn.style.display = "none";
}

// Verifica si todos los checkboxes están marcados para mostrar el botón de finalizar (solo en el día actual)
function verificarCompletados() {
  const checkboxes = document.querySelectorAll(".checkbox");
  const todosMarcados = [...checkboxes].every(chk => chk.checked);

  if (selectDia.value === diaActual && checkboxes.length > 0 && todosMarcados) {
    finishWorkoutBtn.style.display = "block";
  } else {
    finishWorkoutBtn.style.display = "none";
  }
}

// Funciones para restar y sumar series (sin restricciones adicionales)
function restarSerie(index) {
  let seriesEl = document.getElementById(`series-${index}`);
  let series = parseInt(seriesEl.innerText);
  if (series > 0) {
    seriesEl.innerText = series - 1;
  }
}

function sumarSerie(index) {
  let seriesEl = document.getElementById(`series-${index}`);
  let series = parseInt(seriesEl.innerText);
  seriesEl.innerText = series + 1;
}

// Eventos
selectDia.addEventListener("change", actualizarListaEjercicios);
startWorkoutBtn.addEventListener("click", iniciarEntrenamiento);
finishWorkoutBtn.addEventListener("click", finalizarEntrenamiento);

// Inicializa la lista de ejercicios
actualizarListaEjercicios();

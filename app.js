const ejerciciosPorDia = {
  "lunes": [
    { "nombre": "🏃Correr", "grupo": "HIT", "series": 5, "realizadas": 0 },
    { "nombre": "Press inclinado con barra", "grupo": "Pecho", "series": 5, "realizadas": 0 },
    { "nombre": "Press plano con barra", "grupo": "Pecho", "series": 5, "realizadas": 0 },
    { "nombre": "Prees Militar", "grupo": "Hombro", "series": 8, "realizadas": 0 },
    { "nombre": "Jalón al pecho polea", "grupo": "Espalda", "series": 8, "realizadas": 0 },
    { "nombre": "Jalón espalda polea", "grupo": "Espalda", "series": 8, "realizadas": 0 },
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

const selectDia = document.getElementById("select-dia");
const listaEjercicios = document.getElementById("ejercicios-lista");
const startWorkoutBtn = document.getElementById("start-workout");
const finishWorkoutBtn = document.getElementById("finish-workout");
const timerDisplay = document.getElementById("timer");

let timer;
let seconds = 0;

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
          <td>${ejercicio.series}</td>
          <td class="series-tracker">
              <button onclick="restarSerie(${index})">-</button>
              <span id="series-${index}">${ejercicio.realizadas}</span>
              <button onclick="sumarSerie(${index})">+</button>
          </td>
      `;
      listaEjercicios.appendChild(row);
  });

  verificarCompletados();
}

function iniciarEntrenamiento() {
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

function finalizarEntrenamiento() {
  clearInterval(timer);
  timerDisplay.innerText += " (Finalizado)";
  finishWorkoutBtn.style.display = "none";
}

function verificarCompletados() {
  const checkboxes = document.querySelectorAll(".checkbox");
  const todosMarcados = [...checkboxes].every(chk => chk.checked);

  finishWorkoutBtn.style.display = todosMarcados && checkboxes.length > 0 ? "block" : "none";
}

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

selectDia.addEventListener("change", actualizarListaEjercicios);
startWorkoutBtn.addEventListener("click", iniciarEntrenamiento);
finishWorkoutBtn.addEventListener("click", finalizarEntrenamiento);

actualizarListaEjercicios();

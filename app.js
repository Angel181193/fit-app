const ejerciciosPorDia = {
  lunes: [
      { nombre: "Press inclinado con mancuernas", grupo: "Pecho", series: 0, reps: "8-12" },
      { nombre: "Aperturas con mancuernas", grupo: "Pecho", series: 0, reps: "10-12" }
  ],
  martes: [
      { nombre: "Remo con mancuerna", grupo: "Espalda", series: 0, reps: "8-12" },
      { nombre: "Jalón al pecho en polea", grupo: "Espalda", series: 0, reps: "10-12" }
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
      const li = document.createElement("li");
      li.classList.add("ejercicio-item");
      li.innerHTML = `
          <input type="checkbox" id="ejercicio-${index}" class="checkbox" onchange="verificarCompletados()">
          <span class="nombre-ejercicio">${ejercicio.nombre} <small>(${ejercicio.grupo})</small></span>
          <span class="series-tracker">
              <button onclick="restarSerie(${index})">-</button>
              <span id="series-${index}">${ejercicio.series}</span>/${ejercicio.reps}
              <button onclick="sumarSerie(${index})">+</button>
          </span>
      `;
      listaEjercicios.appendChild(li);
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

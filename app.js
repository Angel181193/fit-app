const ejerciciosPorDia = {
  lunes: [
      { nombre: "Press inclinado con mancuernas", grupo: "Pecho", series: 5, reps: "8-12" },
      { nombre: "Aperturas con mancuernas", grupo: "Pecho", series: 4, reps: "10-12" },
      { nombre: "Press plano con mancuernas", grupo: "Pecho", series: 4, reps: "10-12" },
      { nombre: "Fondos en banco", grupo: "Tríceps", series: 4, reps: "12-15" }
  ],
  martes: [
      { nombre: "Remo con mancuerna", grupo: "Espalda", series: 5, reps: "8-12" },
      { nombre: "Jalón al pecho en polea", grupo: "Espalda", series: 4, reps: "10-12" }
  ],
  miercoles: [
      { nombre: "Press militar con mancuernas", grupo: "Hombros", series: 5, reps: "8-12" },
      { nombre: "Elevaciones laterales con mancuernas", grupo: "Hombros", series: 4, reps: "10-12" }
  ]
};

const selectDia = document.getElementById("select-dia");
const listaEjercicios = document.getElementById("ejercicios-lista");
const startWorkoutBtn = document.getElementById("start-workout");
const timerDisplay = document.getElementById("timer");

let timer;
let seconds = 0;

function actualizarListaEjercicios() {
  const diaSeleccionado = selectDia.value;
  const ejercicios = ejerciciosPorDia[diaSeleccionado] || [];

  listaEjercicios.innerHTML = "";
  ejercicios.forEach((ejercicio, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
          <input type="checkbox" id="ejercicio-${index}" class="checkbox">
          <label for="ejercicio-${index}">${ejercicio.nombre} (${ejercicio.grupo}) - ${ejercicio.series}x${ejercicio.reps}</label>
          <span class="series-tracker">
              <button onclick="restarSerie(${index})">-</button>
              <span id="series-${index}">${ejercicio.series}</span>
              <button onclick="sumarSerie(${index})">+</button>
          </span>
      `;
      listaEjercicios.appendChild(li);
  });
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

actualizarListaEjercicios();

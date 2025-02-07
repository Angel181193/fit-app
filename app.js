const ejerciciosPorDia = {
  "lunes": [
    { "nombre": "Press inclinado con barra", "grupo": "Pecho", "series": 4, "realizadas": 0 },
    { "nombre": "Press plano con barra", "grupo": "Pecho", "series": 4, "realizadas": 0 },
    { "nombre": "Planchas con peso", "grupo": "Abdomen", "series": 3, "realizadas": 0 },
    { "nombre": "Crunch en polea", "grupo": "Abdomen", "series": 4, "realizadas": 0 },
    { "nombre": "Russian Twists", "grupo": "Abdomen", "series": 3, "realizadas": 0 }
  ],
  "martes": [
    { "nombre": "Jalón al pecho en polea", "grupo": "Espalda", "series": 4, "realizadas": 0 },
    { "nombre": "Curl con polea", "grupo": "Bíceps", "series": 4, "realizadas": 0 },
    { "nombre": "Curl concentrado con mancuerna", "grupo": "Bíceps", "series": 4, "realizadas": 0 },
    { "nombre": "Elevación de piernas colgado", "grupo": "Abdomen", "series": 3, "realizadas": 0 }
  ],
  "miércoles": [
    { "nombre": "Press militar con mancuernas", "grupo": "Hombros", "series": 4, "realizadas": 0 },
    { "nombre": "Curl concentrado con mancuerna", "grupo": "Bíceps", "series": 4, "realizadas": 0 },
    { "nombre": "Elevación de piernas colgado", "grupo": "Abdomen", "series": 3, "realizadas": 0 },
    { "nombre": "Russian Twists", "grupo": "Abdomen", "series": 3, "realizadas": 0 }
  ],
  "jueves": [
    { "nombre": "Press inclinado con barra", "grupo": "Pecho", "series": 4, "realizadas": 0 },
    { "nombre": "Jalón al pecho en polea", "grupo": "Espalda", "series": 4, "realizadas": 0 },
    { "nombre": "Curl con polea", "grupo": "Bíceps", "series": 4, "realizadas": 0 },
    { "nombre": "Planchas con peso", "grupo": "Abdomen", "series": 3, "realizadas": 0 }
  ],
  "viernes": [
    { "nombre": "Press plano con barra", "grupo": "Pecho", "series": 4, "realizadas": 0 },
    { "nombre": "Jalón al pecho en polea", "grupo": "Espalda", "series": 4, "realizadas": 0 },
    { "nombre": "Elevación de piernas colgado", "grupo": "Abdomen", "series": 3, "realizadas": 0 },
    { "nombre": "Crunch en polea", "grupo": "Abdomen", "series": 4, "realizadas": 0 }
  ],
  "sábado": [
    { "nombre": "Press militar con mancuernas", "grupo": "Hombros", "series": 4, "realizadas": 0 },
    { "nombre": "Curl concentrado con mancuerna", "grupo": "Bíceps", "series": 4, "realizadas": 0 },
    { "nombre": "Elevación de piernas colgado", "grupo": "Abdomen", "series": 3, "realizadas": 0 },
    { "nombre": "Russian Twists", "grupo": "Abdomen", "series": 3, "realizadas": 0 }
  ],
  "domingo": [
    { "nombre": "Sentadillas con mancuernas", "grupo": "Pierna", "series": 4, "realizadas": 0 },
    { "nombre": "Zancadas con mancuernas", "grupo": "Pierna", "series": 4, "realizadas": 0 },
    { "nombre": "Elevación de talones", "grupo": "Pierna", "series": 3, "realizadas": 0 }
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

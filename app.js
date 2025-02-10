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

const selectDia = document.getElementById("select-dia");
const listaEjercicios = document.getElementById("ejercicios-lista");
const startWorkoutBtn = document.getElementById("start-workout");
const finishWorkoutBtn = document.getElementById("finish-workout");
const timerDisplay = document.getElementById("timer");

let timer;
let seconds = 0;

// Función para actualizar la lista de ejercicios
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

// Función para iniciar el entrenamiento
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

// Función para finalizar el entrenamiento
function finalizarEntrenamiento() {
  clearInterval(timer);
  timerDisplay.innerText += " (Finalizado)";
  finishWorkoutBtn.style.display = "none";
}

// Verifica si los ejercicios están completos y habilita/deshabilita los checkboxes
function verificarCompletados() {
  const checkboxes = document.querySelectorAll(".checkbox");

  checkboxes.forEach((checkbox, index) => {
      const seriesEl = document.getElementById(`series-${index}`);
      const series = parseInt(seriesEl.innerText);
      const ejercicio = ejerciciosPorDia[selectDia.value][index];

      // Si el número de series realizadas es suficiente, habilitamos el checkbox
      if (series >= ejercicio.series) {
          checkbox.disabled = false;
      } else {
          checkbox.disabled = true;
      }
  });

  // Verificar si todos los ejercicios están completos para mostrar el botón de finalizar
  const todosMarcados = [...checkboxes].every(chk => chk.checked);
  finishWorkoutBtn.style.display = todosMarcados && checkboxes.length > 0 ? "block" : "none";
}

// Función para restar series
function restarSerie(index) {
  let seriesEl = document.getElementById(`series-${index}`);
  let series = parseInt(seriesEl.innerText);
  if (series > 0) {
      seriesEl.innerText = series - 1;
  }
  verificarCompletados(); // Verificar si ya se pueden marcar los checkboxes
}

// Función para sumar series
function sumarSerie(index) {
  let seriesEl = document.getElementById(`series-${index}`);
  let series = parseInt(seriesEl.innerText);
  let ejercicio = ejerciciosPorDia[selectDia.value][index]; // Obtener ejercicio

  if (series < ejercicio.series) {
      seriesEl.innerText = series + 1;
  }
  verificarCompletados(); // Verificar si ya se pueden marcar los checkboxes
}

// Eventos
selectDia.addEventListener("change", actualizarListaEjercicios);
startWorkoutBtn.addEventListener("click", iniciarEntrenamiento);
finishWorkoutBtn.addEventListener("click", finalizarEntrenamiento);

// Inicializar la lista de ejercicios
actualizarListaEjercicios();

document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.getElementById("logoutButton");

  if (logoutButton) {
      logoutButton.addEventListener("click", function () {
          // Eliminar sesión almacenada (puede ser en localStorage o sessionStorage)
          localStorage.removeItem("userToken"); 
          sessionStorage.removeItem("userToken");

          // Redirigir al login
          window.location.href = "login.html";
      });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-workout");
  const finishButton = document.getElementById("finish-workout");
  const auxilioButton = document.getElementById("auxilio-workout");  // Nuevo botón "Auxilio"
  const exerciseTable = document.getElementById("ejercicios-lista");
  const timerDisplay = document.getElementById("timer");

  let startTime;
  let exerciseTimes = [];
  let lastCompletionTime = null;

  // Crear el botón "Auxilio" en el HTML (pero ocultarlo inicialmente)
  auxilioButton.style.display = "none";

  // Iniciar entrenamiento
  startButton.addEventListener("click", function () {
    startTime = Date.now();
    lastCompletionTime = startTime; // Guarda el tiempo de inicio
    startButton.style.display = "none";
    finishButton.style.display = "inline-block";
    auxilioButton.style.display = "inline-block";  // Muestra el botón "Auxilio" cuando se inicia el entrenamiento
  });

  // Mostrar el botón "Finalizar entrenamiento" cuando se haga clic en "Auxilio"
  auxilioButton.addEventListener("click", function () {
    finishButton.style.display = "inline-block";  // Muestra el botón de finalizar entrenamiento
    auxilioButton.style.display = "none";  // Oculta el botón "Auxilio"
  });

  // Este evento se dispara cuando el checkbox de un ejercicio cambia
  exerciseTable.addEventListener("change", function (event) {
    if (event.target.classList.contains("checkbox")) {
      let row = event.target.closest("tr");
      let series = parseInt(row.querySelector(".series-tracker span").textContent, 10);
      let realizadas = parseInt(row.querySelector(".series-tracker span").textContent, 10);

      if (realizadas >= series) {
        let completionTime = Date.now();
        let exerciseTime = (lastCompletionTime) ? (completionTime - lastCompletionTime) / 1000 : (completionTime - startTime) / 1000;
        exerciseTimes.push(exerciseTime);
        lastCompletionTime = completionTime;

        // Mostrar tiempo debajo del cronómetro
        let timeRow = document.createElement("p");
        timeRow.textContent = `Ejercicio ${exerciseTimes.length}: ${exerciseTime.toFixed(2)} segundos`;
        timerDisplay.appendChild(timeRow);

        // Marcar el ejercicio como completado (puedes añadir algún estilo visual para marcarlo)
        event.target.disabled = true;  // Deshabilita el checkbox
        row.style.backgroundColor = "#d4edda"; // Cambiar el color de fondo para indicar completado
      }
    }
  });

  function verificarCompletados() {
    const checkboxes = document.querySelectorAll(".checkbox");
    const todosMarcados = [...checkboxes].every(chk => {
        const index = chk.id.replace("ejercicio-", ""); // obtener el índice del ejercicio
        const seriesEl = document.getElementById(`series-${index}`);
        const series = parseInt(seriesEl.innerText);
        const ejercicio = ejerciciosPorDia[selectDia.value][index]; // Obtener ejercicio del día

        // Verificar si las series realizadas son iguales a las series
        if (series >= ejercicio.series) {
            return chk.checked; // Solo marcar si las series realizadas son suficientes
        }
        return false; // Si no, el checkbox no se puede marcar
    });

    finishButton.style.display = todosMarcados && checkboxes.length > 0 ? "block" : "none";
  }

  // Finalizar entrenamiento
  finishButton.addEventListener("click", function () {
    let totalTime = (Date.now() - startTime) / 1000;
    let summaryMessage = `🏋️‍♂️ Resumen del entrenamiento:\n\n`;

    if (exerciseTimes.length === 0) {
      summaryMessage += "❌ No completaste ningún ejercicio.";
    } else {
      // Aquí recorremos cada ejercicio y mostramos su nombre
      exerciseTimes.forEach((time, index) => {
        const ejercicio = ejerciciosPorDia[selectDia.value][index]; // Obtener el ejercicio correspondiente
        summaryMessage += `${ejercicio.nombre}: ${time.toFixed(2)} segundos\n`;
      });
      summaryMessage += `\n⏳ Tiempo total: ${totalTime.toFixed(2)} segundos`;
    }

    alert(summaryMessage);
    window.location.reload();
  });

});

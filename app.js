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
  // Variables
  const selectDia = document.getElementById("select-dia");
  const listaEjercicios = document.getElementById("ejercicios-lista");
  const startWorkoutBtn = document.getElementById("start-workout");
  const finishWorkoutBtn = document.getElementById("finish-workout");
  const timerDisplay = document.getElementById("timer");
  const auxilioButton = document.getElementById("auxilio-workout");
  const logoutButton = document.getElementById("logoutButton");

  // Variables de temporizador
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

  document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-workout");
    const finishButton = document.getElementById("finish-workout");
    const exerciseTable = document.getElementById("ejercicios-lista");
    const timerDisplay = document.getElementById("timer");
    
    let startTime;
    let exerciseTimes = [];
    let lastCompletionTime = null;

    // Iniciar entrenamiento
    startButton.addEventListener("click", function () {
        startTime = Date.now();
        lastCompletionTime = startTime; // Guarda el tiempo de inicio
        startButton.style.display = "none";
        finishButton.style.display = "inline-block";
    });

    // Marcar ejercicio como completado
    exerciseTable.addEventListener("change", function (event) {
        if (event.target.classList.contains("complete-checkbox")) {
            let row = event.target.closest("tr");
            let series = parseInt(row.querySelector(".series").textContent, 10);
            let realizadas = parseInt(row.querySelector(".realizadas").textContent, 10);

            if (realizadas >= series) {
                // Registrar tiempo del ejercicio
                let completionTime = Date.now();
                let exerciseTime = (lastCompletionTime) ? (completionTime - lastCompletionTime) / 1000 : (completionTime - startTime) / 1000;
                exerciseTimes.push(exerciseTime);
                lastCompletionTime = completionTime;

                // Mostrar tiempo debajo del cronómetro
                let timeRow = document.createElement("p");
                timeRow.textContent = `Ejercicio ${exerciseTimes.length}: ${exerciseTime.toFixed(2)} segundos`;
                timerDisplay.appendChild(timeRow);
            } else {
                alert("⚠️ No puedes marcar este ejercicio como completado hasta que el número de realizadas sea igual o mayor al de series.");
                event.target.checked = false; // Desmarcar el checkbox
            }
        }
    });

    // Finalizar entrenamiento
    finishButton.addEventListener("click", function () {
        let totalTime = (Date.now() - startTime) / 1000;
        let summaryMessage = `🏋️‍♂️ Resumen del entrenamiento:\n\n`;

        if (exerciseTimes.length === 0) {
            summaryMessage += "❌ No completaste ningún ejercicio.";
        } else {
            exerciseTimes.forEach((time, index) => {
                summaryMessage += `Ejercicio ${index + 1}: ${time.toFixed(2)} segundos\n`;
            });
            summaryMessage += `\n⏳ Tiempo total: ${totalTime.toFixed(2)} segundos`;
        }

        alert(summaryMessage);
        window.location.reload();
    });
});

  // Temporizador de visibilidad
  let startTime = Date.now();  
  let elapsedTime = 0;         
  let timerInterval;

  function startTimer() {
      timerInterval = setInterval(function () {
          elapsedTime = Date.now() - startTime;
          updateTimerDisplay(elapsedTime);
      }, 1000);
  }

  function updateTimerDisplay(elapsedTime) {
      const seconds = Math.floor(elapsedTime / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const formattedTime = `${hours}:${minutes % 60}:${seconds % 60}`;
      document.getElementById("timer").textContent = formattedTime;
  }

  document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
          clearInterval(timerInterval);
      } else {
          startTime = Date.now() - elapsedTime;
          startTimer();
      }
  });

  startTimer(); // Iniciar temporizador cuando se cargue la app
});

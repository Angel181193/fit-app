// Evento para cuando se carga la página
document.addEventListener("DOMContentLoaded", function () {
  // Recuperar el usuario logueado desde localStorage
  const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

  // Verificar si el usuario está disponible
  if (!usuarioLogueado || !usuarioLogueado.Usuario) {
    console.error("Usuario no encontrado en localStorage.");
    return;  // Detener la ejecución si no se encuentra el usuario
  }

  // Cuando se carga la página, obtener los ejercicios y organizarlos por día
  obtenerEjercicios(usuarioLogueado.Usuario).then((ejerciciosDelUsuario) => {
    // Organizar los ejercicios por día
    ejerciciosPorDia = {}; // Resetear la variable para evitar duplicados si ya existía
    ejerciciosDelUsuario.forEach((ejercicio) => {
      if (!ejerciciosPorDia[ejercicio.Dia]) {
        ejerciciosPorDia[ejercicio.Dia] = [];
      }
      ejerciciosPorDia[ejercicio.Dia].push({
        nombre: ejercicio["Nombre ejercicio"],
        grupo: ejercicio.Grupo,
        series: ejercicio.Series,
        realizadas: ejercicio.Realizadas,
      });
    });

// Obtener el día actual en español
const obtenerDiaActual = () => {
  const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const hoy = new Date().getDay(); // Devuelve 0 (Domingo) a 6 (Sábado)
  return diasSemana[hoy];
};

// Llenar el select con los días de los ejercicios del usuario
selectDia.innerHTML = ""; // 🔥 Limpiar el select antes de añadir días dinámicamente

for (const dia in ejerciciosPorDia) {
  const option = document.createElement("option");
  option.value = dia;
  option.textContent = dia;
  selectDia.appendChild(option);
}

// Seleccionar automáticamente el día actual si existe en la lista
const diaActual = obtenerDiaActual();
if (ejerciciosPorDia[diaActual]) {
  selectDia.value = diaActual;
}

// Escuchar cambios en el select y actualizar lista
selectDia.addEventListener("change", () => actualizarListaEjercicios());
actualizarListaEjercicios();

    // Actualizar la lista de ejercicios con el día seleccionado
    selectDia.addEventListener("change", () => actualizarListaEjercicios());
    actualizarListaEjercicios(); // Mostrar los ejercicios del primer día seleccionado
  }).catch(error => {
    console.log("Error al obtener los ejercicios:", error);
  });
});

// Función para obtener los ejercicios
const obtenerEjercicios = async (usuario) => {
  const url = 'https://script.google.com/macros/s/AKfycbxHJr_0GrSyShz0MmSTIWFL0ofaNwY3x40yj6gazkIvBzqQ3daqSG01lFz292opemUupA/exec';

  try {
    const response = await fetch(url + "?user=" + usuario);
    const data = await response.json();
    
    if (response.ok) {
      return data; // Devolver los ejercicios de este usuario
    } else {
      throw new Error('Error al obtener ejercicios');
    }
  } catch (error) {
    console.log("Error al obtener los ejercicios:", error);
  }
};

const selectDia = document.getElementById("select-dia");
const listaEjercicios = document.getElementById("ejercicios-lista");
const startWorkoutBtn = document.getElementById("start-workout");
const finishWorkoutBtn = document.getElementById("finish-workout");
const timerDisplay = document.getElementById("timer");

let timer;
let seconds = 0;
let ejerciciosPorDia = {}; // Definir la variable que organizará los ejercicios por día

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

  // aqui TODO igual Función para iniciar el entrenamiento
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
    const exerciseTable = document.getElementById("ejercicios-lista");
    const timerDisplay = document.getElementById("timer");
  
    const finishWorkoutBtn = document.getElementById("finish-workout");  // Corregido
  
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
  
      finishWorkoutBtn.style.display = todosMarcados && checkboxes.length > 0 ? "block" : "none";
    }
  
    // Finalizar entrenamiento
    
    
    finishButton.addEventListener("click", function () {
      console.log("Botón de finalizar clickeado"); // Depuración
  
      let totalTime = (Date.now() - startTime) / 1000;
      let fecha_inicio = new Date(startTime).toISOString(); // Formato correcto
      let fecha_fin = new Date().toISOString();
      let summaryMessage = `🏋️‍♂️ Resumen del entrenamiento:\n\n`;
  
      if (exerciseTimes.length === 0) {
          summaryMessage += "❌ No completaste ningún ejercicio.";
      } else {
          exerciseTimes.forEach((time, index) => {
              const ejercicio = ejerciciosPorDia[selectDia.value][index];
  
              summaryMessage += `${ejercicio.nombre}: ${time.toFixed(2)} segundos\n`;
  
              // Llamar a la función para insertar en Google Sheets
              enviarDatos(
                  usuario,  // Usuario registrado
                  fecha_inicio,
                  fecha_fin,
                  ejercicio.nombre,
                  ejercicio.grupo,
                  time.toFixed(2) // Segundos como series realizadas
              );
          });
  
          summaryMessage += `\n⏳ Tiempo total: ${totalTime.toFixed(2)} segundos`;
      }
  
      alert(summaryMessage);
      setTimeout(() => {
          window.location.reload();
      }, 1500);
  });
  
  });
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuContent = document.querySelector(".menu-content");
  
    menuToggle.addEventListener("click", function () {
      menuContent.style.display = menuContent.style.display === "block" ? "none" : "block";
    });
  
    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
      if (!menuToggle.contains(event.target) && !menuContent.contains(event.target)) {
        menuContent.style.display = "none";
      }
    });
  });
  

  //scrip insertar resumen dia 

  const enviarDatos = async (user, fecha_inicio, fecha_fin, ejercicio, grupo, series_realizadas) => {
    const url = 'https://script.google.com/macros/s/AKfycbxHJr_0GrSyShz0MmSTIWFL0ofaNwY3x40yj6gazkIvBzqQ3daqSG01lFz292opemUupA/exec';

    const datos = {
        user: user,
        fecha_inicio: fecha_inicio,
        fecha_fin: fecha_fin,
        ejercicio: ejercicio,
        grupo: grupo,
        series_realizadas: series_realizadas
    };

    console.log("Enviando datos a Google Sheets:", datos); // DEPURACIÓN

    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',  
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if (!response.ok) {
            throw new Error(`Error al enviar datos: ${response.status}`);
        }

        const data = await response.json();
        console.log("Datos enviados correctamente:", data);
    } catch (error) {
        console.error("Error al enviar los datos:", error);
    }
};

  
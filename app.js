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

    // Llenar el select con los días
    for (const dia in ejerciciosPorDia) {
      const option = document.createElement("option");
      option.value = dia;
      option.textContent = dia;
      selectDia.appendChild(option);
    }

    // Actualizar la lista de ejercicios con el día seleccionado
    selectDia.addEventListener("change", () => actualizarListaEjercicios());
    actualizarListaEjercicios(); // Mostrar los ejercicios del primer día seleccionado
  }).catch(error => {
    console.log("Error al obtener los ejercicios:", error);
  });
});

// Función para obtener los ejercicios
const obtenerEjercicios = async (usuario) => {
  const url = 'https://script.google.com/macros/s/AKfycbx0zMYbLTsRhlQtu-D5jCHW0S9bhDnJaxlZSSWJPL9HTeb82eJ6vAw3gPhxC3CvNckw/exec';

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
    const url = 'https://script.google.com/macros/s/AKfycbx0zMYbLTsRhlQtu-D5jCHW0S9bhDnJaxlZSSWJPL9HTeb82eJ6vAw3gPhxC3CvNckw/exec';
  
    const datos = {
        User: user,                   // ✅ Coincide con "User"
        date_star: fecha_inicio,      // ✅ Coincide con "date_star"
        date_finish: fecha_fin,       // ✅ Coincide con "date_finish"
        "Nombre ejercicio": ejercicio, // ✅ Coincide con "Nombre ejercicio"
        Grupo: grupo,                 // ✅ Coincide con "Grupo"
        Realizadas: series_realizadas // ✅ Coincide con "Realizadas"
      };      
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',  // 🔹 Habilita CORS
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
  
      const responseData = await response.text();
      console.log("Respuesta del servidor:", responseData);
  
      if (response.ok) {
        console.log("Datos enviados correctamente");
      } else {
        console.log("Hubo un error al enviar los datos");
      }
    } catch (error) {
      console.log("Error al enviar la solicitud:", error);
    }
  };
  

// Lista de ejercicios para cada día de la semana
const workouts = {
  lunes: [
    { name: "🏃‍♂️ Calentamiento en cinta", group: "-", series: "-", reps: "-", time: 5 },
    { name: "🔥 Press inclinado con mancuernas", group: "Pecho", series: 5, reps: "8-12", time: 12 },
    { name: "🔥 Aperturas con mancuernas", group: "Pecho", series: 4, reps: "10-12", time: 8 },
    // ... Agrega más ejercicios aquí
  ],
  // Agregar entrenamientos para los otros días de la semana
};

const today = new Date().toLocaleString('es-ES', { weekday: 'long' }).toLowerCase();
const workoutForToday = workouts[today];

let totalTime = 0;

function loadWorkout() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = "";

  workoutForToday.forEach(exercise => {
    const li = document.createElement('li');
    li.classList.add('exercise-item');

    li.innerHTML = `
      <input type="checkbox" class="exercise-checkbox" data-time="${exercise.time}">
      <span>${exercise.name} (${exercise.time} min)</span>
    `;

    mainContent.appendChild(li);
  });

  document.querySelectorAll('.exercise-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', updateTotalTime);
  });
}

function updateTotalTime() {
  totalTime = 0;
  const checkboxes = document.querySelectorAll('.exercise-checkbox:checked');
  checkboxes.forEach(checkbox => {
    totalTime += parseInt(checkbox.getAttribute('data-time'));
  });

  if (checkboxes.length === workoutForToday.length) {
    showSummary();
  }
}

function showSummary() {
  document.getElementById('total-time').textContent = `Tiempo total de entrenamiento: ${totalTime} min`;
  document.getElementById('summary').classList.remove('hidden');
}

function restartWorkout() {
  totalTime = 0;
  loadWorkout();
  document.getElementById('summary').classList.add('hidden');
}

// Cargar el entrenamiento del día al iniciar
loadWorkout();

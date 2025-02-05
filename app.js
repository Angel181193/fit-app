const ejercicios = {
  lunes: [
      { nombre: 'Press inclinado con mancuernas', grupo: 'Pecho' },
      { nombre: 'Aperturas con mancuernas', grupo: 'Pecho' },
      { nombre: 'Press plano con mancuernas', grupo: 'Pecho' },
      { nombre: 'Fondos en banco', grupo: 'Tríceps' },
      { nombre: 'Extensión de tríceps en polea', grupo: 'Tríceps' },
      { nombre: 'Crunch en polea', grupo: 'Abdomen' },
  ],
  martes: [
      { nombre: 'Remo con mancuerna', grupo: 'Espalda' },
      { nombre: 'Jalón al pecho', grupo: 'Espalda' },
      { nombre: 'Curl con barra', grupo: 'Bíceps' },
      { nombre: 'Curl martillo con mancuernas', grupo: 'Bíceps' },
      { nombre: 'Elevación de piernas colgado', grupo: 'Abdomen' },
  ],
  // Agrega los ejercicios de otros días aquí...
};

let tiempoInicio = 0;
let cronometroActivo = false;
let tiempoTotal = 0;

document.getElementById('dia-selector').addEventListener('change', actualizarEjercicios);

function actualizarEjercicios() {
  const diaSeleccionado = document.getElementById('dia-selector').value;
  const listaEjercicios = ejercicios[diaSeleccionado];
  const contenedorEjercicios = document.getElementById('entrenamientos');
  contenedorEjercicios.innerHTML = ''; // Limpiar ejercicios anteriores

  listaEjercicios.forEach(ejercicio => {
      const divEjercicio = document.createElement('div');
      divEjercicio.classList.add('entrenamiento');
      divEjercicio.innerHTML = `
          <h3>${ejercicio.nombre} - ${ejercicio.grupo}</h3>
          <div>
              <label>Completado: <input type="checkbox" class="completado"></label>
              <label>Series: <input type="number" class="series" min="0"></label>
          </div>
      `;
      contenedorEjercicios.appendChild(divEjercicio);
  });
}

function iniciarEntrenamiento() {
  if (!cronometroActivo) {
      cronometroActivo = true;
      tiempoInicio = Date.now();
      document.getElementById('iniciar-entrenamiento').innerText = "Detener Entrenamiento";
      actualizarTiempo();
  } else {
      cronometroActivo = false;
      document.getElementById('iniciar-entrenamiento').innerText = "Iniciar Entrenamiento";
      tiempoTotal += Math.floor((Date.now() - tiempoInicio) / 1000 / 60);
      document.getElementById('tiempo-total').innerText = `Tiempo Total: ${tiempoTotal} min`;
  }
}

function actualizarTiempo() {
  if (cronometroActivo) {
      const tiempoTranscurrido = Math.floor((Date.now() - tiempoInicio) / 1000);
      const minutos = Math.floor(tiempoTranscurrido / 60);
      const segundos = tiempoTranscurrido % 60;
      document.getElementById('tiempo').innerText = `${minutos}:${segundos.toString().padStart(2, '0')}`;
      setTimeout(actualizarTiempo, 1000);
  }
}

// Inicializa la página con los ejercicios del lunes por defecto
document.addEventListener('DOMContentLoaded', () => {
  actualizarEjercicios();
});

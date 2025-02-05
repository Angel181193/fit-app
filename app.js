document.addEventListener('DOMContentLoaded', function () {
  const diasEntrenamiento = [
    { nombre: "Lunes", ejercicios: [
        { nombre: "Calentamiento en cinta", grupoMuscular: "-", series: "-", reps: "-", tiempo: "5 min", completado: false },
        { nombre: "Press inclinado con mancuernas", grupoMuscular: "Pecho", series: 5, reps: "8-12", tiempo: "12 min", completado: false },
        { nombre: "Aperturas con mancuernas", grupoMuscular: "Pecho", series: 4, reps: "10-12", tiempo: "8 min", completado: false },
        // Agrega el resto de ejercicios
      ]
    },
    { nombre: "Martes", ejercicios: [
        { nombre: "Calentamiento en cinta", grupoMuscular: "-", series: "-", reps: "-", tiempo: "5 min", completado: false },
        { nombre: "Remo con mancuerna", grupoMuscular: "Espalda", series: 5, reps: "8-12", tiempo: "12 min", completado: false },
        // Agrega el resto de ejercicios
      ]
    },
    // Agrega los días restantes
  ];

  const diasElement = document.getElementById('dias');
  const finalizarDiaButton = document.getElementById('finalizar-dia');

  // Generar los ejercicios en la interfaz
  function renderizarEjercicios(dia) {
    return dia.ejercicios.map(ejercicio => {
      return `
        <div class="ejercicio">
          <h4>${ejercicio.nombre} (${ejercicio.grupoMuscular})</h4>
          <p>Series: ${ejercicio.series}, Reps: ${ejercicio.reps}, Tiempo: ${ejercicio.tiempo}</p>
          <button onclick="marcarEjercicio('${ejercicio.nombre}')">${ejercicio.completado ? 'Completado' : 'Marcar como Completado'}</button>
        </div>
      `;
    }).join('');
  }

  // Función para marcar un ejercicio como completado
  function marcarEjercicio(nombre) {
    diasEntrenamiento.forEach(dia => {
      dia.ejercicios.forEach(ejercicio => {
        if (ejercicio.nombre === nombre) {
          ejercicio.completado = !ejercicio.completado;
        }
      });
    });
    renderizar();
  }

  // Función para renderizar la vista actual
  function renderizar() {
    diasElement.innerHTML = diasEntrenamiento.map(dia => {
      return `
        <div class="dia">
          <h3>${dia.nombre}</h3>
          ${renderizarEjercicios(dia)}
        </div>
      `;
    }).join('');
  }

  // Finalizar día y mostrar resumen
  finalizarDiaButton.addEventListener('click', function() {
    const tiempoTotal = diasEntrenamiento.reduce((total, dia) => {
      dia.ejercicios.forEach(ejercicio => {
        if (ejercicio.completado) {
          const tiempo = parseInt(ejercicio.tiempo);
          if (!isNaN(tiempo)) total += tiempo;
        }
      });
      return total;
    }, 0);
    alert(`¡Has completado el día! Tiempo total de entrenamiento: ${tiempoTotal} minutos.`);
  });

  renderizar();
});

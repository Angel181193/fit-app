// Nuevo diseño mejorado con estilos modernos
import React, { useState, useEffect } from "react";
import "./styles.css";

const diasSemana = [
  "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
];

const ejerciciosPorDia = {
  Lunes: [
    { nombre: "Press banca", series: 4 },
    { nombre: "Aperturas con mancuernas", series: 3 },
    { nombre: "Fondos en paralelas", series: 3 },
  ],
  Martes: [
    { nombre: "Dominadas", series: 4 },
    { nombre: "Remo con mancuernas", series: 3 },
    { nombre: "Pull-over", series: 3 },
  ],
  Miércoles: [
    { nombre: "Sentadillas", series: 4 },
    { nombre: "Peso muerto", series: 3 },
    { nombre: "Zancadas", series: 3 },
  ],
  Jueves: [
    { nombre: "Press militar", series: 4 },
    { nombre: "Elevaciones laterales", series: 3 },
    { nombre: "Pájaros", series: 3 },
  ],
  Viernes: [
    { nombre: "Curl de bíceps", series: 4 },
    { nombre: "Martillo con mancuernas", series: 3 },
    { nombre: "Concentrado", series: 3 },
  ],
  Sábado: [
    { nombre: "Extensiones de tríceps", series: 4 },
    { nombre: "Patada de tríceps", series: 3 },
    { nombre: "Press francés", series: 3 },
  ],
  Domingo: [
    { nombre: "Descanso o cardio" },
  ],
};

const App = () => {
  const [diaSeleccionado, setDiaSeleccionado] = useState("Lunes");
  const [ejercicios, setEjercicios] = useState(ejerciciosPorDia["Lunes"]);
  const [entrenamientoActivo, setEntrenamientoActivo] = useState(false);
  const [tiempoInicio, setTiempoInicio] = useState(null);
  const [tiempoTotal, setTiempoTotal] = useState(0);

  useEffect(() => {
    setEjercicios(ejerciciosPorDia[diaSeleccionado]);
  }, [diaSeleccionado]);

  const iniciarEntrenamiento = () => {
    setEntrenamientoActivo(true);
    setTiempoInicio(Date.now());
  };

  const finalizarEntrenamiento = () => {
    setEntrenamientoActivo(false);
    setTiempoTotal((prev) => prev + (Date.now() - tiempoInicio));
  };

  return (
    <div className="container">
      <h1>Plan de Entrenamiento</h1>
      <select value={diaSeleccionado} onChange={(e) => setDiaSeleccionado(e.target.value)}>
        {diasSemana.map((dia) => (
          <option key={dia} value={dia}>{dia}</option>
        ))}
      </select>
      
      <div className="ejercicios-container">
        {ejercicios.map((ejercicio, index) => (
          <div key={index} className="ejercicio-card">
            <h3>{ejercicio.nombre}</h3>
            <p>Series: {ejercicio.series || "N/A"}</p>
          </div>
        ))}
      </div>
      
      {!entrenamientoActivo ? (
        <button onClick={iniciarEntrenamiento}>Iniciar Entrenamiento</button>
      ) : (
        <button onClick={finalizarEntrenamiento} className="finalizar">Finalizar Entrenamiento</button>
      )}
      <p>Tiempo total: {Math.floor(tiempoTotal / 1000)} segundos</p>
    </div>
  );
};

export default App;

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío por defecto

  // Obtener los valores de los campos de usuario y clave
  const usuarioInput = document.getElementById('usuario').value.trim();  // Corregido id
  const claveInput = document.getElementById('clave').value.trim();      // Corregido id

  // Mostrar mensaje de "verificando"
  document.getElementById('mensaje').innerText = "Verificando...";

  // Realizamos la solicitud a Google Apps Script para obtener los usuariosff

  fetch('https://script.google.com/macros/s/AKfycbyF4mnCsMpXSwxFfMyHnjI6axYnPwlaCp6wa8QUOoLGJKUinwlVQzM0hRfkln2HVNhqBA/exec')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();  // Intenta parsear la respuesta como JSON
  })
  .then(data => {
    console.log(data);  // Aquí obtienes el JSON
    if (data.status === 'success') {
      // Haz algo con la respuesta exitosa
      console.log('Usuario recibido:', data.message);
    } else {
      // Maneja el error en el frontend
      console.log('Error:', data.message);
    }
  })
    .catch(error => {
      console.error("Error al obtener datos:", error);
      document.getElementById('mensaje').innerText = "Error al conectar con el servidor.";
    });
});

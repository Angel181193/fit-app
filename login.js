document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío por defecto

  // Obtener los valores de los campos de usuario y clave
  const usuarioInput = document.getElementById('usuario').value.trim();  // Corregido id
  const claveInput = document.getElementById('clave').value.trim();      // Corregido id

  // Mostrar mensaje de "verificando"
  document.getElementById('mensaje').innerText = "Verificando...";

  // Realizamos la solicitud a Google Apps Script para obtener los usuarios
  fetch("https://script.google.com/macros/s/AKfycbx8YqVcGkcqz2XySnfhMqHo8ANWYhDVa3HfNYPmLzgCtFo7dtx5g3965LXlVviTqYZ52g/exec")  // Asegúrate de que esta URL esté correcta

    .then(response => response.json())
    .then(users => {
      // Buscamos al usuario válido
      const validUser = users.find(user =>
        user.Usuario.trim().toLowerCase() === usuarioInput.toLowerCase() &&
        user.Clave.trim() === claveInput
      );

      // Si encontramos un usuario válido, redirigimos
      if (validUser) {
        localStorage.setItem('usuarioLogueado', JSON.stringify(validUser));  // Guardamos el usuario logueado en localStorage
        window.location.href = "index.html";  // Redirige a la app principal
      } else {
        // Si el usuario o la clave no son correctos
        document.getElementById('mensaje').innerText = "Usuario o clave incorrectos.";
      }
    })
    .catch(error => {
      console.error("Error al obtener datos:", error);
      document.getElementById('mensaje').innerText = "Error al conectar con el servidor.";
    });
});

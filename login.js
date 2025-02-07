  // Escucha el envío del formulario de login
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío por defecto

  // Obtiene los valores ingresados
  const usuarioInput = document.getElementById('usuario').value.trim();
  const claveInput = document.getElementById('clave').value.trim();

  // Muestra un mensaje de "verificando" (opcional)
  document.getElementById('mensaje').innerText = "Verificando...";

  // Inicializa Tabletop para obtener los datos de la hoja "Users"
  Tabletop.init({
    key: '16bpy6cjdJTCpjmJAsQI8l6KPwiw8WwTbeErUwsNRigs',  // ID de tu Google Sheet
    simpleSheet: false,  // Usamos múltiples hojas
    wanted: ["Users"],   // Nombre de la hoja a usar
    callback: function(data, tabletop) {
      // data es un objeto que tendrá una propiedad "Users" con un array de objetos
      const users = data.Users;
      // Busca un usuario que coincida (se comparan sin distinguir mayúsculas/minúsculas)
      const validUser = users.find(function(u) {
        return u.Usuario.trim().toLowerCase() === usuarioInput.toLowerCase() &&
               u.Clave.trim() === claveInput;
      });
      
      if (validUser) {
        // Login correcto: guarda la información del usuario y redirige a la aplicación principal
        localStorage.setItem('usuarioLogueado', JSON.stringify(validUser));
        window.location.href = "index.html"; // Cambia "index.html" por la ruta de tu app principal
      } else {
        // Si no se encuentra, muestra un mensaje de error
        document.getElementById('mensaje').innerText = "Usuario o clave incorrectos.";
      }
    },
    parseNumbers: true
  });
});

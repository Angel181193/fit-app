document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío por defecto

  // Obtener los valores de los campos de usuario y clave
  const usuarioInput = document.getElementById('usuario').value.trim();  // Corregido id
  const claveInput = document.getElementById('clave').value.trim();      // Corregido id

  // Mostrar mensaje de "verificando"
  document.getElementById('mensaje').innerText = "Verificando...";

  // Realizamos la solicitud a Google Apps Script para obtener los usuariosff

fetch("https://script.google.com/macros/s/AKfycbwIHut9rfmxNIOgrDyprG3H1OwdiErOR7DR7WsNZuqoN09axngTM2MnwnzK1UvqXzGKaw/exec")
  .then(response => response.json())
  .then(users => {
    console.log("Usuarios obtenidos:", users); // Depura los usuarios obtenidos
    const validUser = users.find(user =>
      user.Usuario.trim().toLowerCase() === usuario.toLowerCase() && user.Clave.trim() === clave
    );
    if (validUser) {
      // Si encontramos al usuario válido
      localStorage.setItem('usuarioLogueado', JSON.stringify(validUser));
      window.location.href = "index.html";
    } else {
      document.getElementById('mensaje').textContent = "Credenciales incorrectas. Intenta de nuevo.";
    }

    })
    .catch(error => {
      console.error("Error al obtener datos:", error);
      document.getElementById('mensaje').innerText = "Error al conectar con el servidor.";
    });
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío por defecto
  
    // Obtiene los valores ingresados
    const usuarioInput = document.getElementById('usuario').value.trim();
    const claveInput = document.getElementById('clave').value.trim();
  
    // Muestra un mensaje de "verificando"
    document.getElementById('mensaje').innerText = "Verificando...";
  
    // URL de tu Google Apps Script
    const urlAPI = "https://script.google.com/macros/s/AKfycbwZfSM40lZHa81kP_9lh4JXzdySq3CsRCm_9WiUsUE0KNAOkSA4A15N3Zrqb9FMrT7zHw/exec";
  
    fetch(urlAPI)
      .then(response => response.json())
      .then(users => {
        console.log("Usuarios obtenidos:", users); // Para depurar en consola
  
        const validUser = users.find(user =>
          user.Usuario.trim().toLowerCase() === usuarioInput.toLowerCase() &&
          user.Clave.trim() === claveInput
        );
  
        if (validUser) {
          localStorage.setItem('usuarioLogueado', JSON.stringify(validUser));
          window.location.href = "index.html"; // Redirige a la app principal
        } else {
          document.getElementById('mensaje').innerText = "Usuario o clave incorrectos.";
        }
      })
      .catch(error => {
        console.error("Error al obtener datos:", error);
        document.getElementById('mensaje').innerText = "Error al conectar con el servidor.";
      });
  });
  
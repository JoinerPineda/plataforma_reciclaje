document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulación de credenciales
    const validUsername = "joiner";
    const validPassword = "reciclaje";

    if (username === validUsername && password === validPassword) {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("dashboardContainer").style.display = "block";
        document.getElementById("loginMessage").style.color = "green";
        document.getElementById("loginMessage").innerText = "Inicio de sesión exitoso. ¡Bienvenido!";
        // Cargar el panel de control
        loadDashboard();
    } else {
        document.getElementById("loginMessage").style.color = "red";
        document.getElementById("loginMessage").innerText = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
    }
});

function loadDashboard() {
    // Datos simulados
    const resumenReciclaje = {
        totalRecogidas: 5,
        totalResiduos: 15.5,
        co2Ahorrado: 7.8
    };

    const notificaciones = [
        "Tu solicitud de recogida para el 28 de octubre ha sido confirmada.",
        "Recuerda separar tus residuos correctamente para la próxima recogida.",
    ];

    // Carga de datos en el DOM
    document.getElementById("totalRecogidas").innerText = resumenReciclaje.totalRecogidas;
    document.getElementById("totalResiduos").innerText = resumenReciclaje.totalResiduos + " kg";
    document.getElementById("co2Ahorrado").innerText = resumenReciclaje.co2Ahorrado + " kg";

    // Cargar notificaciones
    const notificationList = document.getElementById("notificationList");
    notificationList.innerHTML = ""; // Limpia las notificaciones existentes
    notificaciones.forEach(notificacion => {
        const li = document.createElement("li");
        li.textContent = notificacion;
        notificationList.appendChild(li);
    });
}

// Funciones para accesos rápidos (estas podrían redirigir a otras secciones o páginas)
function requestPickup() {
    alert("Función de solicitud de recogida en desarrollo.");
}

function viewHistory() {
    alert("Función de historial de reciclaje en desarrollo.");
}

function findCenters() {
    alert("Función de centros de reciclaje en desarrollo.");
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = "joiner";
    const validPassword = "reciclaje";

    if (username === validUsername && password === validPassword) {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("dashboardContainer").style.display = "block";
        document.getElementById("loginMessage").style.color = "green";
        document.getElementById("loginMessage").innerText = "Inicio de sesión exitoso. ¡Bienvenido!";

        loadDashboard();
    } else {
        document.getElementById("loginMessage").style.color = "red";
        document.getElementById("loginMessage").innerText = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
    }
});

function loadDashboard() {

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

// Mostrar el formulario de solicitud de recogida
function requestPickup() {
    document.getElementById("dashboardContainer").style.display = "none";
    document.getElementById("pickupFormContainer").style.display = "block";
}

// Volver al panel de control
function goBackToDashboard() {
    document.getElementById("pickupFormContainer").style.display = "none";
    document.getElementById("dashboardContainer").style.display = "block";
}

// Manejo del formulario de solicitud de recogida
document.getElementById("pickupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const pickupDate = document.getElementById("pickupDate").value;
    const pickupLocation = document.getElementById("pickupLocation").value;
    const wasteType = document.getElementById("wasteType").value;

    // Guardar o enviar la solicitud (aquí simulamos la solicitud)
    console.log("Solicitud de recogida:", {
        fecha: pickupDate,
        ubicacion: pickupLocation,
        tipo: wasteType
    });

    // Mensaje de confirmación
    document.getElementById("pickupMessage").style.color = "green";
    document.getElementById("pickupMessage").innerText = "Solicitud de recogida confirmada. Gracias por reciclar!";

    // Limpiar el formulario después de la solicitud
    document.getElementById("pickupForm").reset();

    // Regresar al panel de control después de unos segundos
    setTimeout(() => {
        goBackToDashboard();
        document.getElementById("pickupMessage").innerText = "";
    }, 2000);
});

// Mostrar el historial de reciclaje
function showRecyclingHistory() {
    document.getElementById("dashboardContainer").style.display = "none";
    document.getElementById("recyclingHistoryContainer").style.display = "block";

    // Limpiar el contenido de la tabla antes de cargar datos
    const historyTableBody = document.getElementById("recyclingHistoryTable").querySelector("tbody");
    historyTableBody.innerHTML = "";

    // Cargar solicitudes de localStorage
    const history = JSON.parse(localStorage.getItem("recyclingHistory")) || [];

    // Agregar cada solicitud como una fila en la tabla
    history.forEach((request) => {
        const row = historyTableBody.insertRow();
        row.insertCell().innerText = request.fecha;
        row.insertCell().innerText = request.ubicacion;
        row.insertCell().innerText = request.tipo;
    });
}

// Guardar la solicitud en el historial
function saveToHistory(request) {
    const history = JSON.parse(localStorage.getItem("recyclingHistory")) || [];
    history.push(request);
    localStorage.setItem("recyclingHistory", JSON.stringify(history));
}

// Modificar el manejo del formulario de solicitud para almacenar en el historial
document.getElementById("pickupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const pickupDate = document.getElementById("pickupDate").value;
    const pickupLocation = document.getElementById("pickupLocation").value;
    const wasteType = document.getElementById("wasteType").value;

    // Crear una solicitud de recogida
    const request = {
        fecha: pickupDate,
        ubicacion: pickupLocation,
        tipo: wasteType
    };

    // Guardar en el historial
    saveToHistory(request);

    // Mensaje de confirmación
    document.getElementById("pickupMessage").style.color = "green";
    document.getElementById("pickupMessage").innerText = "Solicitud de recogida confirmada. Gracias por reciclar!";

    // Limpiar el formulario después de la solicitud
    document.getElementById("pickupForm").reset();

    // Regresar al panel de control después de unos segundos
    setTimeout(() => {
        goBackToDashboard();
        document.getElementById("pickupMessage").innerText = "";
    }, 2000);
});

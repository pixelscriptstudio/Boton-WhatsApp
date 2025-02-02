// Configuración personalizable
const config = {
    pulseInterval: 5000,    // Intervalo de la animación de pulso (ms)
    notificationDelay: 3000  // Retraso antes de mostrar la notificación (ms)
};

const whatsappButton = document.querySelector('.whatsapp-button');
const notificationBadge = document.querySelector('.notification-badge');

// Animación de pulso periódica
setInterval(() => {
    whatsappButton.style.animation = 'pulse 1s ease';
    setTimeout(() => {
        whatsappButton.style.animation = 'none';
    }, 1000);
}, config.pulseInterval);

// Ocultar notificación al hacer clic
whatsappButton.addEventListener('click', () => {
    notificationBadge.style.display = 'none';
});

// Mostrar notificación después de un delay
setTimeout(() => {
    notificationBadge.style.display = 'block';
}, config.notificationDelay);

// Detectar si es dispositivo móvil
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Ajustar el enlace para dispositivos móviles
if (isMobile) {
    whatsappButton.href = 'whatsapp://send?phone=573017454361&text=Hola,%20me%20gustaría%20obtener%20más%20información';
}
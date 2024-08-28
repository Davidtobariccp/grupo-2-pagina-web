// Carrusel de imágenes
const carouselImages = document.querySelector('.carousel-images');
const imageCount = document.querySelectorAll('.carousel-images img').length;
let index = 0;
const intervalTime = 5000; // 5 segundos

function changeImage() {
    index = (index + 1) % imageCount;
    carouselImages.style.transform = `translateX(-${index * 100 / imageCount}%)`;
}

// Cambia la imagen automáticamente cada 5 segundos
setInterval(changeImage, intervalTime);



// Inicialización del mapa
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.730610, lng: -73.935242 },
        zoom: 12
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones
    const viewMoreBtns = document.querySelectorAll('.view-more-btn');
    const heartBtns = document.querySelectorAll('.heart-btn');
    const buyBtns = document.querySelectorAll('.buy-btn');

    // Función para agregar efecto de "Ver Más"
    function handleViewMoreClick(event) {
        const button = event.target;
        button.classList.toggle('active');
        button.style.transform = 'scale(0.95)';
        button.style.transition = 'background-color 0.3s, transform 0.2s';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 300);
    }

    // Función para agregar efecto de "Favorito"
    function handleHeartClick(event) {
        const button = event.target;
        button.classList.toggle('active');
        button.style.transform = 'scale(0.95)';
        button.style.transition = 'background-color 0.3s, transform 0.2s';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 300);
    }

    // Función para agregar efecto de "Comprar"
    function handleBuyClick(event) {
        const button = event.target;
        button.classList.toggle('active');
        button.style.transform = 'scale(0.95)';
        button.style.transition = 'background-color 0.3s, transform 0.2s';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 300);
    }

    // Asigna los manejadores de eventos a los botones
    viewMoreBtns.forEach(btn => btn.addEventListener('click', handleViewMoreClick));
    heartBtns.forEach(btn => btn.addEventListener('click', handleHeartClick));
    buyBtns.forEach(btn => btn.addEventListener('click', handleBuyClick));
});
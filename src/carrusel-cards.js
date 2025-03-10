document.addEventListener("DOMContentLoaded", function () {
    const cards = ["card1", "card2", "card3"];
    let currentIndex = 0;
    
    // Función para actualizar la posición y visibilidad de las tarjetas con transición suave
    const updateCarousel = () => {
        cards.forEach((id, index) => {
            const card = document.getElementById(id);
            card.style.transition = "transform 0.5s ease-in-out";
            card.style.transform = `translateX(${(index - currentIndex) * 320}px)`;
            card.style.zIndex = index === currentIndex ? "30" : index < currentIndex ? "10" : "20";
        });
    };
    
    // Evento para mover las tarjetas hacia la izquierda
    document.querySelector(".left-arrow").addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
        updateCarousel();
    });
    
    // Evento para mover las tarjetas hacia la derecha
    document.querySelector(".right-arrow").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });
    
    // Inicializa el carrusel en la primera tarjeta
    updateCarousel();
});

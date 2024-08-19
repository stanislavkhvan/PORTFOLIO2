let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    // Обновляем индекс текущего слайда
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    // Перемещаем слайды
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;

    // Обновляем кнопки в зависимости от текущего слайда
    updateButtons();
}

function updateButtons() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (currentIndex === 0) {
        prevButton.disabled = true;  // Отключаем кнопку "Previous" на первом слайде
    } else {
        prevButton.disabled = false;
    }

    if (currentIndex === slides.children.length - 1) {
        nextButton.disabled = true;  // Отключаем кнопку "Next" на последнем слайде
    } else {
        nextButton.disabled = false;
    }
}

// Инициализация кнопок при загрузке
document.addEventListener("DOMContentLoaded", updateButtons);

const slideshow = document.getElementById('slideshow');
const slides = slideshow.querySelectorAll('img');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop kembali ke slide pertama
    slideshow.style.transform = `translateX(-${currentIndex * 100}%)`; // Geser ke kiri
}

// Jalankan slideshow setiap 3 detik
setInterval(nextSlide, 3000);
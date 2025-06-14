let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');

// Make sure slider width = number of slides * 100%
slider.style.width = `${slides.length * 100}%`;

// Ensure each slide is 100% width of container
slides.forEach(slide => {
  slide.style.width = `${100 / slides.length}%`;
});

function showSlide(index) {
  const offset = index * -100;
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Ensure first slide is shown after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');

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

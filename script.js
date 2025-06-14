let currentIndex = 0;

function showSlide(index) {
  const slider = document.getElementById('slider');
  const offset = index * -100;
  slider.style.transform = `translateX(${offset}%)`;
  console.log(`Showing slide ${index} → translateX(${offset}%)`);
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll('.slide');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slide');
  const slider = document.getElementById('slider');

  // Set the slider width to hold all slides
  slider.style.width = `${slides.length * 100}%`;

  // Set each slide to take up an equal portion
  slides.forEach(slide => {
    slide.style.width = `${100 / slides.length}%`;
  });

  // Attach event listeners for nav buttons
  document.querySelector('.nav-button.left').onclick = prevSlide;
  document.querySelector('.nav-button.right').onclick = nextSlide;

  // Show the first slide
  showSlide(currentIndex);
});

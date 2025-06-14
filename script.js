let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');

function showSlide(index) {
  const offset = index * -20; // 20% per slide since 5 slides = 500% container width
  slider.style.transform = `translateX(${offset}%)`;
  console.log(`Showing slide ${index} → translateX(${offset}%)`);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Initialize on page load
showSlide(currentIndex);

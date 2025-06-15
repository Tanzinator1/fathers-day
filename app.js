const imageContainer = document.querySelector(".image-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const totalImages = 68;
let x = 0;
const angle = 360 / totalImages;

prevBtn.addEventListener("click", () => {
  x += angle;
  rotate();
});

nextBtn.addEventListener("click", () => {
  x -= angle;
  rotate();
});

function rotate() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

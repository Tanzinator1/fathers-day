const imageContainer = document.getElementById("imageContainer");
const spans = Array.from(imageContainer.children);

const totalSlides = 68;
const groupSize = 20;
let currentGroup = 0;
let angle = 0;

function updateVisibleGroup() {
  spans.forEach((span, index) => {
    const group = Math.floor(index / groupSize);
    span.style.display = (group === currentGroup) ? "block" : "none";
  });
  angle = 0;
  imageContainer.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
}

function rotate(direction) {
  const currentGroupSlides = spans.slice(
    currentGroup * groupSize,
    Math.min((currentGroup + 1) * groupSize, totalSlides)
  );
  const steps = currentGroupSlides.length;
  const angleStep = 360 / steps;

  angle += direction * angleStep;

  if (angle > 360 || angle < -360) {
    if (direction === -1 && (currentGroup + 1) * groupSize < totalSlides) {
      currentGroup++;
    } else if (direction === 1 && currentGroup > 0) {
      currentGroup--;
    }
    updateVisibleGroup();
  } else {
    imageContainer.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
  }
}

document.getElementById("next").addEventListener("click", () => rotate(-1));
document.getElementById("prev").addEventListener("click", () => rotate(1));

// Init
updateVisibleGroup();

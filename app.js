const totalImages = 68;
let currentIndex = 1; // Start at photo1

const leftPanel = document.getElementById("left-panel");
const centerPanel = document.getElementById("center-panel");
const rightPanel = document.getElementById("right-panel");

function getFilename(index) {
  const filename = `photo${index}`;
  const extensions = ['.jpg', '.JPG', '.jpeg', '.JPEG'];
  for (const ext of extensions) {
    const path = `photos/${filename}${ext}`;
    if (imageExists(path)) return path;
  }
  return null;
}

// Synchronously check if an image exists
function imageExists(src) {
  const http = new XMLHttpRequest();
  http.open('HEAD', src, false);
  http.send();
  return http.status !== 404;
}

function updatePanels() {
  // Left panel (wrap from 1 to 68)
  const leftIndex = currentIndex === 1 ? totalImages : currentIndex - 1;
  const leftSrc = getFilename(leftIndex);
  leftPanel.innerHTML = `<img src="${leftSrc}" alt="Previous Image" />`;

  // Center panel
  const centerSrc = getFilename(currentIndex);
  centerPanel.innerHTML = `<img src="${centerSrc}" alt="Current Image" />`;

  // Right panel (wrap from 68 to 1)
  const rightIndex = currentIndex === totalImages ? 1 : currentIndex + 1;
  const rightSrc = getFilename(rightIndex);
  rightPanel.innerHTML = `<img src="${rightSrc}" alt="Next Image" />`;
}

// Navigation buttons
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = currentIndex === 1 ? totalImages : currentIndex - 1;
  updatePanels();
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = currentIndex === totalImages ? 1 : currentIndex + 1;
  updatePanels();
});

updatePanels();

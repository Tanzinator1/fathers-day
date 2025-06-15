const totalImages = 68;
let currentIndex = 0;

const leftPanel = document.getElementById("left-panel");
const centerPanel = document.getElementById("center-panel");
const rightPanel = document.getElementById("right-panel");

function getFilename(index) {
  const filename = `photo${index + 1}`;
  const extensions = ['.jpg', '.JPG', '.jpeg', '.JPEG'];
  for (const ext of extensions) {
    const path = `photos/${filename}${ext}`;
    if (imageExists(path)) return path;
  }
  return null;
}

// Preload and check if image exists
function imageExists(src) {
  const http = new XMLHttpRequest();
  http.open('HEAD', src, false);
  http.send();
  return http.status !== 404;
}

function updatePanels() {
  // Left
  const leftIndex = currentIndex === 0 ? 67 : currentIndex - 1;
  const leftSrc = getFilename(leftIndex);
  leftPanel.innerHTML = `<img src="${leftSrc}" alt="Previous Image" />`;

  // Center
  const centerSrc = getFilename(currentIndex);
  centerPanel.innerHTML = `<img src="${centerSrc}" alt="Current Image" />`;

  // Right
  const rightIndex = currentIndex === 67 ? 0 : currentIndex + 1;
  const rightSrc = getFilename(rightIndex);
  rightPanel.innerHTML = `<img src="${rightSrc}" alt="Next Image" />`;
}

document.getElementById("prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updatePanels();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
    updatePanels();
  }
});

updatePanels();

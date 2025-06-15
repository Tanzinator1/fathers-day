const totalImages = 67;
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
  if (currentIndex > 0) {
    const leftSrc = getFilename(currentIndex - 1);
    leftPanel.innerHTML = leftSrc ? `<img src="${leftSrc}" alt="Previous Image" />` : "";
  } else {
    leftPanel.innerHTML = "";
  }

  // Center
  const centerSrc = getFilename(currentIndex);
  centerPanel.innerHTML = centerSrc ? `<img src="${centerSrc}" alt="Current Image" />` : "";

  // Right
  if (currentIndex < totalImages - 1) {
    const rightSrc = getFilename(currentIndex + 1);
    rightPanel.innerHTML = rightSrc ? `<img src="${rightSrc}" alt="Next Image" />` : "";
  } else {
    rightPanel.innerHTML = "";
  }
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

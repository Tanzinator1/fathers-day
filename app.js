const totalImages = 68;
let currentIndex = 0;

const leftPanel = document.getElementById("left-panel");
const centerPanel = document.getElementById("center-panel");
const rightPanel = document.getElementById("right-panel");

// Captions: Replace these with your own
const captions = [
  "12/21/13 \nChristmas at grandmas", "9/24/16 \nTaking a break on the beach", "9/24/16 \nTrying to push me into the ocean...", "10/29/16 \nGo Badgers!!",
  "7/9/17 \nPhoto 1 of our trip to the Milwaukee Zoo", "7/9/17 \n Rhino hanging out with us at the zoo", "This is caption 7", "This is caption 8",
  "This is caption 9", "This is caption 10", "This is caption 11", "This is caption 12",
  "This is caption 13", "This is caption 14", "This is caption 15", "This is caption 16",
  "This is caption 17", "This is caption 18", "This is caption 19", "This is caption 20",
  "This is caption 21", "This is caption 22", "This is caption 23", "This is caption 24",
  "This is caption 25", "This is caption 26", "This is caption 27", "This is caption 28",
  "This is caption 29", "This is caption 30", "This is caption 31", "This is caption 32",
  "This is caption 33", "This is caption 34", "This is caption 35", "This is caption 36",
  "This is caption 37", "This is caption 38", "This is caption 39", "This is caption 40",
  "This is caption 41", "This is caption 42", "This is caption 43", "This is caption 44",
  "This is caption 45", "This is caption 46", "This is caption 47", "This is caption 48",
  "This is caption 49", "This is caption 50", "This is caption 51", "This is caption 52",
  "This is caption 53", "This is caption 54", "This is caption 55", "This is caption 56",
  "This is caption 57", "This is caption 58", "This is caption 59", "This is caption 60",
  "This is caption 61", "This is caption 62", "This is caption 63", "This is caption 64",
  "This is caption 65", "This is caption 66", "This is caption 67", "This is caption 68"
];

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
  // Left image
  const leftIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
  const leftSrc = getFilename(leftIndex);
  leftPanel.innerHTML = `<img src="${leftSrc}" alt="Previous Image" />
                         <p class="caption">${captions[leftIndex]}</p>`;

  // Center image
  const centerSrc = getFilename(currentIndex);
  centerPanel.innerHTML = `<img src="${centerSrc}" alt="Current Image" />
                           <p class="caption">${captions[currentIndex]}</p>`;

  // Right image
  const rightIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
  const rightSrc = getFilename(rightIndex);
  rightPanel.innerHTML = `<img src="${rightSrc}" alt="Next Image" />
                          <p class="caption">${captions[rightIndex]}</p>`;
}

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updatePanels();
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updatePanels();
});

updatePanels();

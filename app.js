const totalImages = 68;
let currentIndex = 1;

const leftPanel = document.getElementById("left-panel");
const centerPanel = document.getElementById("center-panel");
const rightPanel = document.getElementById("right-panel");

const captions = [
  "", // index 0 unused
  "Happy Father's Day!",
  "Throwback to this moment",
  "Another great memory",
  "Family time at its best",
  "Unforgettable smile",
  "Proud moment together",
  "Relaxing Sunday",
  "Adventure day",
  "Graduation day",
  "Picnic in the park",
  "Sunset memories",
  "Road trip fun",
  "Barbecue master",
  "Holiday cheer",
  "Laughs and love",
  "Home sweet home",
  "Lake day",
  "Camping trip",
  "Winter wonderland",
  "Birthday celebration",
  "Cooking together",
  "First steps",
  "Catching fish",
  "Playing catch",
  "Game night",
  "DIY project",
  "Hiking trail",
  "Movie night",
  "Cheers to you!",
  "Poolside chill",
  "Classic car show",
  "Backyard memories",
  "Father's wisdom",
  "Sweet family moment",
  "Nature walk",
  "Smiles all around",
  "Puppy love",
  "You and me",
  "Relaxed and happy",
  "Silly faces",
  "Vacation vibes",
  "At the fair",
  "Birthday cake",
  "Goofing off",
  "Look at us",
  "Making memories",
  "Old times",
  "Festive spirit",
  "Long drive",
  "Campfire night",
  "Always there",
  "Picnic table",
  "Fall colors",
  "Lighthouse stop",
  "Playground fun",
  "Dad jokes incoming",
  "Chilling out",
  "Another favorite",
  "Sunshine and smiles",
  "Fishing dock",
  "Holiday hug",
  "Together always",
  "Bonding moment",
  "Celebration time",
  "Surprise party",
  "Dinner time",
  "Captured forever",
  "Baking fun",
  "Joyful day",
  "Endless love",
  "Final photo"
];

function getFilename(index) {
  const filename = `photo${index}`;
  const extensions = ['.jpg', '.JPG', '.jpeg', '.JPEG'];
  for (const ext of extensions) {
    const path = `photos/${filename}${ext}`;
    if (imageExists(path)) return path;
  }
  return null;
}

function imageExists(src) {
  const http = new XMLHttpRequest();
  http.open('HEAD', src, false);
  http.send();
  return http.status !== 404;
}

function updatePanels() {
  const leftIndex = currentIndex === 1 ? totalImages : currentIndex - 1;
  const centerSrc = getFilename(currentIndex);
  const leftSrc = getFilename(leftIndex);
  const rightIndex = currentIndex === totalImages ? 1 : currentIndex + 1;
  const rightSrc = getFilename(rightIndex);

  [leftPanel, centerPanel, rightPanel].forEach(panel => {
    panel.style.opacity = 0;
  });

  setTimeout(() => {
    leftPanel.innerHTML = `
      <img src="${leftSrc}" alt="Previous Image" />
      <p class="caption">${captions[leftIndex] || ""}</p>
    `;
    centerPanel.innerHTML = `
      <img src="${centerSrc}" alt="Current Image" />
      <p class="caption">${captions[currentIndex] || ""}</p>
    `;
    rightPanel.innerHTML = `
      <img src="${rightSrc}" alt="Next Image" />
      <p class="caption">${captions[rightIndex] || ""}</p>
    `;
    [leftPanel, centerPanel, rightPanel].forEach(panel => {
      panel.style.opacity = 1;
    });
  }, 200);
}

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = currentIndex === 1 ? totalImages : currentIndex - 1;
  updatePanels();
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = currentIndex === totalImages ? 1 : currentIndex + 1;
  updatePanels();
});

updatePanels();

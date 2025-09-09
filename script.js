// ===============================
// Part 2: Functions & Scope Example
// ===============================

// Global variable
let moveDistance = 50;

// Function to move the box by a certain number of pixels
function moveBox(element, distance) {
  // Local variable
  let currentTransform = element.style.transform || "translateX(0px)";
  let currentX = parseInt(currentTransform.replace("translateX(", "").replace("px)", ""));
  
  // Update position
  let newX = currentX + distance;
  element.style.transform = `translateX(${newX}px)`;
  
  return newX; // return value demonstrates function output
}

// ===============================
// Part 3: Trigger Box Animation
// ===============================
const box = document.getElementById("box");
const moveBoxBtn = document.getElementById("moveBoxBtn");

moveBoxBtn.addEventListener("click", () => {
  // Using function with parameter & return value
  const newPos = moveBox(box, moveDistance);
  console.log("Box moved to:", newPos, "px");
});

// ===============================
// Part 4: Card Flip Animation
// ===============================
const card = document.querySelector(".card");

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

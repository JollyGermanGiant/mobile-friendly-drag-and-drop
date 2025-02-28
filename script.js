// List of sentences for the game
const sentences = [
    "Ich habe einen Hund.", 
    "Der Himmel ist blau.", 
    "Wir gehen ins Kino.", 
    "Das Essen schmeckt gut.",
    "Sie spielt gerne Fußball."
];

let currentSentence = "";
let words = [];
let score = 0;
let lives = 10;
let completedSentences = 0;

// Select elements
const sentenceTarget = document.getElementById("sentence-target");
const wordBank = document.getElementById("word-bank");
const dropZone = document.getElementById("drop-zone");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const messageDisplay = document.getElementById("message");

// Initialize Game
function startGame() {
    if (completedSentences >= 15) {
        messageDisplay.textContent = "🎉 You won the game!";
        return;
    }

    dropZone.innerHTML = "";
    wordBank.innerHTML = "";
    messageDisplay.textContent = "";

    // Pick a random sentence
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    words = currentSentence.split(" ").sort(() => Math.random() - 0.5);

    // Display target sentence (with underscores)
    sentenceTarget.textContent = "_ ".repeat(words.length).trim();

    // Create draggable words
    words.forEach(word => {
        let wordEl = document.createElement("div");
        wordEl.textContent = word;
        wordEl.classList.add("word");
        wordEl.setAttribute("draggable", true);
        wordEl.addEventListener("dragstart", dragStart);
        wordBank.appendChild(wordEl);
    });

    // Create drop slots
    words.forEach((_, index) => {
        let slot = document.createElement("div");
        slot.classList.add("word");
        slot.dataset.index = index;
        slot.addEventListener("dragover", dragOver);
        slot.addEventListener("drop", drop);
        dropZone.appendChild(slot);
    });
}

// Drag & Drop Functions
function dragStart(event) {
    event.dataTransfer.setData("text", event.target.textContent);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let droppedWord = event.dataTransfer.getData("text");
    let correctWord = currentSentence.split(" ")[event.target.dataset.index];

    if (droppedWord === correctWord) {
        event.target.textContent = droppedWord;
        event.target.classList.add("correct");
        checkCompletion();
    } else {
        lives--;
        livesDisplay.textContent = lives;
        if (lives <= 0) {
            messageDisplay.textContent = "❌ Game Over!";
            return;
        }
    }
}

// Check if sentence is completed
function checkCompletion() {
    let completed = [...dropZone.children].every((slot, i) => slot.textContent === currentSentence.split(" ")[i]);

    if (completed) {
        score += 10;
        completedSentences++;
        scoreDisplay.textContent = score;
        messageDisplay.textContent = "✅ Correct! Next sentence...";
        setTimeout(startGame, 1500);
    }
}

// Start game on load
startGame();
let isTouchDevice = 'ontouchstart' in document.documentElement; // Check for touch devices

// Define events for both mouse and touch
let startEvent = isTouchDevice ? 'touchstart' : 'mousedown';
let moveEvent = isTouchDevice ? 'touchmove' : 'mousemove';
let endEvent = isTouchDevice ? 'touchend' : 'mouseup';

// Example: Add event listeners for drag
function initDragAndDrop() {
  const draggableElements = document.querySelectorAll('.word');
  const dropZones = document.querySelectorAll('.drop-zone');

  draggableElements.forEach(el => {
    el.addEventListener(startEvent, handleDragStart);
    el.addEventListener(moveEvent, handleDragMove);
    el.addEventListener(endEvent, handleDragEnd);
  });
}

// Variables for tracking drag position
let draggedElement = null;
let offsetX, offsetY;

function handleDragStart(e) {
  draggedElement = this;
  const event = e.type === 'touchstart' ? e.touches[0] : e;
  offsetX = event.clientX - draggedElement.getBoundingClientRect().left;
  offsetY = event.clientY - draggedElement.getBoundingClientRect().top;
}

function handleDragMove(e) {
  if (!draggedElement) return;
  const event = e.type === 'touchmove' ? e.touches[0] : e;
  draggedElement.style.position = 'absolute';
  draggedElement.style.left = `${event.clientX - offsetX}px`;
  draggedElement.style.top = `${event.clientY - offsetY}px`;
}

function handleDragEnd(e) {
  if (!draggedElement) return;
  const event = e.type === 'touchend' ? e.changedTouches[0] : e;

  const dropZones = document.querySelectorAll('.drop-zone');
  dropZones.forEach(zone => {
    const rect = zone.getBoundingClientRect();
    if (event.clientX >= rect.left && event.clientX <= rect.right &&
        event.clientY >= rect.top && event.clientY <= rect.bottom) {
      zone.appendChild(draggedElement);
      draggedElement.style.position = 'static'; // Reset the position
    }
  });

  draggedElement = null; // Reset the dragged element after drop
}

// Initialize drag-and-drop functionality
initDragAndDrop();

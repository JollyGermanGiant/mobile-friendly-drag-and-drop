let lives = 10;
let score = 0;

// German complete sentences where the words will be dragged to the right spots
const sentences = [
  { sentence: "Wir können heute Deutsch sprechen.", words: ["Wir", "können", "heute", "Deutsch", "sprechen"] },
  { sentence: "Ich möchte ins Kino gehen.", words: ["Ich", "möchte", "ins", "Kino", "gehen"] },
  { sentence: "Sie müssen morgen arbeiten.", words: ["Sie", "müssen", "morgen", "arbeiten"] },
  { sentence: "Er soll das Buch lesen.", words: ["Er", "soll", "das", "Buch", "lesen"] },
  { sentence: "Du darfst nicht spät kommen.", words: ["Du", "darfst", "nicht", "spät", "kommen"] },
  { sentence: "Wir wollen in den Park gehen.", words: ["Wir", "wollen", "in", "den", "Park", "gehen"] },
  { sentence: "Ich kann gut schwimmen.", words: ["Ich", "kann", "gut", "schwimmen"] },
  { sentence: "Sie will ein neues Auto kaufen.", words: ["Sie", "will", "ein", "neues", "Auto", "kaufen"] },
  { sentence: "Du sollst leise sein.", words: ["Du", "sollst", "leise", "sein"] },
  { sentence: "Er darf keinen Zucker essen.", words: ["Er", "darf", "keinen", "Zucker", "essen"] }
];

let currentSentence = getRandomSentence();
let shuffledWords = shuffle(currentSentence.words);

// Render the sentence and draggable words
document.getElementById('sentence').innerHTML = currentSentence.sentence;
document.getElementById('draggable-words').innerHTML = shuffledWords.map(word => 
  `<div class="word" id="${word}" draggable="true">${word}</div>`).join(' ');

// Render the drop zones
const dropZoneContainer = document.getElementById('dropZoneContainer');
dropZoneContainer.innerHTML = currentSentence.words.map((word, index) => 
  `<div class="drop-zone" id="drop-zone-${index}" data-correct="${word}"></div>`).join(' ');

const dropZones = document.querySelectorAll(".drop-zone");

document.addEventListener("DOMContentLoaded", () => {
  const draggableWords = document.querySelectorAll(".word");
  draggableWords.forEach(word => {
    word.addEventListener("dragstart", handleDragStart);
  });

  dropZones.forEach(dropZone => {
    dropZone.addEventListener("dragover", handleDragOver);
    dropZone.addEventListener("drop", handleDrop);
  });
});

function handleDragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const wordId = event.dataTransfer.getData("text");
  const wordElement = document.getElementById(wordId);
  const targetZone = event.target;

  if (targetZone.classList.contains("drop-zone") && !targetZone.hasChildNodes()) {
    targetZone.appendChild(wordElement);

    // Check if word is placed correctly
    if (targetZone.dataset.correct === wordId) {
      score += 10;
      playCorrectSound();
    } else {
      lives -= 1;
      playIncorrectSound();
      resetWordPosition(wordElement);
    }

    updateScore();
    updateLives();

    checkGameOver();
  }
}

function updateScore() {
  document.getElementById("score").textContent = score;
}

function updateLives() {
  document.getElementById("lives").textContent = lives;
}

function playCorrectSound() {
  const audio = new Audio("correct-sound.mp3");
  audio.play();
}

function playIncorrectSound() {
  const audio = new Audio("incorrect-sound.mp3");
  audio.play();
}

function resetWordPosition(wordElement) {
  const originalWord = document.getElementById(wordElement.id);
  originalWord.style.display = "inline-block";
}

function checkGameOver() {
  if (lives <= 0) {
    alert("Game Over! You lost!");
    resetGame();
  } else if (score === currentSentence.words.length * 10) {
    alert("Congratulations! You completed the sentence!");
    resetGame();
  }
}

function resetGame() {
  lives = 10;
  score = 0;
  updateLives();
  updateScore();
  currentSentence = getRandomSentence();
  shuffledWords = shuffle(currentSentence.words);
  document.getElementById('sentence').innerHTML = currentSentence.sentence;
  document.getElementById('draggable-words').innerHTML = shuffledWords.map(word => 
    `<div class="word" id="${word}" draggable="true">${word}</div>`).join(' ');

  dropZoneContainer.innerHTML = currentSentence.words.map((word, index) => 
    `<div class="drop-zone" id="drop-zone-${index}" data-correct="${word}"></div>`).join(' ');
}

function getRandomSentence() {
  return sentences[Math.floor(Math.random() * sentences.length)];
}

function shuffle(array) {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

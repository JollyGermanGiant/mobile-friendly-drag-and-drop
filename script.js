// Shuffle function to randomize word order in the word bank
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Sentence list (German modal verbs)
let sentences = [
    { full: "Wir können heute Deutsch sprechen.", words: ["Wir", "können", "heute", "Deutsch", "sprechen."] },
    { full: "Du sollst dein Zimmer aufräumen.", words: ["Du", "sollst", "dein", "Zimmer", "aufräumen."] },
    { full: "Er muss jeden Tag früh aufstehen.", words: ["Er", "muss", "jeden", "Tag", "früh", "aufstehen."] },
    { full: "Ich will in Deutschland arbeiten.", words: ["Ich", "will", "in", "Deutschland", "arbeiten."] },
    { full: "Sie dürfen hier nicht rauchen.", words: ["Sie", "dürfen", "hier", "nicht", "rauchen."] },
    { full: "Wir möchten eine Pizza essen.", words: ["Wir", "möchten", "eine", "Pizza", "essen."] },
    { full: "Ihr könnt sehr gut tanzen.", words: ["Ihr", "könnt", "sehr", "gut", "tanzen."] },
    { full: "Kannst du mir helfen?", words: ["Kannst", "du", "mir", "helfen?"] },
    { full: "Sie muss heute lange arbeiten.", words: ["Sie", "muss", "heute", "lange", "arbeiten."] },
    { full: "Ich darf nach der Schule fernsehen.", words: ["Ich", "darf", "nach", "der", "Schule", "fernsehen."] }
];

// Game variables
let score = 0;
let lives = 10;
let currentSentenceIndex = 0;
let wordPositions = {}; // Store original word positions

// Load sentence and generate draggable words
function loadNextSentence() {
    if (currentSentenceIndex < sentences.length) {
        let sentenceObj = sentences[currentSentenceIndex];
        displaySentence(sentenceObj);
        currentSentenceIndex++;
    } else {
        alert("🎉 Glückwunsch! Du hast das Spiel gewonnen! 🎉");
        resetGame();
    }
}

// Function to display sentence words as draggable elements
function displaySentence(sentenceObj) {
    let wordBank = document.getElementById("word-bank");
    let answerZone = document.getElementById("answer-zone");
    
    wordBank.innerHTML = "";  // Clear previous words
    answerZone.innerHTML = ""; // Clear previous answer boxes
    wordPositions = {}; // Reset stored word positions

    let words = [...sentenceObj.words];

    // Shuffle words in word bank, but keep answer boxes in original order
    let shuffledWords = [...words];
    shuffleArray(shuffledWords);

    shuffledWords.forEach((word, index) => {
        // Create draggable word element
        let wordElement = document.createElement("div");
        wordElement.classList.add("draggable-word");
        wordElement.textContent = word;
        wordElement.setAttribute("draggable", "true");
        wordElement.dataset.index = words.indexOf(word); // Store correct order position
        wordElement.id = "word-" + words.indexOf(word);

        // Store initial positions
        wordPositions[wordElement.id] = { parent: wordBank, element: wordElement };

        wordElement.addEventListener("dragstart", dragStart);
        wordElement.addEventListener("dragend", dragEnd);
        wordBank.appendChild(wordElement);
    });

    // Create answer boxes in the original order
    words.forEach((_, index) => {
        let answerBox = document.createElement("div");
        answerBox.classList.add("answer-box");
        answerBox.dataset.index = index; // Correct position for this answer box
        answerBox.addEventListener("dragover", dragOver);
        answerBox.addEventListener("drop", dropWord);

        answerZone.appendChild(answerBox);
    });
}

// Drag-and-drop event functions
function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function dropWord(event) {
    event.preventDefault();
    let draggedWordId = event.dataTransfer.getData("text");
    let draggedWordElement = document.getElementById(draggedWordId);
    let draggedWordIndex = draggedWordElement.dataset.index;
    let correctIndex = event.target.dataset.index;

    if (draggedWordIndex === correctIndex && event.target.textContent === "") {
        event.target.textContent = draggedWordElement.textContent;
        draggedWordElement.remove(); // Remove word from word bank on correct placement
        score += 10;
        document.getElementById("score").textContent = score;

        checkSentenceCompletion();
    } else {
        alert("❌ Falsche Position! Das Wort wird zurückgesetzt.");
        returnWordToBank(draggedWordElement);
        lives--;
        document.getElementById("lives").textContent = lives;

        if (lives <= 0) {
            alert("❌ Alle Leben verloren! Das Spiel wird neu gestartet.");
            resetGame();
        }
    }
}

// Reset words back to original location if dropped incorrectly
function returnWordToBank(wordElement) {
    let originalParent = wordPositions[wordElement.id].parent;
    originalParent.appendChild(wordElement);
}

// When dragging ends, check if it was dropped incorrectly and return if needed
function dragEnd(event) {
    let wordElement = event.target;
    if (!document.body.contains(wordElement)) return; // If word is already placed, ignore
    returnWordToBank(wordElement);
}

// Check if the sentence is fully completed
function checkSentenceCompletion() {
    let answerBoxes = document.querySelectorAll(".answer-box");
    let allFilled = Array.from(answerBoxes).every(box => box.textContent !== "");
    
    if (allFilled) {
        setTimeout(() => {
            alert("✅ Satz vervollständigt! Gut gemacht!");
            loadNextSentence();
        }, 500);
    }
}

// Reset the game
function resetGame() {
    score = 0;
    lives = 10;
    currentSentenceIndex = 0;
    shuffleArray(sentences);
    document.getElementById("score").textContent = score;
    document.getElementById("lives").textContent = lives;
    loadNextSentence();
}

// Start the game
document.addEventListener("DOMContentLoaded", () => {
    shuffleArray(sentences);
    loadNextSentence();
});
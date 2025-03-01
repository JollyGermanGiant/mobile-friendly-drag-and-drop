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
    { full: "Er muss jeden Tag früh aufstehen.", words: ["Er", "muss", "jeden", "Tag", "früh", "aufstehen."] }
];

let score = 0;
let lives = 10;
let currentSentenceIndex = 0;

// Load the next sentence
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

function displaySentence(sentenceObj) {
    let wordBank = document.getElementById("word-bank");
    let answerZone = document.getElementById("answer-zone");
    
    wordBank.innerHTML = "";
    answerZone.innerHTML = "";

    let words = [...sentenceObj.words];
    let shuffledWords = [...words];
    shuffleArray(shuffledWords);

    shuffledWords.forEach((word, index) => {
        let wordElement = document.createElement("div");
        wordElement.classList.add("draggable-word");
        wordElement.textContent = word;
        wordElement.setAttribute("draggable", "true");
        wordElement.dataset.index = words.indexOf(word);

        wordElement.addEventListener("dragstart", dragStart);
        wordElement.addEventListener("touchstart", touchStart);
        wordElement.addEventListener("touchmove", touchMove);
        wordElement.addEventListener("touchend", touchEnd);

        wordBank.appendChild(wordElement);
    });

    words.forEach((_, index) => {
        let answerBox = document.createElement("div");
        answerBox.classList.add("answer-box");
        answerBox.dataset.index = index;
        answerBox.addEventListener("dragover", dragOver);
        answerBox.addEventListener("drop", dropWord);
        answerZone.appendChild(answerBox);
    });
}

// Drag and drop functions
function dragStart(event) {
    event.dataTransfer.setData("text", event.target.dataset.index);
}

function dragOver(event) {
    event.preventDefault();
}

function dropWord(event) {
    event.preventDefault();
    let draggedIndex = event.dataTransfer.getData("text");
    let correctIndex = event.target.dataset.index;

    let draggedWord = document.querySelector(`[data-index='${draggedIndex}']`);

    if (draggedIndex === correctIndex) {
        event.target.textContent = draggedWord.textContent;
        draggedWord.remove();
        score += 10;
        document.getElementById("score").textContent = score;
        checkSentenceCompletion();
    } else {
        lives--;
        document.getElementById("lives").textContent = lives;
        if (lives <= 0) {
            alert("❌ Alle Leben verloren! Spiel startet neu.");
            resetGame();
        }
    }
}

// Mobile touch support
function touchStart(event) {
    event.target.style.opacity = "0.5";
}

function touchMove(event) {
    event.preventDefault();
}

function touchEnd(event) {
    event.target.style.opacity = "1";
}

function checkSentenceCompletion() {
    let allFilled = [...document.querySelectorAll(".answer-box")].every(box => box.textContent !== "");
    if (allFilled) {
        setTimeout(() => {
            alert("✅ Satz vervollständigt! Gut gemacht!");
            loadNextSentence();
        }, 500);
    }
}

function resetGame() {
    score = 0;
    lives = 10;
    currentSentenceIndex = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("lives").textContent = lives;
    loadNextSentence();
}

document.addEventListener("DOMContentLoaded", () => {
    loadNextSentence();
});

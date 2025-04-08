// Shuffle function to randomize word order in the word bank
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Sentence list (German modal verbs)
let sentences = [
let sentences = [
    { full: "Ich kann gut schwimmen.", words: ["Ich", "kann", "gut", "schwimmen."] },
    { full: "Du musst deine Hausaufgaben machen.", words: ["Du", "musst", "deine", "Hausaufgaben", "machen."] },
    { full: "Er darf heute fernsehen.", words: ["Er", "darf", "heute", "fernsehen."] },
    { full: "Wir sollen leise sein.", words: ["Wir", "sollen", "leise", "sein."] },
    { full: "Ihr wollt ins Kino gehen.", words: ["Ihr", "wollt", "ins", "Kino", "gehen."] },
    { full: "Sie möchten ein Eis essen.", words: ["Sie", "möchten", "ein", "Eis", "essen."] },
    { full: "Kannst du mir helfen?", words: ["Kannst", "du", "mir", "helfen?"] },
    { full: "Ich muss zur Schule gehen.", words: ["Ich", "muss", "zur", "Schule", "gehen."] },
    { full: "Er kann Gitarre spielen.", words: ["Er", "kann", "Gitarre", "spielen."] },
    { full: "Wir dürfen nicht laut sprechen.", words: ["Wir", "dürfen", "nicht", "laut", "sprechen."] },
    { full: "Du sollst gesund essen.", words: ["Du", "sollst", "gesund", "essen."] },
    { full: "Ich will nach Hause gehen.", words: ["Ich", "will", "nach", "Hause", "gehen."] },
    { full: "Sie müssen pünktlich sein.", words: ["Sie", "müssen", "pünktlich", "sein."] },
    { full: "Kann ich mitkommen?", words: ["Kann", "ich", "mitkommen?"] },
    { full: "Wir möchten einen Hund haben.", words: ["Wir", "möchten", "einen", "Hund", "haben."] },
    { full: "Darf ich eine Frage stellen?", words: ["Darf", "ich", "eine", "Frage", "stellen?"] },
    { full: "Ihr müsst besser zuhören.", words: ["Ihr", "müsst", "besser", "zuhören."] },
    { full: "Er will Arzt werden.", words: ["Er", "will", "Arzt", "werden."] },
    { full: "Ich kann Deutsch sprechen.", words: ["Ich", "kann", "Deutsch", "sprechen."] },
    { full: "Du darfst nicht rauchen.", words: ["Du", "darfst", "nicht", "rauchen."] },
    { full: "Wir sollen mehr üben.", words: ["Wir", "sollen", "mehr", "üben."] },
    { full: "Ich möchte nach Berlin reisen.", words: ["Ich", "möchte", "nach", "Berlin", "reisen."] },
    { full: "Kann er schwimmen?", words: ["Kann", "er", "schwimmen?"] },
    { full: "Sie darf hier nicht parken.", words: ["Sie", "darf", "hier", "nicht", "parken."] },
    { full: "Ich muss morgen arbeiten.", words: ["Ich", "muss", "morgen", "arbeiten."] },
    { full: "Ihr wollt eine Party machen.", words: ["Ihr", "wollt", "eine", "Party", "machen."] },
    { full: "Wir können das Problem lösen.", words: ["Wir", "können", "das", "Problem", "lösen."] },
    { full: "Du musst leise sprechen.", words: ["Du", "musst", "leise", "sprechen."] },
    { full: "Er soll das Buch lesen.", words: ["Er", "soll", "das", "Buch", "lesen."] },
    { full: "Kannst du das erklären?", words: ["Kannst", "du", "das", "erklären?"] },
    { full: "Ich möchte ein neues Fahrrad kaufen.", words: ["Ich", "möchte", "ein", "neues", "Fahrrad", "kaufen."] },
    { full: "Sie will Ärztin werden.", words: ["Sie", "will", "Ärztin", "werden."] },
    { full: "Wir müssen früh aufstehen.", words: ["Wir", "müssen", "früh", "aufstehen."] },
    { full: "Ich darf das nicht tun.", words: ["Ich", "darf", "das", "nicht", "tun."] },
    { full: "Er möchte Pizza essen.", words: ["Er", "möchte", "Pizza", "essen."] },
    { full: "Du kannst gut zeichnen.", words: ["Du", "kannst", "gut", "zeichnen."] },
    { full: "Ich will mehr lernen.", words: ["Ich", "will", "mehr", "lernen."] },
    { full: "Sie dürfen nicht stören.", words: ["Sie", "dürfen", "nicht", "stören."] },
    { full: "Kann ich mit dir sprechen?", words: ["Kann", "ich", "mit", "dir", "sprechen?"] },
    { full: "Wir wollen ins Theater gehen.", words: ["Wir", "wollen", "ins", "Theater", "gehen."] },
    { full: "Er darf ins Museum gehen.", words: ["Er", "darf", "ins", "Museum", "gehen."] },
    { full: "Ich muss meine Eltern anrufen.", words: ["Ich", "muss", "meine", "Eltern", "anrufen."] },
    { full: "Du sollst die Wahrheit sagen.", words: ["Du", "sollst", "die", "Wahrheit", "sagen."] },
    { full: "Sie möchte ein Buch schreiben.", words: ["Sie", "möchte", "ein", "Buch", "schreiben."] },
    { full: "Kannst du Klavier spielen?", words: ["Kannst", "du", "Klavier", "spielen?"] },
    { full: "Ich darf heute Abend ausgehen.", words: ["Ich", "darf", "heute", "Abend", "ausgehen."] },
    { full: "Wir müssen noch einkaufen.", words: ["Wir", "müssen", "noch", "einkaufen."] },
    { full: "Ihr sollt pünktlich kommen.", words: ["Ihr", "sollt", "pünktlich", "kommen."] },
    { full: "Ich will das nicht machen.", words: ["Ich", "will", "das", "nicht", "machen."] },
    { full: "Kann er Auto fahren?", words: ["Kann", "er", "Auto", "fahren?"] },
    { full: "Sie muss das verstehen.", words: ["Sie", "muss", "das", "verstehen."] },
    { full: "Wir dürfen nicht zu spät kommen.", words: ["Wir", "dürfen", "nicht", "zu", "spät", "kommen."] },
    { full: "Du möchtest ein neues Handy.", words: ["Du", "möchtest", "ein", "neues", "Handy."] },
    { full: "Ich kann heute nicht kommen.", words: ["Ich", "kann", "heute", "nicht", "kommen."] },
    { full: "Ihr müsst das besser machen.", words: ["Ihr", "müsst", "das", "besser", "machen."] },
    { full: "Er soll mehr lesen.", words: ["Er", "soll", "mehr", "lesen."] },
    { full: "Ich will jetzt essen.", words: ["Ich", "will", "jetzt", "essen."] },
    { full: "Sie möchten tanzen gehen.", words: ["Sie", "möchten", "tanzen", "gehen."] },
    { full: "Kann ich das behalten?", words: ["Kann", "ich", "das", "behalten?"] },
    { full: "Du darfst nicht vergessen.", words: ["Du", "darfst", "nicht", "vergessen."] },
    { full: "Wir sollen höflich sein.", words: ["Wir", "sollen", "höflich", "sein."] },
    { full: "Er möchte Lehrer werden.", words: ["Er", "möchte", "Lehrer", "werden."] },
    { full: "Ich muss zur Arbeit gehen.", words: ["Ich", "muss", "zur", "Arbeit", "gehen."] },
    { full: "Ihr könnt laut singen.", words: ["Ihr", "könnt", "laut", "singen."] },
    { full: "Sie will in den Park gehen.", words: ["Sie", "will", "in", "den", "Park", "gehen."] },
    { full: "Kann ich das ausprobieren?", words: ["Kann", "ich", "das", "ausprobieren?"] },
    { full: "Du musst die Tür schließen.", words: ["Du", "musst", "die", "Tür", "schließen."] },
    { full: "Wir möchten zusammen kochen.", words: ["Wir", "möchten", "zusammen", "kochen."] },
    { full: "Er darf nicht schreien.", words: ["Er", "darf", "nicht", "schreien."] },
    { full: "Ich soll das erklären.", words: ["Ich", "soll", "das", "erklären."] },
    { full: "Ihr müsst ruhig bleiben.", words: ["Ihr", "müsst", "ruhig", "bleiben."] },
    { full: "Kann sie Spanisch sprechen?", words: ["Kann", "sie", "Spanisch", "sprechen?"] },
    { full: "Ich darf das behalten.", words: ["Ich", "darf", "das", "behalten."] },
    { full: "Du willst Lehrer sein.", words: ["Du", "willst", "Lehrer", "sein."] },
    { full: "Wir müssen pünktlich essen.", words: ["Wir", "müssen", "pünktlich", "essen."] },
    { full: "Ich möchte mehr schlafen.", words: ["Ich", "möchte", "mehr", "schlafen."] },
    { full: "Kann ich dich anrufen?", words: ["Kann", "ich", "dich", "anrufen?"] },
    { full: "Sie sollen mitmachen.", words: ["Sie", "sollen", "mitmachen."] },
    { full: "Ihr dürft hier nicht rennen.", words: ["Ihr", "dürft", "hier", "nicht", "rennen."] },
    { full: "Er kann sehr gut kochen.", words: ["Er", "kann", "sehr", "gut", "kochen."] },
    { full: "Du musst besser zuhören.", words: ["Du", "musst", "besser", "zuhören."] },
    { full: "Ich will heute lernen.", words: ["Ich", "will", "heute", "lernen."] },
    { full: "Wir möchten einen Ausflug machen.", words: ["Wir", "möchten", "einen", "Ausflug", "machen."] },
    { full: "Sie kann schnell laufen.", words: ["Sie", "kann", "schnell", "laufen."] },
    { full: "Ich soll nicht spät sein.", words: ["Ich", "soll", "nicht", "spät", "sein."] },
    { full: "Du darfst hier bleiben.", words: ["Du", "darfst", "hier", "bleiben."] },
    { full: "Wir wollen tanzen.", words: ["Wir", "wollen", "tanzen."] },
    { full: "Ihr sollt gut zuhören.", words: ["Ihr", "sollt", "gut", "zuhören."] },
    { full: "Ich kann dir helfen.", words: ["Ich", "kann", "dir", "helfen."] },
    { full: "Er muss das verstehen.", words: ["Er", "muss", "das", "verstehen."] }
];

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

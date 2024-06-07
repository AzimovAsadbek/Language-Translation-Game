

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language");
  const wordsTypeSelect = document.getElementById("words-type");
  const weekSelection = document.querySelector(".week-selection");
  const weekNumberInput = document.getElementById("week-number");
  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");
  const gameArea = document.querySelector(".game-area");
  const wordDisplay = document.getElementById("word-display");
  const translationInput = document.getElementById("translation-input");
  const doneBtn = document.getElementById("done-btn");
  const scoreDisplay = document.getElementById("score-display");
  const selectArea = document.querySelector(".selection-area");

  const words = {
    day1: [
      { ing: "read", uzb: "o'qimoq" },
      { ing: "play", uzb: "o'ynamoq" },
      { ing: "rain", uzb: "yomg'ir yog'moq" },
      { ing: "run", uzb: "yugurmoq" },
      { ing: "sleep", uzb: "uxlamoq" },
      { ing: "come", uzb: "kelmoq" },
      { ing: "learn", uzb: "o'rganmoq" },
      { ing: "wait", uzb: "kutmoq" },
      { ing: "bark", uzb: "vovullamoq, akillamoq" },
      { ing: "drink", uzb: "ichmoq" },
      { ing: "shout", uzb: "baqirmoq" },
      { ing: "dance", uzb: "raqsga tushmoq" },
      { ing: "call", uzb: "qo'ngiroq qilmoq" },
      { ing: "visit", uzb: "tashrif buyurmoq" },
      { ing: "driver", uzb: "haydovchi" },
      { ing: "drive", uzb: "haydamoq" },
      { ing: "sit", uzb: "o'tirmoq" },
      { ing: "clean", uzb: "tozalmoq" },
      { ing: "swim", uzb: "suzmoq" },
      { ing: "people", uzb: "odamlar" },
      { ing: "study", uzb: "talim olmoq" },
      { ing: "employer", uzb: "ish beruvchi" },
      { ing: "walk", uzb: "yurmoq" },
      { ing: "ask", uzb: "so'ramoq" },
      { ing: "sing", uzb: "kuylamoq" },
      { ing: "listen", uzb: "tinglamoq" },
      { ing: "pupil", uzb: "oquvchi" },
      { ing: "answer", uzb: "javob bermoq" },
      { ing: "parrot", uzb: "to'tiqush" },
      { ing: "speak", uzb: "gapirmoq" },
      { ing: "watch", uzb: "tomosha qilmoq" },
      { ing: "enter", uzb: "kirmoq" },
      { ing: "fly", uzb: "uchmoq" },
      { ing: "correct", uzb: "tog'irlamoq" },
      { ing: "emloyee", uzb: "xodim, ishchi" },
      { ing: "enjoy", uzb: "rohatlanmoq" },
      { ing: "air-conditioner", uzb: "konditsioner" },
      { ing: "work", uzb: "ishlamoq" },
      { ing: "cool", uzb: "salqinlanmoq, sovutmoq" },
      { ing: "help", uzb: "yordam" },
      { ing: "pedestrian", uzb: "piyoda" },
      { ing: "stop", uzb: "to'xtamoq, to'xtatmoq" },
      { ing: "whistle", uzb: "hushtak chalmoq" },
      { ing: "open", uzb: "ochmoq" },
      { ing: "do", uzb: "bajarmoq" },
      { ing: "go", uzb: "bormoq" },
      { ing: "win", uzb: "g'alaba qozonmoq" },
      { ing: "lose", uzb: "yo'qotmoq" },
      { ing: "begin", uzb: "boshlamoq" },
      { ing: "finish", uzb: "tugatmoq" },
    ],
    // Add more weekly words as needed, e.g., day2, day3, etc.
  };

  let currentLanguage = "en";
  let currentWords = [];
  let score = 0;
  let totalWords = 0;
  let currentWord = "";
  let interval;

  wordsTypeSelect.addEventListener("change", () => {
    if (wordsTypeSelect.value === "weekly") {
      weekSelection.style.display = "block";
    } else {
      weekSelection.style.display = "none";
    }
  });

  function getRandomWord() {
    let n = Math.floor(Math.random() * currentWords.length);
    let res = currentWords[n];
    console.log(currentWords);
    currentWords.splice(n, 1);
    return res;
  }

  function startGame() {
    currentLanguage = languageSelect.value;
    const wordsType = wordsTypeSelect.value;
    const weekNumber = parseInt(weekNumberInput.value, 10);

    if (wordsType === "daily") {
      currentWords = words.day1; // Use daily words
    } else if (wordsType === "weekly" && !isNaN(weekNumber)) {
      currentWords = words[`day${weekNumber}`] || words.day1; // Use specified week words or default to day1
    } else {
      currentWords = Object.values(words).flat(); // Use all words
    }

    gameArea.style.display = "block";
    scoreDisplay.style.display = "none";
    score = 0;
    totalWords = 0;
    nextWord();
    startBtn.style.display = "none";
    selectArea.style.display = "none";
  }

  function nextWord() {
    clearInterval(interval);
    translationInput.value = "";
    currentWord = getRandomWord();
    wordDisplay.textContent =
      currentLanguage === "en" ? currentWord.ing : currentWord.uzb;
    totalWords++;
    interval = setTimeout(checkTranslation, 10000);
  }

  function checkTranslation() {
    const translation = translationInput.value.trim().toLowerCase();
    const correctTranslation =
      currentLanguage === "en"
        ? currentWord.uzb.toLowerCase()
        : currentWord.ing.toLowerCase();
    if (translation === correctTranslation) {
      score++;
    }
    console.log(totalWords);
    if (totalWords < 50) {
      nextWord();
    } else {
      endGame();
    }
  }

  function endGame() {
    clearInterval(interval);
    gameArea.style.display = "none";
    scoreDisplay.style.display = "block";
    const percentage = (score / totalWords) * 100;
    scoreDisplay.textContent = `You got ${percentage}% correct translations!`;
    startBtn.style.display = "inline";
    selectArea.style.display = "inline";
  }

  startBtn.addEventListener("click", startGame);
  doneBtn.addEventListener("click", checkTranslation);
  stopBtn.addEventListener("click", endGame);
});

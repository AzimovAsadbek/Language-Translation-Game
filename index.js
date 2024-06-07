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
  const correctWordDisplay = document.getElementById("correct-word-display");

  const words = {
    day9: [
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
    day10: [
      { ing: "fridge", uzb: "muzlatgich" },
      { ing: "t-short", uzb: "futbolka" },
      { ing: "bed", uzb: "krovat" },
      { ing: "scarf", uzb: "sharf" },
      { ing: "aquarium", uzb: "akvarium" },
      { ing: "doll", uzb: "qog'irchoq" },
      { ing: "thief", uzb: "og'ri" },
      { ing: "submarine", uzb: "suvosti kemasi" },
      { ing: "border", uzb: "chegara" },
      { ing: "helicopter", uzb: "vertolyot" },
      { ing: "gun", uzb: "qurol" },
      { ing: "palace", uzb: "saroy" },
      { ing: "traffic lights", uzb: "svetafor" },
      { ing: "mill", uzb: "tegirmon" },
      { ing: "bowl", uzb: "kosa" },
      { ing: "hole", uzb: "teshik" },
      { ing: "sock", uzb: "paypoq" },
      { ing: "insect", uzb: "hashorot" },
      { ing: "line", uzb: "navbat" },
      { ing: "swimming pool", uzb: "suzish havzasi" },
      { ing: "rock", uzb: "qoyatosh" },
      { ing: "microbe", uzb: "mikrob" },
      { ing: "mail", uzb: "pochta" },
      { ing: "farm", uzb: "ferma" },
      { ing: "boat", uzb: "qayiq" },
      { ing: "beach", uzb: "sohil, plyaj" },
      { ing: "raccoon", uzb: "yenot" },
      { ing: "zoo", uzb: "hayvnot bog'i" },
      { ing: "bookshelf", uzb: "kitob javoni" },
      { ing: "laptop", uzb: "noutbuk" },
      { ing: "cellphone", uzb: "mobil telefon" },
      { ing: "bellboy", uzb: "hammol" },
      { ing: "receptionist", uzb: "qabulchi" },
      { ing: "kitten", uzb: "mushukcha" },
      { ing: "asistant", uzb: "yordamchi" },
      { ing: "musician", uzb: "musiqachi" },
      { ing: "instrument", uzb: "musiqa asbobi" },
      { ing: "stage", uzb: "sahna" },
      { ing: "gardener", uzb: "bog'bon" },
      { ing: "co-pilot", uzb: "ikkinchi uchuvchi" },
      { ing: "coach", uzb: "murabbiy" },
      { ing: "player", uzb: "o'yinchi" },
      { ing: "notebook", uzb: "daftar" },
      { ing: "airport", uzb: "aeroport" },
      { ing: "tomato", uzb: "pamidor" },
      { ing: "potato", uzb: "kartoshka" },
      { ing: "fork", uzb: "vilka" },
      { ing: "spoon", uzb: "qoshiq" },
      { ing: "map", uzb: "xarita" },
      { ing: "nose", uzb: "burun" },
    ],
    // Add more weekly words as needed, e.g., day2, day3, etc.
  };

  let currentLanguage = "en";
  let currentWords = [];
  let score = 0;
  let totalWords = 0;
  let currentWord = "";
  let interval;
  let dayIndex = Object.keys(words)[Object.keys(words).length - 1].slice(3); // So'nggi kundan boshlaymiz

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
    currentWords.splice(n, 1);
    return res;
  }

  function startGame() {
    currentLanguage = languageSelect.value;
    const wordsType = wordsTypeSelect.value;
    const weekNumber = parseInt(weekNumberInput.value, 10);

    if (wordsType === "daily") {
      dayIndex = Object.keys(words)[Object.keys(words).length - 1].slice(3); // So'nggi kundan boshlaymiz
      currentWords = words[`day${dayIndex}`]; // So'nggi kun so'zlari
    } else if (wordsType === "weekly" && !isNaN(weekNumber)) {
      currentWords = words[`day${weekNumber}`] || words[`day${dayIndex}`];
    } else {
      currentWords = Object.values(words).flat(); // Barcha so'zlar
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
    if (currentWords.length === 0 && words[`day${dayIndex - 1}`]) {
      dayIndex--; // Oldingi kun so'zlariga o'tamiz
      currentWords = words[`day${dayIndex}`];
    } else if (
      !words[`day${dayIndex - 1}`] &&
      !words[`day${dayIndex}`].length
    ) {
      location.reload();
    }
    if (currentWords.length > 0) {
      currentWord = getRandomWord();
      wordDisplay.textContent =
        currentLanguage === "en" ? currentWord.ing : currentWord.uzb;
      totalWords++;
      interval = setTimeout(checkTranslation, 10000);
    } else {
      endGame();
    }
  }

  function checkTranslation() {
    const translation = translationInput.value.trim().toLowerCase();
    const correctTranslation =
      currentLanguage === "en"
        ? currentWord.uzb.split(",")
        : currentWord.ing.toLowerCase();

    if (
      (Array.isArray(correctTranslation) &&
        correctTranslation.includes(translation)) ||
      translation == correctTranslation
    ) {
      score++;
    }

    // To'g'ri so'zni animatsiya bilan ko'rsatish
    correctWordDisplay.textContent =
      currentLanguage === "en" ? currentWord.uzb : currentWord.ing;
    correctWordDisplay.style.display = "block";
    setTimeout(() => {
      correctWordDisplay.style.display = "none";
    }, 2000);

    nextWord();
  }

  function endGame() {
    clearInterval(interval);
    gameArea.style.display = "none";
    scoreDisplay.style.display = "block";
    const percentage = (score / totalWords) * 100;
    scoreDisplay.textContent = `You got ${percentage}% correct translations! ${totalWords}/${score}`;
    startBtn.style.display = "inline";
    selectArea.style.display = "inline";
  }

  translationInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkTranslation();
    }
  });

  startBtn.addEventListener("click", startGame);
  doneBtn.addEventListener("click", checkTranslation);
  stopBtn.addEventListener("click", endGame);
});

const wordoftheday = "amrit";
let line = 1;
let entered = [];
let attempts = 6;

const keyListener = (event) => {
  let char = event.key.toUpperCase();
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "ENTER",
    "BACKSPACE",
  ];

  if (attempts == 0) {
    window.alert("You lost");
    entered = console.log("No more tries!");
  }

  if (!alphabet.includes(char)) {
    console.log("Invalid character", char);
  } else if (char == "ENTER") {
    if (entered.length < 5) {
      window.alert("Not enough letters!");
      i;
    } else {
      validateEntry();
      line++;
      entered = [];
    }
  } else if (char == "BACKSPACE") {
    deleteLetter();
    console.log(entered);
  } else if (entered.length == 5) {
    console.log("Only accepts up to 5 letters");
  } else {
    entered.push(char);
    console.log(entered);
    displayLetter(char);
  }
};

function displayLetter(letter) {
  let elId = `c${entered.length}l${line}`;
  const el = document.getElementById(elId);
  el.textContent = letter;
  letter++;
}

function addLetter() {
  if (entered.length > 0) {
    entered.pop();
    let elId = `c${entered.length + 1}l${line}`;
    const el = document.getElementById(elId);
    el.textContent = "";
  } else {
    console.log("Nothing to delete!");
  }
}

function validateEntry() {
  console.log(
    "validate if" + entered.join("") + " equals " + wordoftheday.toUpperCase()
  );
  if (entered.join("") == wordoftheday.toUpperCase()) {
    modal.style.display = "block"; // show the modal when it hits
    for (let letter = 0; letter < entered.length; letter++) {
      let buttonKeyboard = document.getElementById(entered[letter]);
      let elId = `c${letter + 1}l${line}`;
      const el = document.getElementById(elId);
      el.classList.add("validated", "rotate-horizontal-center");
      tentativas = 0;
      buttonKeyboard.classList.remove("normal", "wrong-position");
      buttonKeyboard.classList.add("validated");
    }
  } else {
    for (let letter = 0; letter < entered.length; letter++) {
      let elId = `c${letter + 1}l${line}`;
      const el = document.getElementById(elId);
      let wordoftheday1 = wordoftheday.toUpperCase();
      let buttonKeyboard = document.getElementById(entered[letter]);
     
      if (entered[letter] == wordoftheday[letter].toUpperCase()) {
        el.classList.add("validated", "rotate-horizontal-center");
        buttonKeyboard.classList.remove("normal");
        buttonKeyboard.classList.add("validated");
      } else if (wordoftheday1.includes(entered[letter])) {
        
        // if the letter exists in the word but is in the wrong place:
        let attemptPos = entered[letter];
        let realPos = wordoftheday.lastIndexOf(wordoftheday[letter]);
        if (attemptPos != realPos) {
          el.classList.add("wrong-position", "rotate-horizontal-center");
          buttonKeyboard.classList.remove("normal");
          buttonKeyboard.classList.add("wrong-position");
        }
      } else {
        el.classList.add("invalid", "rotate-horizontal-center");
        buttonKeyboard.classList.remove("normal");
        buttonKeyboard.classList.add("invalid");
      }
    }
    attempts--;
  }
}

document.body.addEventListener("keydown", keyListener);
document.querySelectorAll(".letter").forEach((el) => {
  el.addEventListener("click", function (el) {
    let letter = el.target.textContent;
    document.getElementsByClassName(letter);
    el.textContent = letter;
    if (letter == "⌫") {
      apagaletter();
    } else if (letter == "ENTER") {
      if (entered.length < 5) {
        window.alert("Enter sufficient letters");
        i;
      } else {
        validateEntry();
        line++;
        entered = [];
      }
    } else {
      entered.push(letter);
      displayLetter(letter);
    }
  });
});

var modal = document.getElementById("modalHit");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

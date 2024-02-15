class Game {
    constructor() {
        this.missed = 0; // counts the missed guesses
        this.phrases = [
            "Life is beautiful",
            "We are all one",
            "Open your heart and see",
            "Just walk on",
            "This moment is all",
        ];
        this.activePhrase = null;
    }

    startGame() {
        // 1. Hide overlay:
        document.querySelector("#overlay").style.display = "none";

        // 2. Get a random phrase:
        this.activePhrase = new Phrase(this.getRandomPhrase());
        // console.log("NEW PHRASE:", this.activePhrase);

        // 3. Add the phrase to the display:
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        // 1. Create a random number for the index of the phrases array:
        const randomIndex = Math.floor(Math.random() * this.phrases.length);

        // 2. Use the random index to get the random phrase:
        const randomPhrase = this.phrases[randomIndex];

        return randomPhrase;
    }

    handleInteraction(clickedLetter) {
        // If the phrase contains the clicked letter:
        if (this.activePhrase.checkLetter(clickedLetter)) {
            // 1. Loop through all .key buttons -> disable + mark button:
            const keys = document.querySelectorAll(".key");
            for (let i = 0; i < keys.length; i++) {
                if (keys[i].textContent === clickedLetter) {
                    keys[i].classList.add("chosen");
                    keys[i].disabled = true;
                }
            }
            // 2. Show the matching letters on the board:
            this.activePhrase.showMatchedLetter(clickedLetter);
            // 3. Check for a win:
            if (this.checkForWin()) {
                setTimeout(() => {
                    this.gameOver("You won!!! 🤠", "win");
                }, 750);
            }
        } else {
            // If the phrase does not contain the clicked letter:
            // 1. Loop through all .key buttons -> disable + mark button:
            const keys = document.querySelectorAll(".key");
            for (let i = 0; i < keys.length; i++) {
                if (keys[i].textContent === clickedLetter) {
                    keys[i].classList.add("wrong");
                    keys[i].disabled = true;
                }
            }
            // 2. Remove a heart (life):
            this.removeLife();
        }
    }

    removeLife() {
        // 1. Replace a liveHeart with lostHeart
        const newHtml = `<img src="images/lostHeart.png" alt="Lost Heart Icon" height="35" width="30" />`;
        document.querySelectorAll(".tries")[this.missed].innerHTML = newHtml;

        // 2. Raise the number of misses:
        this.missed++;

        // 3. Check for a lose:
        if (this.missed === 5) {
            setTimeout(() => {
                this.gameOver("You lost!!! 😱", "lose");
            }, 750);
        }
    }

    checkForWin() {
        // Check if all letters are found:
        const hiddenLetters = document.querySelectorAll(".hide");
        if (hiddenLetters.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    gameOver(text, newOverlayClass) {
        // 1. Display overlay and adjust text and styles:
        document.querySelector("#overlay").style.display = "flex";
        document.querySelector("#overlay").className = newOverlayClass;
        document.querySelector("#game-over-message").textContent = text;
        document.querySelector("#btn__reset").textContent = "Start New Game";

        // 2. Remove all letter li elements from the html:
        document.querySelector("#phrase ul").innerHTML = "";

        // 3. Reset the keyboard buttons:
        const keyboard = document.querySelectorAll(".key");
        for (let i = 0; i < keyboard.length; i++) {
            keyboard[i].disabled = false;
            keyboard[i].classList.remove("chosen");
            keyboard[i].classList.remove("wrong");
        }

        // 4. Reset the heart icons
        const hearts = document.querySelectorAll(".tries");
        const heartHtml = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30" />`;
        for (let i = 0; i < 5; i++) {
            hearts[i].innerHTML = heartHtml;
        }

        // 5. Reset the number of misses and the clicked letters:
        this.missed = 0;
        keyupLetters = [];
    }
}

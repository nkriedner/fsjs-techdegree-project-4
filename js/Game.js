// Create the Game Class
class Game {
    constructor() {
        this.missed = 0;
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
        console.log(this.activePhrase);
        // Hide overlay:
        document.querySelector("#overlay").style.display = "none";
        // this.activePhrase = this.getRandomPhrase();
        this.activePhrase = new Phrase(this.getRandomPhrase());
        console.log("NEW PHRASE:", this.activePhrase);
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        // Create a random number (index) to get a random phrase
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomIndex];
        return randomPhrase;
    }
    handleinteraction(e) {
        // console.log(this.activePhrase);
        const clickedLetter = e.target.textContent;
        e.target.disabled = true;

        if (this.activePhrase.checkLetter(clickedLetter)) {
            e.target.classList.add("chosen");
            this.activePhrase.showMatchedLetter(clickedLetter);
            if (this.checkForWin()) {
                this.gameOver("You won!!! 🫶", "win");
            }
        } else {
            e.target.classList.add("wrong");
            this.removeLife();
        }
    }
    removeLife() {
        // Replace a liveHeart with lostHeart
        document.querySelectorAll(".tries")[
            this.missed
        ].innerHTML = `<img src="images/lostHeart.png" alt="Lost Heart Icon" height="35" width="30" />`;

        this.missed++;

        if (this.missed === 5) {
            this.gameOver("You lost!!! 😱", "lose");
        }
    }
    checkForWin() {
        // Check if there are no letters with the class 'hide' -> all letters are found
        const hiddenLetters = document.querySelectorAll(".hide");
        if (hiddenLetters.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    gameOver(text, newOverlayClass) {
        // Display overlay and text
        document.querySelector("#overlay").style.display = "flex";
        // document.querySelector("#overlay").classList.remove("start");
        // document.querySelector("#overlay").classList.add(newOverlayClass);
        document.querySelector("#overlay").className = newOverlayClass;
        document.querySelector("#game-over-message").textContent = text;

        // Remove all li elements from the Phrase ul
        document.querySelector("#phrase ul").innerHTML = "";

        // Reset keyboard
        const keyboard = document.querySelectorAll(".key");
        for (let i = 0; i < keyboard.length; i++) {
            keyboard[i].disabled = false;
            keyboard[i].classList.remove("chosen");
            keyboard[i].classList.remove("wrong");
        }

        // Reset hearts
        const hearts = document.querySelectorAll(".tries");
        for (let i = 0; i < 5; i++) {
            hearts[i].innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30" />`;
        }

        this.missed = 0;
    }
}

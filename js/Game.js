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
        // Hide overlay:
        document.querySelector("#overlay").style.display = "none";
        // this.activePhrase = this.getRandomPhrase();
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        // Create a random number (index) to get a random phrase
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomIndex];
        return randomPhrase;
    }
    handleinteraction(e) {
        const clickedLetter = e.target.textContent;

        if (this.activePhrase.checkLetter(clickedLetter)) {
            this.activePhrase.showMatchedLetter(clickedLetter);
            console.log("yes");
            e.target.disabled = true;
            e.target.classList.add("chosen");
            this.activePhrase.showMatchedLetter();
            if (this.checkForWin()) {
                this.gameOver();
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
            this.gameOver();
        }
    }
    checkForWin() {
        console.log("checkForWin() running...");
    }
    gameOver() {
        console.log("gameOver() running...");
        // Display overlay
        document.querySelector("#overlay").style.display = "flex";
    }
}

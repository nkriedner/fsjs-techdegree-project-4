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
        console.log("startGame() running...");
        // Hide overlay:
        document.querySelector("#overlay").style.display = "none";
        // this.activePhrase = this.getRandomPhrase();
        this.activePhrase = new Phrase(this.getRandomPhrase());
        console.log(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        console.log("getRandomPhrase() running...");
        // Create a random number (index) to get a random phrase
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomIndex];
        return randomPhrase;
    }
    handleinteraction() {
        console.log("handleInteraction() running...");
    }
    removeLife() {
        console.log("removeLife() running...");
    }
    checkForWin() {
        console.log("checkForWin() running...");
    }
    gameOver() {
        console.log("gameOver() running...");
    }
}

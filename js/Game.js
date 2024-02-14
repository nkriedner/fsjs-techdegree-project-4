// Create the Game Class
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            "Life is beautiful.",
            "We are all one.",
            "Open your heart and see.",
            "Just walk on.",
            "This moment is all.",
        ];
        this.activePhrase = null;
    }

    startGame() {
        console.log("startGame() running...");
    }
    getRandomPhrase() {
        console.log("getRandomPhrase() running...");
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

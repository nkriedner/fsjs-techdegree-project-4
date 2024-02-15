// Initialize global variables
let newGame;
let keyupLetters = [];

// 'CLICK' event listener for 'Start Game' button
document.querySelector("#btn__reset").addEventListener("click", () => {
    // 1. Initialize a new game:
    newGame = new Game();

    // 2. Start the game:
    newGame.startGame();
});

// 'CLICK' event listener for onscreen keyboard buttons
const keyboardButtons = document.querySelectorAll(".key");
for (let i = 0; i < keyboardButtons.length; i++) {
    keyboardButtons[i].addEventListener("click", (e) => {
        // Call the handleInteraction function:
        newGame.handleInteraction(e.target.textContent);
    });
}

// "KEYUP" event listener for normal keyboard clicks
document.querySelector("body").addEventListener("keyup", (e) => {
    // 1. Check if clicked letter was already clicked before:
    if (keyupLetters.includes(e.key)) {
        return;
    } else {
        keyupLetters.push(e.key); // adds the letter to the list of clicked letters
    }

    // 2. If the game is initialized -> handle the interaction:
    if (newGame) {
        newGame.handleInteraction(e.key);
    }
});

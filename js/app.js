let newGame;
let keyupLetters = [];

// 'CLICK' event listener for 'Start Game' button
document.querySelector("#btn__reset").addEventListener("click", () => {
    newGame = new Game();
    newGame.startGame();
});

// 'CLICK' event listener for each onscreen keyboard button
const keyboardButtons = document.querySelectorAll(".key");
for (let i = 0; i < keyboardButtons.length; i++) {
    keyboardButtons[i].addEventListener("click", (e) => {
        newGame.handleinteraction(e.target.textContent);
        // newGame.handleinteraction(e);
    });
}

// "KEYUP" event listener
document.querySelector("body").addEventListener("keyup", (e) => {
    // Check if letter was already pressed:
    if (keyupLetters.includes(e.key)) {
        return;
    } else {
        keyupLetters.push(e.key);
    }
    keyupLetters.push;
    if (newGame) {
        newGame.handleinteraction(e.key);
    }
});

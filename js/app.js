let newGame;

// 'CLICK' event listener for 'Start Game' button
document.querySelector("#btn__reset").addEventListener("click", () => {
    newGame = new Game();
    newGame.startGame();
});

// 'CLICK' event listener for each onscreen keyboard button
const keyboardButtons = document.querySelectorAll(".key");
for (let i = 0; i < keyboardButtons.length; i++) {
    keyboardButtons[i].addEventListener("click", (e) => {
        newGame.handleinteraction(e);
    });
}

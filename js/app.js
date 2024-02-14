// 'CLICK' event listener for 'Start Game' button
document.querySelector("#btn__reset").addEventListener("click", () => {
    // Create a new Game object
    const newGame = new Game();
    newGame.startGame();
});

// 'CLICK' event listener for each onscreen keyboard button
const keyboardButtons = document.querySelectorAll(".key");
for (let i = 0; i < keyboardButtons.length; i++) {
    keyboardButtons[i].addEventListener("click", (e) => {
        console.log("keyboard button clicked:", e.target.textContent);
    });
}

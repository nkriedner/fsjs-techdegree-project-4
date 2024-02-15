// Create the Phrase Class
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        // Add letter placeholders to the display (when game starts)
        // Each letter is presented by an empy box (li element)
        let html = "";

        // Loop over the phrase array
        for (let i = 0; i < this.phrase.length; i++) {
            const letter = this.phrase[i];

            // Create li element
            const li = document.createElement("li");
            li.textContent = letter;

            if (letter !== " ") {
                li.classList.add("hide");
                li.classList.add("letter");
                li.classList.add(`${letter}`);
            } else {
                li.classList.add("space");
            }
            // Display html
            document.querySelector("#phrase ul").appendChild(li);
        }
    }
    checkLetter(letter) {
        console.log("checkLetter() running...", letter);

        console.log(this.phrase);
        return this.phrase.includes(letter);
    }
    showMatchedLetter(matchedLetter) {
        console.log("showMatchedLetter() running...");

        // Loop through the list of letters
        const lis = document.querySelectorAll(".letter");
        for (let i = 0; i < lis.length; i++) {
            if (lis[i].textContent === matchedLetter) {
                console.log(matchedLetter);
                lis[i].classList.remove("hide");
                lis[i].classList.add("show");
            }
        }
    }
}

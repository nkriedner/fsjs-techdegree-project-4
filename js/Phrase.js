class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        // Loop over the phrase array
        for (let i = 0; i < this.phrase.length; i++) {
            const letter = this.phrase[i];

            // 1. Create li element for the letter placeholder and set its text content:
            const li = document.createElement("li");
            li.textContent = letter;

            // 2. Add classes depending on wether it's a letter or a space:
            if (letter !== " ") {
                li.classList.add("hide");
                li.classList.add("letter");
                li.classList.add(`${letter}`);
            } else {
                li.classList.add("space");
            }

            // 3. Append the li to the html:
            document.querySelector("#phrase ul").appendChild(li);
        }
    }

    checkLetter(letter) {
        // Check if the phrase includes the letter and return a boolean:
        return this.phrase.includes(letter);
    }

    showMatchedLetter(matchedLetter) {
        // Loop through the list of phrase letters:
        const lis = document.querySelectorAll(".letter");
        for (let i = 0; i < lis.length; i++) {
            // If there is a match adjust the css classes:
            if (lis[i].textContent === matchedLetter) {
                lis[i].classList.remove("hide");
                lis[i].classList.add("show");
            }
        }
    }
}

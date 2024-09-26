// select words and randomize them. length needs to be counted. dashes need to be made. Per Brooke, add hints. 
//get the name of the player and explain the rules. DO THIS IF YOU HAVE TIME


// words to guess, calculate length
const randomWords = ["dahlia", "burgundy", "exhaustion", "flamingo", "obstinate", "asparagus", "campaign", "generation", "projection", "millenial", "hilarious"];
const genRandomWord = Math.floor(Math.random() * randomWords.length);
const wordSelection = randomWords[genRandomWord];
console.log(wordSelection);

const hintList = [
    "this elegant flower helps you to find inner strength",
    "a color and a wine city in France",
    "synonym for physical depletion", 
    "a bright, well-balanced bird",
    "synonym for stubborn",
    "tall skinny veggie that divides people by nose",
    "military operations or activity to get elected to office",
    "people born and living around the same time",
    "future forecast or showcasing an image on a surface",
    "obnoxious people born between 1981-1996",
    "misogynistic synonym for funny"
];
document.getElementById("hintList").textContent = hintList[genRandomWord];

// dashes
let answerArray = [];
for (let i = 0; i < wordSelection.length; i++) {
    answerArray[i] = "_";
}
document.getElementById("randomWords").textContent = answerArray.join(" ");

let remainingLetters = wordSelection.length;
let wrongGuesses = 0;
const maxWrongGuesses = 10;

// List of images to show on correct guesses
const correctGuessImages = [
    "Assets/download (1).jpeg",
    "Assets/download (2).jpeg",
    "Assets/download.jpeg",
    "Assets/images (1).jpeg",
    "Assets/images (2).jpeg",
    "Assets/images (3).jpeg",
    "Assets/images (4).jpeg",
    "Assets/images (5).jpeg",
    "Assets/images.jpeg"
];

// select a letter. if the player selects a letter and it is correct
// code that they got it correct. that letter needs to show up on screen and 
// the counter needs to stay the same. add a picture. 
let correctGuessCount = 0;

function submitGuess(letter) {
    let correctGuess = false;

    for (let i = 0; i < wordSelection.length; i++) {
        if (wordSelection[i].toUpperCase() === letter) {
            answerArray[i] = letter;
            remainingLetters--;
            correctGuess = true;

            // Show an image when the guess is correct
            if (correctGuessCount < correctGuessImages.length) {
                const img = document.createElement("img");
                img.src = correctGuessImages[correctGuessCount];
                img.alt = "flowers";
                document.getElementById("image-container").appendChild(img);
                correctGuessCount++;
            }
        }

    
// select a letter. if the player selects a letter and it is incorrect, that letter 

// needs to show up under "incorrect guesses" and the counter needs to subtract 1. 
// player gets 10 guesses.


// if they lose, message has to say they lose. if they win, message needs to say they 
//win and the full flower image needs to pop up.
//button to reload the game and start over.

// List of images to show on incorrect guesses. Tried to add incorrect images to wrong guesses, but ran out of time!
// const incorrectGuessImages = [
//     "Assets/dead.jpeg",
//     "Assets/dead1.jpeg",
//     "Assets/dead2.jpeg",
//     "Assets/dead3.jpeg",
//     "Assets/dead4.jpeg",
//     "Assets/dead5.jpeg",
//     "Assets/dead6.jpeg",
//     "Assets/dead7.jpeg",
//     "Assets/dead8.jpeg",
//     "Assets/dead9.jpeg"

//     ]

// start game or new game button

    if (correctGuess) {
        document.getElementById("message").textContent = "You guessed a correct letter!";
    } else {
        wrongGuesses++;
        document.getElementById("wrongGuesses").textContent = wrongGuesses;
        document.getElementById("message").textContent = "Incorrect guess. Try again!";
    }

    if (remainingLetters === 0) {
        alert("Congratulations! You've won!");

        // Add logic to show the winning image
        const winningImage = document.createElement("img");
        winningImage.src = "Assets/Wordname-images/HD-wallpaper-garden-flowers-fountain-lovely-greenery-beautiful-park-roses-trees-bushes-leaves-nice-summer-flowers-beauty-garden-nature-petals.jpg";
        winningImage.alt = "garden";
        document.getElementById("image-container").appendChild(winningImage);
    }

    if (wrongGuesses >= maxWrongGuesses) {
        alert(`Game Over! The word was "${wordSelection}".`);
    }
}
// clickable buttons must be present. ChatGPT came up with this shortcut.
function createKeyboard() {
    const keyboardContainer = document.getElementById("keyboard-container");
    keyboardContainer.innerHTML = '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    
    for(let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        const button = document.createElement("button");
        button.textContent = letter;
        button.onclick = function() {
            submitGuess(letter);
        };
        keyboardContainer.appendChild(button);
    }
}

createKeyboard()}

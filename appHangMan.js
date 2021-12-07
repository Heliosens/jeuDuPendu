// array of word
let wordArray = [
    "VOYAGE",
    "YOGA",
    "VOITURE",
    "ENFANT",
    "SOLEIL",
    "MONTAGNE",
    "ELEPHANT",
    "DINOSAURE",
    "ELASTIQUE",
    "ARTISTE",
    "DEVELOPPEUR",
    "LANGAGE",
    "ALIGATOR",
    "GATEAU",
    "ORANGE",
    "ECHARPE",
    "ORDINATEUR",
    "CAHIER",
    "SPATULE",
    "PARAPLUIE",
    "CHAUSURE",
    "MUSIQUE",
    "GIRAFE",
    "KOALA",
    "NATATION",
    "ARCHERIE",
    "ANIMATION",
];

// get start button
let startBtn = document.getElementsByClassName('startBtn');
let goOne = document.getElementById('goOne');

// get next word button
let nextWord = document.getElementById('nextWord');

// get all letters, target of the word, each letter of the word, target of wrong letter
let letterBtn = document.getElementsByClassName('letter');
let word = document.getElementById('word');
let ltrWord = document.getElementById("word").getElementsByTagName("div");
let wrongLetter = document.getElementById('wrongLetter');

// get hangman
let frame = document.querySelector('#hangMan');
frame.style.backgroundImage = 'url("img/pendu-10.png")';

// get display chance
let info = document.getElementById('btn').getElementsByTagName('span');

// state beginning
let wordNbr = 0; // word's index
let count = 0;  // good letter
let w = 0; // wrong choice
let win = 0; // word found

// start or restart
for(let btn of startBtn){
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        shakeArray();

        // from first to last word
        if(wordNbr < wordArray.length){
            startGame();
            // the word
            let theWord = wordArray[wordNbr];
            console.log(theWord)

            // create div with this word
            hollowWord(theWord);

            // listen letters and test letter
            for (let l = 0 ; l < letterBtn.length ; l++){
                letterBtn[l].addEventListener('click', function (event) {
                    event.preventDefault();
                    // test the letter
                    let ltr = letterBtn[l].innerHTML;
                    letterBtn[l].style.visibility = 'hidden';
                    // test if letter is in the word and where
                    testLetter(ltr, theWord);

                    if(count === theWord.length) {
                        win++;
                        console.log("win " + win);
                        info[0].style.visibility = "hidden";
                        info[1].innerHTML = "Vous avez trouvé " + win + " mots"
                        // continue
                        startBtn[1].style.display = "none";
                        goOne.style.display = "block";
                    }
                })
            }
            // cont.
            goOne.addEventListener('click', function (event){
                event.preventDefault();
                wordNbr++;
                console.log(wordNbr);
                count = 0;  // good letter
                w = 0; // wrong choice
            })
        }
        else if(wordNbr === wordArray.length){
            info[1].innerHTML = "Félicitation, vous avez trouvé " + win + " sur " + wordArray.length;
        }
    })
}


// function
function startGame(){
    // no hang man
    frame.style.backgroundImage = 'url("img/pendu-0.png")';
    w = 0;
    // reset chance
    info[0].innerHTML = "10 chances";

    // reset visibility
    for(let item of letterBtn){
        item.style.visibility = "visible";
    }

    // hide start btn
    startBtn[0].parentElement.style.display = 'none';
    // reset wrong div
    wrongLetter.innerHTML = "";

    // reset good & wrong letter & word found
    count = 0;
    win = 0;
}

function shakeArray (){
    for(let i = 0 ; i < wordArray.length ; i++){
        let item = wordArray[i];
        let x = Math.floor(Math.random() * wordArray.length);
        wordArray[i] = wordArray[x];
        wordArray[x] = item;
    }
}

function hollowWord (theWord){
    word.innerHTML = "";
    for(let char of theWord){
        let box = document.createElement('div');
        word.appendChild(box);
    }
}

function testLetter(letter, word){
        // search letter in word (as array) && count < theWord.length
        if(word.includes(letter)){
            for(let c = 0 ; c < word.length ; c++){
                if( letter === word[c]){
                    ltrWord[c].innerHTML = letter;
                    ltrWord[c].style.border = 'none';
                    count++;
                    console.log(count);
                }
            }
        }
        else {
            let wrongLtr = document.createElement('div');
            wrongLtr.innerHTML = letter;
            wrongLetter.appendChild(wrongLtr);
            w++;
            if(w < 10){
                frame.style.backgroundImage = 'url("img/pendu-' + w + '.png")';
                info[0].innerHTML = (parseInt(info[0].innerHTML) - 1) + " chances";
            }
            else{
                frame.style.backgroundImage = 'url("img/pendu-' + w + '.png")';
                startBtn.parentElement.style.display = "flex";
            }
        }
}
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
];

// get start button
let startBtn = document.getElementsByClassName('startBtn');

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
let chance = document.getElementById('display').querySelector('span');

// state beginning
let wordNbr = 0; // word's index
let count = 0;  // good letter
let w = 0; // wrong choice
let win = 0; // word found

// start or restart
for(let btn of startBtn){
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        // 0 for reset, 1 for continue
        startGame(0);
        let theWord = wordArray[wordNbr];
        console.log(theWord)
        // from first to last word, si pas gané, si pas perdu
        if(wordNbr < wordArray.length && count < theWord.length && w < 10){
            // create div with this word
            hollowWord(theWord);
            // listen letters and test letter
            for (let l = 0 ; l < letterBtn.length ; l++){
                letterBtn[l].addEventListener('click', function (event) {
                    event.preventDefault();
                    // test the letter
                    let ltr = letterBtn[l].innerHTML;

                    letterBtn[l].style.visibility = 'hidden';

                    // search letter in word (as array)
                    if(theWord.includes(ltr)){
                        for(let c = 0 ; c < theWord.length ; c++){
                            if( ltr === theWord[c]){
                                ltrWord[c].innerHTML = ltr;
                                ltrWord[c].style.border = 'none';
                                count++;
                            }
                        }
                        if(count === theWord.length){
                            chance.innerHTML = "Gagné !!!"
                            wordNbr++;
                            win++;
                            // continue
                        }
                    }
                    else {
                        let wrongLtr = document.createElement('div');
                        wrongLtr.innerHTML = ltr;
                        wrongLetter.appendChild(wrongLtr);
                        w++;
                        if(w < 10){
                            frame.style.backgroundImage = 'url("img/pendu-' + w + '.png")';
                            chance.innerHTML = (parseInt(chance.innerHTML) - 1) + " chances";
                        }
                        else{
                            frame.style.backgroundImage = 'url("img/pendu-' + w + '.png")';
                            chance.innerHTML = "Vous avez perdu";
                            startBtn.parentElement.style.display = "flex";
                        }
                    }
                })
            }
        }
        else if(wordNbr === wordArray.length){
            chance.innerHTML = "Félicitation, vous avez trouvé " + win + " sur " + wordArray.length;
        }
        else {
            console.log(count === theWord.length ? "mot trouvé" : "perdu");
            // display continue or restart btn
        }
    })
}
// function
function startGame(param){
    // restart or continue
    if(param === 0){
        // shake words
        shakeArray();
        wordNbr = 0;
    }
    else{
        wordNbr++;
    }

    // no hang man
    frame.style.backgroundImage = 'url("img/pendu-0.png")';

    // reset visibility
    for(let item of letterBtn){
        item.style.visibility = "visible";
    }

    // hide start btn
    startBtn[0].parentElement.style.display = 'none';
    // reset wrong
    wrongLetter.innerHTML = "";
    count = w = win = 0;  // good & wrong letter & word found
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

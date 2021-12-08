// array of words
let arrayOfWord = [
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
    "ALLIGATOR",
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
    "AVIATEUR",
    "DOUZAINE",
    "PAPILLON",
    "ORCHIDEE",
    "KIWI",
    "WAGON",
    "SPECTACLE",
];

// get elements
const sideFrame = document.getElementById('sideFrame');

// get letters
const alphaB = document.getElementById('letter').getElementsByTagName('a');

// get hangman place
const hangImg = document.getElementById('hangMan');
hangImg.style.backgroundImage = "url('img/hang-10.png')";

// get target word
const wordPlace = document.getElementById('word');
const letterPlace = wordPlace.getElementsByTagName('div');

// get start button
const start = document.getElementById('startBtn');
const restart = document.getElementById('restart');
restart.style.display = "none";

// get info 0 & 1
const info = document.getElementById('btn').getElementsByTagName('span');

// get wrong side
const wrongLetter = document.getElementById('wrongLetter');

let win = 0;
// start
start.addEventListener('click', function (event){
    hangImg.style.backgroundImage = "url('img/hang-0.png')";

    // get random word
    const word = arrayOfWord[Math.floor( Math.random() * arrayOfWord.length)];

    // create letter place
    for(let char of word){
        wordPlace.appendChild(document.createElement('div'));
    }

    // allowed letters access
    sideFrame.style.display = "none";

    // switch button start -> restart
    start.style.display = "none";
    restart.style.display = "unset";

    // play
    for(let item of alphaB){
        item.addEventListener('click', function (event){
            event.preventDefault();

            let ltr = this.innerHTML;
            console.log(ltr);

            this.style.visibility = "hidden";

            // test letter
            if(word.includes(ltr)){                                 // if the letter is in the word
                for(let char = 0 ; char < word.length ; char++){
                    if(word[char] === ltr){                         // find each index
                        letterPlace[char].innerHTML = ltr;          // write letter in place
                        letterPlace[char].style.border = 'none';
                        win++;
                        if(win === word.length){                    // if word is complete
                            info[0].innerHTML = "Gagné !!!";
                            sideFrame.style.display = "unset";
                        }
                    }
                }
            }
            else {                                                  // else create element
                let wrongLtr = document.createElement('div');
                wrongLtr.innerHTML = ltr;                           // write ltr in element
                wrongLetter.appendChild(wrongLtr);
                let w = wrongLetter.getElementsByTagName('div').length;
                hangImg.style.backgroundImage = "url('img/hang-" + w + ".png')";    // adapt hangman img
                if(w === 10){
                    info[0].innerHTML = "Perdu !!!";                // 10 wrong letter = loose
                    sideFrame.style.display = "unset";
                    info[1].innerHTML = "Le mot était : " + word.toLowerCase();
                }
            }
        })
    }
})

restart.addEventListener('click', ()=> location.reload());

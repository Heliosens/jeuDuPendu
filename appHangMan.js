// array of word
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
];

// get elements
const sideFrame = document.getElementById('sideFrame');

// get letters
const alphaB = document.getElementById('letter').getElementsByTagName('a');

// get target image
const hangImg = document.getElementById('hangMan');
hangImg.style.backgroundImage = "url('img/pendu-10.png')";

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
    hangImg.style.backgroundImage = "url('img/pendu-0.png')";

    // get random word
    const word = arrayOfWord[Math.floor( Math.random() * arrayOfWord.length)];

    // create letter place
    for(let char of word){
        wordPlace.appendChild(document.createElement('div'));
    }

    // allowed letters access
    sideFrame.style.display = "none";
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
                        letterPlace[char].innerHTML = ltr;
                        letterPlace[char].style.border = 'none';
                        win++;
                        if(win === word.length){
                            info[0].innerHTML = "Gagné !!!";
                            sideFrame.style.display = "unset";

                        }
                    }
                }
            }
            else {
                let wrongLtr = document.createElement('div');
                wrongLtr.innerHTML = ltr;
                wrongLetter.appendChild(wrongLtr);
                let w = wrongLetter.getElementsByTagName('div').length;
                hangImg.style.backgroundImage = "url('img/pendu-" + w + ".png')";
                if(w === 10){
                    info[0].innerHTML = "Perdu !!!";
                    sideFrame.style.display = "unset";
                    info[1].innerHTML = "Le mot était " + word.toLowerCase();
                }
            }
        })
    }
})

restart.addEventListener('click', ()=> location.reload());

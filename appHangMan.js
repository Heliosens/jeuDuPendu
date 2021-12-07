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
// get button
let startBtn = document.querySelector('#startBtn');
// get letter
let letterBtn = document.getElementsByClassName('letter');
let word = document.getElementById('word');
let ltrWord = document.getElementById("word").getElementsByTagName("div");
let wrongLetter = document.getElementById('wrongLetter');
// get hangman
let frame = document.querySelector('#hangMan');
let w = 0;
frame.style.backgroundImage = 'url("img/pendu-' + w + '.png")';
let count = 0;

// beginning
startBtn.addEventListener('click', function (event){
    event.preventDefault();
    let game = 0;

    frame.style.backgroundImage = 'url("img/pendu-' + w + '.png")';
    for(let item of letterBtn){
        item.style.visibility = "visible";
    }

    startBtn.innerHTML = "Restart";
    // shake array
    shakeArray();

    if(game < wordArray.length){
        let theWord = wordArray[game];
        console.log(theWord)
        // create div with this word
        hollowWord(theWord);
        // get letter
        for (let l = 0 ; l < letterBtn.length ; l++){
            letterBtn[l].addEventListener('click', function (event) {
                event.preventDefault();
                // get letter
                let ltr = letterBtn[l].innerHTML;

                console.log(ltr);

                letterBtn[l].style.visibility = 'hidden';

                // search letter in word (as array)
                if(theWord.includes(ltr)){
                    for(let c = 0 ; c < theWord.length ; c++){
                        if( ltr === theWord[c]){
                            ltrWord[c].innerHTML = ltr;
                            ltrWord[c].style.border = 'none';
                        }
                    }
                }
                else {
                    let wrongLtr = document.createElement('div');
                    wrongLtr.innerHTML = ltr;
                    wrongLetter.appendChild(wrongLtr);
                    // todo display count-- chance
                    w++;
                    frame.style.backgroundImage = 'url("img/pendu-' + w + '.png")';
                    if(w === 10){
                        frame.style.backgroundImage = 'url("img/pendu-' + w + '.png")';
                        // todo PERDU : display player loose
                    }

                    console.log("w " + w);
                }
            })
        }
    }
})


// create function
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


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
let startBtn = document.querySelector('#startBtn');

// get letter
let letterBtn = document.getElementsByClassName('letter');
let word = document.getElementById('word');
let ltrWord = document.getElementById("word").getElementsByTagName("div");
let wrongLetter = document.getElementById('wrongLetter');

// get hangman
let frame = document.querySelector('#hangMan');
frame.style.backgroundImage = 'url("img/pendu-10.png")';

// get display chance
let chance = document.getElementById('display').querySelector('span');

let w = 0;
// beginning
startBtn.addEventListener('click', function (event){
    event.preventDefault();

    frame.style.backgroundImage = 'url("img/pendu-' + w + '.png")';

    // restart
    let game = 0;
    for(let item of letterBtn){
        item.style.visibility = "visible";
    }
    // start
    startBtn.parentElement.style.display = 'none';
    // shake words
    shakeArray();

    if(game < wordArray.length){    // from first to the end of word
        let theWord = wordArray[game];
        console.log(theWord)
        // create div with this word
        hollowWord(theWord);
        // listen letters
        for (let l = 0 ; l < letterBtn.length ; l++){
            letterBtn[l].addEventListener('click', function (event) {
                event.preventDefault();
                // get the letter
                let ltr = letterBtn[l].innerHTML;

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


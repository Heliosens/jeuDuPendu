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

let letterBtn = document.getElementsByClassName('letter');
let word = document.getElementById('word');
let ltrWord = document.getElementById("word").getElementsByTagName("div");
let wrongLetter = document.getElementById('wrongLetter');

// beginning

// shake array
shakeArray();

// create div with first word
hollowWord(wordArray[0]);
// console.log(wordArray[0]);
let game = 0;

let count = 0;

for (let l = 0 ; l < letterBtn.length ; l++){
    letterBtn[l].addEventListener('click', function (event){
        event.preventDefault();

        // recup word
        let theWord = wordArray[game];

        // recup letter
        let ltr = this.innerHTML;

        // search in word (as array)
        if(theWord.includes(ltr)){
            for(let c = 0 ; c < theWord.length ; c++){
                if( ltr === theWord[c]){
                    ltrWord[c].innerHTML = ltr;
                }
            }
        }
        else {
            let wrongLtr = document.createElement('div');
            wrongLtr.innerHTML = ltr;
            wrongLetter.appendChild(wrongLtr);
        }

    })
}

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
    for(let char of theWord){
        let box = document.createElement('div');

        word.appendChild(box);
    }
}



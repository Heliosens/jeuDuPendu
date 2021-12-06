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

let startBtn = document.querySelector('#startBtn');
let letterBtn = document.getElementsByClassName('letter');
let word = document.getElementById('word');
let ltrWord = document.getElementById("word").getElementsByTagName("div");
let wrongLetter = document.getElementById('wrongLetter');


let count = 0;

// beginning
startBtn.addEventListener('click', function (event){
    event.preventDefault();
    let game = 0;
    startBtn.innerHTML = "Restart";
    // shake array
    shakeArray();

    if(game < wordArray.length){
        let theWord = wordArray[game];
        console.log(theWord)
        // create div with this word
        hollowWord(theWord);
    }

})


//         // recup word
//         let theWord = wordArray[game];
//
//         // recup letter
//         let ltr = this.innerHTML;
//
//         // search in word (as array)
//         if(theWord.includes(ltr)){
//             for(let c = 0 ; c < theWord.length ; c++){
//                 if( ltr === theWord[c]){
//                     ltrWord[c].innerHTML = ltr;
//                 }
//             }
//         }
//         else {
//             let wrongLtr = document.createElement('div');
//             wrongLtr.innerHTML = ltr;
//             wrongLetter.appendChild(wrongLtr);
//         }
//
//     })
// }

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

function getLetter () {
    for (let l = 0 ; l < letterBtn.length ; l++){
        letterBtn[l].addEventListener('click', function (event) {
            event.preventDefault();
            letterBtn[l].className = "used";
            return letterBtn[l];
        })
    }
}

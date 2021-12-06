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

let letterBtn = document.getElementById('letter').getElementsByTagName('a');
let word = document.getElementById('word');
let ltrWord = document.getElementById("word").getElementsByTagName("div");
let goOn = document.getElementById("goOn");

// beginning
// shake array
shakeArray();
// create div on word
hollowWord(wordArray[0]);
console.log(wordArray[0]);
let game = 0;
for (let l = 0 ; l < letterBtn.length ; l++){
    letterBtn[l].addEventListener('click', function (event){
        event.preventDefault();
        // recup word
        let theWord = wordArray[game];

        // recup letter
        let ltr = this.innerHTML;

        // search in word (as array)
        for(let c = 0 ; c < theWord.length ; c++){
            if( ltr === theWord[c]){
                ltrWord[c].innerHTML = ltr;
            }
            else {
                let wrongLtr = document.createElement('div');

            }
        }
        // if letter write it in place or on used letter
        // count test
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
        box.style.borderBottom = "3px solid black";
        box.style.height = '5vh';
        box.style.width = '2.5vw';
        word.appendChild(box);
    }
}

goOn.addEventListener('click', function (event){
    event.preventDefault();
    game++;
})

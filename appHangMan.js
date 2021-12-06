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
// beginning
// shake array
shakeArray();
// create div on word
hollowWord(wordArray[0]);

for (let i = 0 ; i < letterBtn.length ; i++){
    letterBtn[i].addEventListener('click', function (event){
        event.preventDefault();
        // recup letter
        console.log(letterBtn[i].innerHTML);
        // search in word
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

console.log(wordArray);

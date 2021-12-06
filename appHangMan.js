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

// beginning
// shake array
shakeArray();

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

console.log(wordArray);

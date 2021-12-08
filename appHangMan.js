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
    "ALIGATOR",
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
];

// get elements
const sideFrame = document.getElementById('sideFrame');

// get letters
const alphaB = document.getElementById('letter').getElementsByTagName('a');

// get target image
const hangImg = document.getElementById('hangMan');

// get target word
const wordPlace = document.getElementById('word');

// get start button
const start = document.getElementById('startBtn');

// get info 0 & 1
const info = document.getElementById('btn').getElementsByTagName('span');

// get wrong side
const wrongLetter = document.getElementById('wrongLetter');

// start
start.addEventListener('click', function (event){
    event.preventDefault();

    let word = arrayOfWord[Math.floor( Math.random() * arrayOfWord.length)];


})
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

// get start button
let startBtn = document.getElementById('startBtn');

// get all letters, target of the word, each letter of the word, target of wrong letter
let letterBtn = document.getElementsByClassName('letter');
let word = document.getElementById('word');
let ltrWord = document.getElementById("word").getElementsByTagName("div");
let wrongLetter = document.getElementById('wrongLetter');

// get hangman
let frame = document.querySelector('#hangMan');
frame.style.backgroundImage = 'url("img/pendu-10.png")';

// get display chance
let info = document.getElementById('btn').getElementsByTagName('span');


// start state
// let count = 0;  // good letter

// start or restart
startBtn.addEventListener('click', function (event) {
    event.preventDefault();

    // hide start btn
    startBtn.parentElement.style.display = 'none';

    // the word
    const theWord = wordArray[Math.floor(Math.random() * wordArray.length)];


    console.log("word = " + theWord);


    // create div with this word
    word.innerHTML = "";
    for(let char of theWord){
        let box = document.createElement('div');
        word.appendChild(box);
    }

    // no hang man
    frame.style.backgroundImage = 'url("img/pendu-0.png")';
    // reset chance
    info[0].innerHTML = "10 chances";
    info[1].innerHTML = ""

    // reset visibility
    for(let item of letterBtn){
        item.style.visibility = "visible";
    }

    // reset wrong div
    wrongLetter.innerHTML = "";

    let count = 0;
    // listen letters and test letter
    let ltr = "";

    for (let letter of letterBtn){
        letter.addEventListener('click', function (event) {
            let test = theWord;
            console.log("test =" + test);
            event.preventDefault();
            // test the letter
            ltr = letter.innerHTML;
            letter.style.visibility = 'hidden';




            if(test.includes(ltr)){

                for(let i = 0 ; i < theWord.length ; i++){
                    if( ltr === theWord[i]){
                        ltrWord[i].innerHTML = ltr;
                        ltrWord[i].style.border = 'none';
                        count++;
                    }

                }
                console.log('ici = ' + theWord);
                console.log('ici test =' + test);
                console.log("count = " + count);

                if(count === theWord.length){
                    info[1].innerHTML = "Gagné";

                    // hide start btn
                    startBtn.parentElement.style.display = 'flex';
                }
            }
            else {
                let w = wrongLetter.getElementsByTagName('div').length;
                let wrongLtr = document.createElement('div');
                wrongLtr.innerHTML = ltr;
                wrongLetter.appendChild(wrongLtr);
                frame.style.backgroundImage = 'url("img/pendu-' + w + '.png")';
                info[0].innerHTML = (parseInt(info[0].innerHTML) - 1) + " chances";
                if(w === 10){
                    alert("perdu");

                }
            }
        })
    }
})


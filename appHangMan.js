let section = document.querySelector("section");
let letterBtn = document.getElementById('letter').getElementsByTagName('span');

section.style.height = innerHeight * .9 + "px";

for (let i = 0 ; i < letterBtn.length ; i++){
    letterBtn[i].addEventListener('click', function (event){
        event.preventDefault();

    })
}


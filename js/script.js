const listEmail = ['pluto5@gmail.com', 'pippo@gmail.com', 'topo@gmail.com', 'mela@gmail.com', 'boh@gmail.com'];

let bottone = document.getElementById('invio');

let notFound = document.getElementById('not_found');

let found = document.getElementById('accedi');

let dadi = document.getElementById('gioco');

let trovata = false;

bottone.addEventListener("click", function() {
    let email = document.getElementById("email").value;
    console.log(email);
    for (let i = 0; i < listEmail.length; i++) {
        if (listEmail[i] === email) {
            trovata = true;
        }
    }
    if (trovata) {
        found.classList.add('disactive');
        dadi.classList.remove('disactive');
    } else {
        notFound.classList.remove('disactive');
    }
})

//SECONDO ESERCIZIO
let gioca = document.getElementById('play');

let userResult = document.getElementById('user_number');

let pcResult = document.getElementById('pc_number');

let winner = document.getElementById('vincitore');

gioca.addEventListener('click', function(){
    let userNumber = (Math.round(Math.random() * 6) + 1);
    console.log(userNumber);

    let pcNumber = (Math.round(Math.random() * 6) + 1);
    console.log(pcNumber);

    userResult.innerHTML += `<p> ${userNumber} </p>`;

    pcResult.innerHTML += `<p> ${pcNumber} </p>`;

    if(userNumber > pcNumber){
        winner.innerHTML= 'Congratulazioni! Hai vinto.';
    } else if (userNumber === pcNumber){
        winner.innerHTML= 'Pareggio!';
    } else {
        winner.innerHTML= 'Oh no! Hai perso.';
    }
})
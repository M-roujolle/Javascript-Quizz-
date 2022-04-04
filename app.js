const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    //préviens le comportement par défaut pour ne pas actualiser la page
e.preventDefault();

//log pour vérifier que l'on recupère la valeur de la q1
// console.log(document.querySelector('input[name="q1"]:checked').value);

for (i = 1; i < 6; i++){

    //on "push" les données dans un tableau que l'on vide après chaque submit
    tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
}
// console.log(tableauResultats);
verifFunc(tableauResultats);
tableauResultats = [];
})

function verifFunc(tabResultats){

    for(let a = 0; a < 5; a++){
       if(tabResultats[a] === reponses[a]){
           verifTableau.push(true);
       } else {
           verifTableau.push(false);
       }
    }
    // console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResultats(tabCheck){
    const nbDeFautes = tabCheck.filter(element => element !== true).length;
    // console.log(nbDeFautes);

    switch(nbDeFautes) {
        case 0:
            titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            aideResultat.innerText = ''
            noteResultat.innerText = '5/5'
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu. 😭😭';

    }
}


function couleursFonction(tabValBool){
    for (let i = 0; i < tabValBool.length; i++){

        if(tabValBool[i] === true){
            toutesLesQuestions[i].style.background = '#5ead00';
        } else {
            toutesLesQuestions[i].style.background = '#ff2d49';
            toutesLesQuestions[i].classList.add('echec');

            setTimeout(() =>{
toutesLesQuestions[i].classList.remove('echec');
            }, 500)

        }

    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () =>{
        item.style.background = "white";
    })
})









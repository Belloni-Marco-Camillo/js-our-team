/* Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.

Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva
BONUS 2 (solo se non sei giá fuso):
organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico. */


const team = [{
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];



/* milleston 1 */
/* for (let i = 0; i < team.length; i++) {
    const teamUser = team[i]
    console.log(teamUser.name);
    console.log(teamUser.role);
    console.log(teamUser.image);
    console.log(`_________`);
} */


/* milleston 2 */
const user = document.querySelector(`.user`)
for (let i = 0; i < team.length; i++) {
    const teamUser = team[i]
    const userCard = document.createElement(`div`);
    const member = team[i];
    userCard.innerHTML =
        `
    <img class="img-fluid" src="./asset/js/${teamUser.image}" alt="">
    <h1> ${teamUser.name}</h1>
    <h3> ${teamUser.role}</h3>
    `;
    user.append(userCard)
    userCard.classList.add(`col-2`)
    userCard.classList.add(`img-fluid`)
}
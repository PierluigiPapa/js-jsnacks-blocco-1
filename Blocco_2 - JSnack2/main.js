//Costante per creare una lista di nomi
const nomi= ["Mike", "Dustin", "Lucas", "Will", "Jim", "Max", "Steve", "Jane"]

//Costante per creare una lista di cognomi
const cognomi= ["Wheeler", "Henderson", "Sinclair", "Byers", "Hopper", "Mayfield", "Harrington", "Ives", "Shelby", "Stinson", "Bing"]


//Variabile per generare il numero degli invitati
let numeroPartecipanti= 10;

//Funzione per generare la falsa lista
function generaNomeCognomeCasuale (){
    let nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)]; 
    let cognomeCasuale = cognomi[Math.floor(Math.random()*nomi.length)];
    return nomeCasuale + " " + cognomeCasuale;
}

//Creazione della lista dei falsi invitati
for (let i = 0; i <  numeroPartecipanti; i++) {
    console.log(generaNomeCognomeCasuale());
}
//Constante per mostrare il risultato nell'html
const cuboHtml = document.getElementById('cubo')

//Variabile per chiedere all'utente di inserire il numero
let numero = (prompt("Inserisci un numero:"));

//Ciclo per stampare un numero elevato al cubo
for (let i = 1; i <= numero; i++) {
    let cubo= Math.pow (i, 3);
    console.log ("Il cubo di", i, "è", cubo);

    cuboHtml.innerHTML += `<p>Il cubo di ${numero} è ${cubo}</p>`
}


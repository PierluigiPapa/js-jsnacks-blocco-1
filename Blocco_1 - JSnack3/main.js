//Variabile per stabilire il risultato
let sum = 0

for (let i = 0; i < 10; i++) {
    // Variabile per inserire il numero tramite prompt
    let numero = parseInt(prompt("Inserisci il numero", RandomNumber(0,100))
    )

    //Aggoimgere il numero al risultato
    console.log (sum+=numero)
}

document.writeln(sum)

function RandomNumber (min,max) {

  return Math.floor(Math.random()*(max-min + 1) + min)
}

  
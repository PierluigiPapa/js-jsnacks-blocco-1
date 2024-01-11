//Variabile per stabilire il risultato
let risultato = 0

for (let i = 1; i <= 10; i++) {
    // Variabile per inserire il numero tramite prompt
    let numero = parseFloat(prompt(`Inserisci il numero`));
  
    // Condizione per verificare SE il numero è valido
    if (isNaN(numero)) {
      alert('Inserisci un numero valido.');
      i--; // ALTRIMENTI si ripete il procedimento
    } else {
      // Aggiungi il numero al risultato
      risultato += numero;
    }
  }
  
  // Stampa la somma dei numeri inseriti
  console.log(`La somma di tutti i numeri inseriti è: ${risultato}`);

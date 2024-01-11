//Costante per stabilire l'importo nell'html
const importoHtml = document.getElementById ('somma')

//Costante per i numeri interi
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Variabile per stabilire la somma iniziale
let importo = 0

//Utilizzo degli array per sommare gli elementi in posizioni dispari 
for (let i= 1; i<numeri.length; i+=2) {
    importo += numeri[i];
}

//Console per stampare l'importo
console.log("La somma degli elementi in posizioni dispari è:", importo);

importoHtml.innerHTML += `<p>La somma dei numeri dispari è ${importo}</p>`



//PASSAGGI LOGICI

// Chiedo all'utente di scegliere pari o dispari.
// Chiedo all'utente un numero da 1 a 5.
// Genero un numero casuale da 1 a 5 per il computer.
// Sommo il numero dell'utente e quello del computer.
// Controllo se la somma è un numero pari o dispari.
// Confronto il risultato con la scelta iniziale per determinare il vincitore.
// Comunico il vincitore e tutti i dati della partita.

console.log("ESERCIZIO Pari e dispari 1️⃣ 2️⃣ 3️⃣ 4️⃣");

// Chiedo la scelta tra pari e dispari
const userChoice = prompt("Pari o dispari?");

// Chiedo un numero da 1 a 5 e lo converto in numero intero
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));

function getRandomNumber(min, max) {

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}

//Genero il numero per il computer da 1 a 5 
const computerNumber = getRandomNumber(1, 5);

//Sommo i due numeri
const sum = computerNumber + userNumber;

// Controllo se la somma è pari o dispari con una funzione
function isEven(number) {

    if (number % 2 === 0) {

        return "pari";

    } else {

        return "dispari";
    }
}

// Uso la funzione per capire se la somma è pari o dispari
const sumResult = isEven(sum);

console.log(`Hai scelto ${userChoice} e il numero ${userNumber} 👾`);
console.log(`Il computer ha scelto il numero ${computerNumber} 💻`);
console.log(`La somma è ${sum}, che è un numero ${sumResult} 🔢`);

if (sumResult === userChoice) {

    console.log("Bravo, hai vinto! 🎉")

} else {

    console.log("Mi spiace, ha vinto il computer! 💻")

}
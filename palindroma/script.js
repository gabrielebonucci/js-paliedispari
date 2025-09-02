
//PASSAGGI LOGICI

//Chiedo all'utente di inserire una parola.
//Creo una funzione che prenderà questa parola come input.
//Dentro la funzione, inverto la parola.
//Confronto la parola originale con quella invertita.
//la funnzione mi deve dire se sono uguali o no.
//in base al risultato comunico se la parola è palindroma o meno.

console.log("💻 la parola è palindroma?");

// Chiedo all'utente di inserire una parola
const userWord = prompt("Inserisci una parola: ");

function isPalindroma(word) {

    // Divido la parola in un array di lettere -> ['c', 'i', 'a', 'o']

    const splitWord = word.split('');

    // Inverto l'ordine delle lettere nell'array -> ['o', 'a', 'i','c']

    const reversedArray = splitWord.reverse();

    // Unisco le lettere invertite per formare la nuova parola -> 'oaic'

    const reverseWord = reversedArray.join ('');

    // Confronto la parola originale con quella invertita

    if (word === reverseWord) {
        return true;
    } else {
        return false;
    }
}

// Chiamo la funzione passando la parola dell'utente e salvo il risultato

    const result = isPalindroma(userWord);

    if (result === true) {
        console.log("La parola che hai inserito è palindroma! ✅");

    } else {
        console.log("La parola che hai inserito NON è palindroma! ❌");

    }

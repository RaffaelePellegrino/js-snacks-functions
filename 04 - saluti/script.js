/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';

let nomeSecondario = 'Mario'
// Dichiara la funzione qui.
function saluto(nome){
    console.log(`Ciao ${nome}`)
}

// Invoca la funzione qui e stampa il risultato in console

// saluto(name);
saluto(nomeSecondario)
//Risultato atteso se si passa 'Mario': // ciao Mario
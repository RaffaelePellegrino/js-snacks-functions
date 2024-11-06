/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaLettere(stringa,vocali){
    let tappo = 0
    let vocaliTrovate = []
    for (let i=0; i<stringa.length; i++){
        for (let j=0; j<vocali.length ; j++) {
            if(stringa[i] === vocali[j]){
                tappo += 1
                vocaliTrovate.push(stringa[i])
            }
        }
    }
    return tappo , vocaliTrovate;
}
const vocaliArray = ["A","a","E","e","I","i","O","o","U","u"]

// Invoca la funzione qui e stampa il risultato in console

console.log(contaLettere(word,vocaliArray))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
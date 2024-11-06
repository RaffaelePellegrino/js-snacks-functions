/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaLettere(stringa){
    let tappo = 0
    let vocaliTrovate = []
    for (let i=0; i<stringa.length; i++){
        if(stringa[i] === "a" || stringa[i] === "e" || stringa[i] === "i" || stringa[i] === "o"  || stringa[i] === "u"  ){
            tappo += 1
            vocaliTrovate.push(stringa[i])
        }
    }
    return tappo , vocaliTrovate;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(contaLettere(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function findTo(array, toSearch){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if(array[i][0] === toSearch){
            console.log(array[i]);
            newArray.push(array[i]);
        }
    }
    return newArray
}

// Invoca la funzione qui e stampa il risultato in console

let x = prompt("inserisci una lettera").toUpperCase()

console.log(findTo(names,x))
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
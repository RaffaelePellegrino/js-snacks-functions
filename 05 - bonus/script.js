/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

let nomeSecondario = 'Mario';
// Dichiara la funzione qui.
function SalutoDateHours(nome){
    const ora = new Date().getHours();
    
    let saluto = '';
    
    if (ora<13){
        saluto="Buongiorno";
    }else if(ora<18){
        saluto="Buon pomeriggio";
    }else{
        saluto="Buonasera";
    }
    return `${saluto}, ` + nome ;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(SalutoDateHours(nomeSecondario));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
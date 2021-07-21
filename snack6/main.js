/*Inserisci un numero, se è pari stampa il numero,
 se è dispari stampa il numero successivo */
var numerUtente;

do {
numerUtente = parseInt(prompt("Inserisci un numero")); 
} while (isNaN(numerUtente));

if(numerUtente % 2 == 0) 
    console.log(numerUtente);
else 
    console.log(numerUtente + 1);
 
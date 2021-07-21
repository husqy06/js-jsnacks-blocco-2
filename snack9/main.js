/*Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

var firstArray = [];
var secondArray = [];

var min = 1; // i miei array avranno da 1 a 10 elementi e numeri da 1 a 10
var max = 10;

// imposto una lunghezza casuale per i miei array
var firstALenght = Math.floor(Math.random() * (max - min + 1) + min);
console.log("Lunghezza primo array: " + firstALenght);

var secondALenght = Math.floor(Math.random() * (max - min + 1) + min);
console.log("Lunghezza secondo array: " + secondALenght)

// inserisco elementi casuali nell'array
for(let i = 0; i < firstALenght; i++) {
    firstArray.push(Math.floor(Math.random() * (max - min + 1) + min));
}
console.log("Primo Array: " + firstArray);

for(let i = 0; i < secondALenght; i++) {
    secondArray.push(Math.floor(Math.random() * (max - min + 1) + min));
}
console.log("Secondo Array: " + secondArray);

// aggiungo elementi nell'array piu piccolo

if(firstALenght > secondALenght) {

    for(let i = 0; i < (firstALenght - secondALenght); i++) {
        secondArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    console.log("Array invariato: " + firstArray);
    console.log("Array con elementi aggiunti: " + secondArray);

} else if(secondALenght > firstALenght){

    for(let i = 0; i < (secondALenght - firstALenght); i++) {
        firstArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    console.log("Array con elementi aggiunti: " + firstArray);
    console.log("Array invariato: " + secondArray);

} else {
    console.log(firstArray);
    console.log(secondArray);
}
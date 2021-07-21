/*Crea un array di numeri interi 
e fai la somma di tutti gli elementi che sono in posizione dispari*/

var myArray = [];

var arrayLenght = 5;

var somma = 0;

for(let i = 0; i < arrayLenght; i++) {
    myArray.push(Math.floor(Math.random() * arrayLenght));
    if(i % 2 == 1) {
        somma = somma + myArray[i];;
    }
}
console.log(myArray);
console.log(somma);
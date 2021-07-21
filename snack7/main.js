/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
   Gatsby vuole generare una falsa lista di invitati. */

var nomi = [
    "Luca",
    "Giovanni",
    "Marco",
    "Edoardo",
    "Filippo"
]

var cognomi = [
    "Bianchi",
    "Rossi",
    "Esposito",
    "Verdi",
    "Di Gregorio"
]

for(let i = 0; i < nomi.length; i++) {
    var randomNomi = nomi[Math.floor(Math.random() * nomi.length)];
    var randomCognomi = cognomi[Math.floor(Math.random() * cognomi.length)];
    console.log(randomCognomi + " " + randomNomi);
}

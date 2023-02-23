// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.



/* - chiedere all' utente nome e cognome
- chiedere all'utente l'età
- chiedere all'utente i km che vuole percorrere

- cliccando su generate si mostrerà il biglietto con info:
- nome e cognome
- tipo di biglietto
- numero carrozza (random da 0 a 8)
- codice (random da 0 a 1000)
- costo biglietto

? SE l'utente ha meno di 18 anni
    ° verrà applicato lo sconto del 20%.
    ° Biglietto ScontoMinorenni
: ALTRIMENTI SE l'utente ha più di 65 anni 
    ° verrà applicato lo sconto del 40%.
    ° Biglietto ScontoOver65
: ALTRIMENTI 
    ° verrà applicato il prezzo standard.
    ° Biglietto Standard

*/

// bottone

let ticketGeneratorEl = document.getElementById("ticket_generator");


ticketGeneratorEl.addEventListener("click", function(){

    // nome passeggero

    let userNameEl = document.getElementById("userName");

    let userName = userNameEl.value;

    // test bottone nome
    console.log(userName);


    // km da percorrere

    let userKmEl = document.getElementById("userKm");

    let userKm = userKmEl.value;

    // test bottone km
    console.log(userKm);

    // fascia età

    let userAgeEl = document.getElementById("userAge");

    let userAge = userAgeEl.value;

    // test bottone age
    console.log(userAge);


    // prezzo biglietto standard

    let fullPrice = userKm * 0.21;

    console.log(fullPrice);

    if(userAge == "Minorenne"){

        


    }




});



console.log("Inizio Esecuzione Programma");

// Variabili
let numero = document.getElementById("inNumber").value;
let data = new Date();

// Impostazione del giorno attuale
document.getElementById("saluto").innerHTML = "Data di oggi: " + data.getDay() + "/" + data.getMonth() + "/" + data.getFullYear();

// Funzioni
function elabora(){ // Elabora il numero
    if (numero >= 0 && numero <= 255){
        document.getElementById("outText").innerHTML = "Hai inserito il numero " + numero;
    } else{
        document.getElementById("error").innerHTML = "Errore: il numero " + numero + " non rispetta i criteri!";
    }
}

// Rimuove tutti i valori e resetta il sito
function reset(){
    document.getElementById("inNumber").value = "";
    document.getElementById("outText").innerHTML = "Output";
    document.getElementById("error").innerHTML = "Errori";
}
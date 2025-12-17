console.log("Inizio Esecuzione Programma");

// Variabili
let data = new Date();
let array = [];
let numeriInseriti = 0;

// Impostazione del giorno attuale
document.getElementById("saluto").innerHTML = "Data di oggi: " + data.getDay() + "/" + data.getMonth() + "/" + data.getFullYear();

function inserisciNumero() {
    for (let i = 0; i < 3; i++) {
        if (elabora()) {
            array.push(numero);
            console.log("Numero inserito: " + numero);
        } else {
            alert("Numero non valido, riprova!");
            break;
        }
    }

    document.getElementById("result").innerHTML = "Numeri inseriti: " + array.join(", ");
}

// Funzioni
function elabora() { // Elabora il numero
    if (numeriInseriti >= 3) {
        document.getElementById("error").innerHTML = "Errore: hai già inserito 3 numeri!";
        return false;
    }

    let numero = parseInt(document.getElementById("inNumber").value);
    if (numero >= 0 && numero <= 255) {
        document.getElementById("outText").innerHTML = "Hai inserito il numero " + numero;
        array.push(numero);
        numeriInseriti++;
        let out = document.getElementById("outText");
        out.textContent = "Hai inserito il numero " + numero;
        out.style.color = "rgb(" + numero + ",0,0)";
        if (array.length >= 3) {
            const r = array[0], g = array[1], b = array[2];
            out.style.color = "rgb(" + r + "," + g + "," + b + ")";
        } else {
            out.style.color = "rgb(" + numero + ",0,0)";
        }
        document.getElementById("result").innerHTML = "Numeri inseriti: " + array.join(", ");
        return true;
    } else {
        document.getElementById("error").innerHTML = "Errore: il numero " + numero + " non rispetta i criteri, deve essere tra 0 e 255!";
        return false;
    }
}

// Rimuove tutti i valori e resetta il sito
function reset() {
    document.getElementById("inNumber").value = "";
    document.getElementById("outText").innerHTML = "Output";
    document.getElementById("error").innerHTML = "Errori";
    document.getElementById("result").innerHTML = "Risultato";
    array = [];
    numeriInseriti = 0;
    console.log("Reset completato");
}
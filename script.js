console.log("Inizio Esecuzione Programma");

// Variabili
let data = new Date();
let array = [];
let numeriInseriti = 0;

// Impostazione del giorno attuale
document.getElementById("saluto").textContent = "Data di oggi: " +
    data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();

// Funzione principale per inserire numero
function inserisciNumero() {
    elabora();
}

// Funzione di elaborazione
function elabora() {
    if (numeriInseriti >= 3) {
        document.getElementById("error").textContent = "Errore: hai già inserito 3 numeri!";
        return false;
    }

    let numero = parseInt(document.getElementById("inNumber").value);

    if (isNaN(numero) || numero < 0 || numero > 255) {
        document.getElementById("error").textContent = 
            "Errore: il numero " + numero + " non rispetta i criteri, deve essere tra 0 e 255!";
        return false;
    }

    array.push(numero);
    numeriInseriti++;
    document.getElementById("error").textContent = "";

    // Mostra il numero inserito
    let out = document.getElementById("outText");
    out.textContent = "Hai inserito il numero " + numero;

    // Se sono già 3 numeri, usa RGB
    if (array.length === 3) {
        const [r, g, b] = array;
        out.style.color = `rgb(${r},${g},${b})`;
    } else {
        // Altrimenti usa solo rosso
        out.style.color = `rgb(${numero},0,0)`;
    }

    // Mostra tutti i numeri inseriti
    document.getElementById("result").textContent = "Numeri inseriti: " + array.join(", ");
    console.log("Numeri inseriti: " + array.join(", "));
    return true;
}

// Funzione reset
function reset() {
    document.getElementById("inNumber").value = "";
    document.getElementById("outText").textContent = "Output";
    document.getElementById("error").textContent = "Errori";
    document.getElementById("result").textContent = "Risultato";
    array = [];
    numeriInseriti = 0;
    console.log("Reset completato");
}
console.log("Inizio Esecuzione Programma");

let array = [];
let numeriInseriti = 0;

function elabora() {
    let numero = parseInt(document.getElementById("inNumber").value);

    // Controllo validità
    if (isNaN(numero) || numero < 0 || numero > 255) {
        document.getElementById("error").textContent =
            "Errore: il numero deve essere tra 0 e 255!";
        return;
    }

    document.getElementById("error").textContent = "";

    // Aggiunge numero se non ci sono già 3 numeri
    if (numeriInseriti < 3) {
        array.push(numero);
        numeriInseriti++;
    } else {
        document.getElementById("error").textContent = "Hai già inserito 3 numeri!";
        return;
    }

    // Mostra i numeri inseriti nel div output
    document.getElementById("outText").textContent = "Numeri inseriti: " + array.join(", ");

    // Determina colore RGB usando i numeri inseriti
    let r = array[0] || 0;
    let g = array[1] || 0;
    let b = array[2] || 0;

    // Mostra la scritta colorata nel paragrafo result
    let testo = document.getElementById("inText").value || "Testo da colorare";
    let result = document.getElementById("result");
    result.textContent = testo;
    result.style.color = `rgb(${r},${g},${b})`;

    console.log("Numeri inseriti: " + array.join(", "));
}

function reset() {
    document.getElementById("inNumber").value = "";
    document.getElementById("inText").value = "";
    document.getElementById("outText").textContent = "Output";
    document.getElementById("result").textContent = "Risultato";
    document.getElementById("error").textContent = "Errori";
    array = [];
    numeriInseriti = 0;
    console.log("Reset completato");
}
console.log("Fine Esecuzione Programma");
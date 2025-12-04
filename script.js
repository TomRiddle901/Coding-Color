console.log("Inizio Esecuzione Programma");

function elabora(){
    let numero = document.getElementById("inNumber").value;
    if (numero >= 0 && numero <= 255){
        document.getElementById("outText").innerHTML = "Hai inserito il numero " + numero;
    } else{
        document.getElementById("error").innerHTML = "Errore: il numero " + numero + " non rispetta i criteri!";
    }
}

function reset(){
    document.getElementById("inNumber").value = "";
    document.getElementById("outText").value = "";
    document.getElementById("error").value = "";
}
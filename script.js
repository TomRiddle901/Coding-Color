console.log("Inizio Esecuzione Programma");

function elabora(){
    let numero = document.getElementById("inNumber").value;
    if (numero >= 0 && numero <= 255){
        alert(numero)
    } else{
        alert("Numero non valido!");
    }
}

function reset(){
    document.getElementById("inNumber").value = "";
}
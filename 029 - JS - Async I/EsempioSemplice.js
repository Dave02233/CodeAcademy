function provaRandomPromise() {
    return new Promise((resolve, reject) => {
        const numero = Math.random();
        if (numero > 0.5) {
            resolve("Successo! Numero: " + numero);
        } else {
            reject("Errore! Numero: " + numero);
        }
    });
}

console.log("Inizio...");
provaRandomPromise()
    .then(messaggio => {
        console.log("Promessa risolta:", messaggio);
    })
    .catch(errore => {
        console.log("Promessa rifiutata:", errore);
    });
console.log("Fine!");
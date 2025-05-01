function messageGenerator() {
    const Messages = [
        "Mai accettare un lavoro che non ti piace.",
        "Se ti pagano bene allora puoi anche accettare.",
        "Le droghe pesanti possono diventare la tua professione.",
        "Non ti preoccupare, il tuo lavoro non è così importante.",  
    ];

    return Messages[Math.floor(Math.random() * Messages.length)];
}


console.log(messageGenerator());
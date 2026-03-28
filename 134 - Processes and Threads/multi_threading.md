Normalmente un singolo core della CPU esegue un thread alla volta, ma tramite context switching rapidissimo riesce a dare l'impressione di eseguire più processi contemporaneamente. Con l'evoluzione hardware è nata la capacità di eseguire più thread in parallelo sullo stesso core: il multithreading.

I vantaggi sono concreti: migliore utilizzo delle risorse, maggiore reattività del sistema e possibilità di eseguire task pesanti in background senza bloccare l'utente.

Tuttavia questa potenza ha un costo in complessità. I problemi più comuni sono:

    - Data race: più thread modificano lo stesso dato contemporaneamente, causando risultati imprevedibili

    - Deadlock: più thread si aspettano a vicenda bloccandosi in modo permanente

Peggio ancora, questi bug dipendono dal preciso timing della CPU, rendendoli non deterministici e quindi difficilissimi da riprodurre e testare.
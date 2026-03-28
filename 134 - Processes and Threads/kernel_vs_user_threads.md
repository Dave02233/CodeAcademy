I thread si dividono in due categorie in base a dove vivono.

I kernel thread sono gestiti direttamente dal sistema operativo, che ne è pienamente consapevole e ne controlla l'esecuzione. I user thread invece esistono solo nello spazio utente: il kernel non li conosce, ma sono più efficienti perché evitano le costose chiamate di sistema.

Poiché il kernel non li vede, i user thread devono comunque essere mappati su kernel thread per poter essere eseguiti. Esistono tre modelli di mappatura:

    1:1 — ogni user thread corrisponde a un kernel thread; implementazione semplice e sfrutta l'accelerazione hardware, ma è più pesante

    N:1 — molti user thread condividono un solo kernel thread; leggerissimi e con context switch veloce, ma nessuna accelerazione hardware e niente parallelismo reale

    M:N (ibrido) — M user thread mappati su N kernel thread; combina leggerezza e accelerazione hardware, ma la complessità introduce bug come la priority inversion, dove task meno importanti vengono eseguiti prima di quelli prioritari

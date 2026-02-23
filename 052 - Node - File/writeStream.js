const fs = require('fs');

const filePath = '052 - Cinquantaduesimo Giorno - Node/file.txt';

// Legge il contenuto intero del file in modo asincrono
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Errore nella lettura:', err);
    return;
  }

  console.log(`Contenuto originale:\n/*Inizio*/\n${data}\n/*Fine*/`);

  // Crea uno stream di scrittura (sovrascrive il file)
  const writeStream = fs.createWriteStream(filePath, { encoding: 'utf8' });

  writeStream.on('error', (err) => {
    console.error('Errore nella scrittura:', err);
  });

  writeStream.on('finish', () => {
    console.log('Scrittura con stream completata.');
  });

  // Scrive i nuovi dati tramite il write stream
  writeStream.write('Questo è il nuovo contenuto scritto nel file.\n');
  writeStream.write('Aggiunta di una seconda riga.');

  writeStream.end(); // Chiude lo stream e finalizza la scrittura
});

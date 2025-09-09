const fs = require('fs').promises;

const filePath = '052 - Cinquantaduesimo Giorno - Node/file.txt';

async function main() {
  try {
    // Legge l'intero contenuto del file
    const content = await fs.readFile(filePath, 'utf8');
    console.log('Contenuto originale:', content);

    // Definisci il nuovo contenuto da scrivere nel file
    const newContent = 'Questo è il nuovo contenuto scritto nel file.\nAggiunta di una seconda riga.';

    // Scrive (sovrascrive) il file con il nuovo contenuto
    await fs.writeFile(filePath, newContent, 'utf8');
    console.log('Scrittura completata.');
  } catch (err) {
    console.error('Errore:', err);
  }
}

main();

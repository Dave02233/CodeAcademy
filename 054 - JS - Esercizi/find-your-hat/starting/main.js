const prompt = require('prompt-sync')({sigint: true});
const readline = require('readline');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const findPosition = (field) => {

    if(!field) return new Error('Field non presente');

    for(let x = 0; x < field.length; x++) {
        for(let y = 0; y < field[x].length; y++) {
            if(field[x][y] === pathCharacter) return {x, y};
        }
    }

    throw new Error('Player non presente');
}

const inRange = (value, setpoint, range) => {
    return (value <= setpoint + range && value >= setpoint - range)
}

const movePlayer = (coords = {x: 0, y: 0}, newCoords = {x: 0, y: 0}, field = myField) => {

    if(newCoords.x < 0 || newCoords.y < 0) return new Error('Coordinate negative');
    if(newCoords.x >= field[0].length || newCoords.y >= field.length) {
        return new Error('Fuori dal campo');
    }

    if(!inRange(newCoords.x, coords.x, 1)) return new Error('Calcolo coordinate X errato');
    if(!inRange(newCoords.y, coords.y, 1)) return new Error('Calcolo coordinate Y errato');

    const destTile = field[newCoords.x][newCoords.y];
    if(destTile === hole) {
        process.stdout.write('\nSei caduto in un buco!\n');
        process.exit();
    }
    if(destTile === hat) {
        process.stdout.write('\nHai trovato il cappello! Hai vinto!\n');
        process.exit();
    }

    const newField = field;
    newField[coords.x][coords.y] = fieldCharacter;
    newField[newCoords.x][newCoords.y] = pathCharacter;
    
    return newField
}


class Field {
    constructor(tdArray) {
        this._field = tdArray;
    }
    move(dir) {
        const playerCoords = findPosition(this._field);
        
        switch(dir){
            case 'w':
                this._field = movePlayer(playerCoords, {...playerCoords, x: playerCoords.x - 1}, this._field);
                break;
            case 'a':
                this._field = movePlayer(playerCoords, {...playerCoords, y: playerCoords.y - 1}, this._field);
                break;
            case 's':
                this._field = movePlayer(playerCoords, {...playerCoords, x: playerCoords.x + 1}, this._field);
                break;
            case 'd':
                this._field = movePlayer(playerCoords, {...playerCoords, y: playerCoords.y + 1}, this._field);
                break;
            
            default:
                process.stdout.write('\nMossa non trovata\n')
        }

    }
    print() {
        let out = '';

        for(let i = 0; i < this._field.length; i++) {

            const row = this._field[i]

            for(let p = 0; p < row.length; p++) {
                out += row[p];
            }
            out += '\n'
        }
        process.stdout.write(`\n${out}\n`);
    }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.print();
process.stdout.write('In quale direzione vuoi muoverti? (utilizza WASD per muoverti)\n');
// Setup dell'Event Emitter

const interface = readline.createInterface({input: process.stdin, output: process.stdout})

interface.on('line', (input) => {
    if (input === 'q') {
        console.log('Hai terminato il gioco');
        process.exit(); 
    }
    myField.move(input);
    myField.print();
    process.stdout.write('\nIn quale direzione vuoi muoverti? (utilizza WASD per muoverti)\n\n')
});



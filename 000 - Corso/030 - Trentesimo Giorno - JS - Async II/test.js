class magData {
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.price = 100;
    }   
}

const magazzino = new magData('acciuga', 10);

function fetchMagData() {
    return new Promise((resolve, reject) => {
        console.log('Fetching data...');
        setTimeout(() => {
            if (magazzino.quantity > 0) {
                resolve(`${magazzino.item} disponibile: ${magazzino.quantity}`);
            }else{
                reject('Non disponibile');
            }
        }, 2000);
    })
}

function fetchPrice() {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            Math.random() > 0.5 ? resolve(magazzino.price) : reject(new Error('Errore nel recupero del prezzo'));
        }, 1000);
});
}

async function getMagData() {
    const price = await fetchPrice()
                        .catch(rejection => 'XXXX,XX');
    fetchMagData()
        .then(result => {
            console.log(`${result} con un prezzo unitario di ${price}€`);
        })
        .catch(error => {
            console.log(error);
        })
}

getMagData();
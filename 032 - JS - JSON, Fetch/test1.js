const url = 'https://api.datamuse.com/words';
const parameters = 	'?sl=';

async function getSuggestions() {
    const phrase = 'academy';

    try {
        const result = await fetch(url + parameters + phrase);

        if (result.ok) {
            const resultJson = await result.json();
            console.log(JSON.stringify(resultJson, null, 2));
        }
    } catch (error) {
        console.error(error);
    }
}

getSuggestions();
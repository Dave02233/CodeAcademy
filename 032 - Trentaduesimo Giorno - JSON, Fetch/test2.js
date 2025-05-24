const url = 'https://api.themoviedb.org/3/movie/top_rated';
const extra = '?api_key=ef62fc249f7fc4c4ff414228a13cb43b&page=1';;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};

async function getSuggestions() {

    try {
        const result = await fetch(url + extra, options);

        if (result.ok) {
  
            const resultJson = await result.json();
            const titles = resultJson.results.map(movie => movie.original_title);
            //console.log(JSON.stringify(resultJson, null, 2));
            console.log(titles);
        }
    } catch (error) {
        console.error(error);
    }
}

getSuggestions();
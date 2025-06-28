import { getStoredAccessToken } from './getToken';

export async function searchSpotify(query) {
  const access_token = getStoredAccessToken();
  if (!access_token) {
    throw new Error('Access token non disponibile');
  }

  const params = new URLSearchParams({
    q: query,
    type: 'track,artist',
    market: 'IT',
    limit: 5
  });

  const response = await fetch(`https://api.spotify.com/v1/search?${params.toString()}`, {
    headers: {
      'Authorization': 'Bearer ' + access_token
    }
  });

  if (!response.ok) {
    throw new Error('Erroreeee');
  }

  const data = await response.json();
  console.log('Risultati della ricerca:', data);
  return data;
}

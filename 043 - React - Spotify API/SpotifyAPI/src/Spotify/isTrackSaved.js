import { getStoredAccessToken } from './getToken';

// Controlla se già nei brani preferiti su Spotify
export async function isTrackSaved(trackId) {
  const access_token = getStoredAccessToken();
  if (!access_token) {
    throw new Error('Access token non disponibile');
  }

  const response = await fetch(`https://api.spotify.com/v1/me/tracks/contains?ids=${trackId}`, {
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Errore nel controllo del brano nei preferiti');
  }

  const data = await response.json();
  return data[0] === true;
}

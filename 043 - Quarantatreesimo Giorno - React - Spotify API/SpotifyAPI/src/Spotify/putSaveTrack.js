import { getStoredAccessToken } from './getToken';


export async function saveTrackToFavorites(trackId) {
  const access_token = getStoredAccessToken();
  if (!access_token) {
    throw new Error('Access token non disponibile');
  }

  const response = await fetch(`https://api.spotify.com/v1/me/tracks?ids=${trackId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Errore nel salvataggio, probabile id brano non valido o già salvato');
  }

  return true;
}
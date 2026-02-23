import { getStoredAccessToken } from './getToken';

// Rimuove una canzone dai brani preferiti dell'utente su Spotify
export async function removeTrackFromFavorites(trackId) {
  const access_token = getStoredAccessToken();
  if (!access_token) {
    throw new Error('Access token non disponibile');
  }

  const response = await fetch(`https://api.spotify.com/v1/me/tracks?ids=${trackId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Errore nella rimozione del brano dai preferiti');
  }

  return true;
}

let client_id = '';
let client_secret = '';
let redirect_url = 'http://127.0.0.1:5173';

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters[(Math.floor(Math.random() * characters.length))];
  }
  return result;
}

let access_token = null;

export function getStoredAccessToken() {
  return access_token;
}

export async function getToken() {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email';

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_url,
    state: state
  });

  window.location = 'https://accounts.spotify.com/authorize?' + params.toString();

  console.log('Richiesta di autorizzazione inviata');
}

export async function getAccessToken() {
  const body = new URLSearchParams({
    code: new URL(window.location.href).searchParams.get('code'),
    redirect_uri: redirect_url,
    grant_type: 'authorization_code'
  })

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST', 
    headers: {
      'content-type':  'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
    },
    body: body.toString()
  });

  const data = await response.json();
  access_token = data.access_token;
  console.log('Access token salvato:', access_token);
  return data;
}
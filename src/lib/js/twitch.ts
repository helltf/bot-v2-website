export interface TwitchATResponse {
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string[]
  token_type: string
}

export const getCode = (): string | null =>
  new URLSearchParams(document.location.search).get('code')

export const sendToken = async (tokenData: TwitchATResponse) => {
  await fetch(import.meta.env.VITE_BACKEND_URL + 'token', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: tokenData.access_token,
      refresh_token: tokenData.refresh_token
    })
  })
}

export const getToken = async (code: string): Promise<TwitchATResponse> => {
  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_TWITCH_CLIENT_ID,
    client_secret: import.meta.env.VITE_TWITCH_CLIENT_SECRET,
    grant_type: 'authorization_code',
    code,
    redirect_uri: 'http://localhost:3000/callback'
  })

  const response = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
  })

  return (await response.json()) as TwitchATResponse
}

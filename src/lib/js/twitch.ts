export const getCode = (): string | null =>
	new URLSearchParams(document.location.search).get('code')

export const sendCode = async (code: string) => {
	await fetch(import.meta.env.VITE_BACKEND_URL + 'token', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			code
		})
	})
}

const baseUrl = 'https://api.github.com/repos/helltf/'
export const fetchGithubData = async (
	repoName: string
): Promise<
	| { description: string; languages: string[]; tags: string[]; stars: number }
	| undefined
> => {
	try {
		const data = await (await fetch(`${baseUrl}${repoName}`)).json()

		const languages = await (
			await fetch(`${baseUrl}${repoName}/languages`)
		).json()

		return {
			description: data.description ?? 'no description',
			languages: Object.keys(languages).splice(0, 4),
			tags: data.topics?.splice(0, 3),
			stars: data.stargazers_count,
		}
	} catch (e) {
		console.log(e)
	}
}

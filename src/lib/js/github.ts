const baseUrl = 'https://api.github.com/repos/helltf/'
export const fetchGithubData = async (
	repoName: string
): Promise<
	| { description: string; languages: string[]; tags: string[]; stars: number }
	| undefined
> => {
	try {
		const [dataJson, languagesJson] = await Promise.all([
			fetch(`${baseUrl}${repoName}`),
			fetch(`${baseUrl}${repoName}/languages`),
		])

		const [data, languages] = await Promise.all([
			dataJson.json(),
			languagesJson.json(),
		])

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

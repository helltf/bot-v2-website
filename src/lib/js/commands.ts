export const fetchCommands = async (url: string): Promise<Command[]> => {
	return (await (await fetch(url)).json()) as Command[]
}

export const getCommandNames = async (): Promise<string[]> => {
	const commandNames = await (
		await fetch(import.meta.env.VITE_BACKEND_URL + 'commands/name')
	).json()
	return commandNames
}

export declare interface Command {
	name: string
	counter: number
	permissions: number
	description: string
	requiredParams: string[]
	optionalParams: string[]
	cooldown: number
	deleted: boolean
	alias: string[]
}

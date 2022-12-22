export const fetchCommands = async (url: string): Promise<Command[]> => {
	return (await (await fetch(url)).json()) as Command[]
}

export const getCommandNames = async (): Promise<string[]> => {
	const commandNames = await (
		await fetch(import.meta.env.VITE_BACKEND_URL + 'commands/name')
	).json()
	return commandNames
}

export const getCommandInfo = async (command: string): Promise<Command> => {
	return (await (
		await fetch(import.meta.env.VITE_BACKEND_URL + `command/name/${command}`)
	).json()) as Command
}

export declare interface Command {
	name: string
	counter: number
	permissions: number
	description: string
	required_params: string[]
	optional_params: string[]
	cooldown: number
	deleted: boolean
	alias: string[]
}

export const fetchCommands = async (url: string): Promise<Command[]> => {
  return (await (await fetch(url)).json()) as Command[]
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

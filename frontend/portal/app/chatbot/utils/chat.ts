export const botMessage = (message: Message): boolean =>
  message.type === "bot" ? true : false

export const userMessage = (message: Message): boolean =>
  message.type === "user" ? true : false

export const uniqueId = () => {
  return Math.round(Date.now() * Math.random())
}

export const createChatMessage = (
  message: string,
  type: MessageType,
  options?: string[]
) => {
  return {
    message,
    type,
    options,
    id: uniqueId(),
    time: new Date(),
  } as Message
}

export const createUserMessage = (message: string) => {
  return {
    message,
    type: "user",
    id: uniqueId(),
    time: new Date(),
  } as Message
}

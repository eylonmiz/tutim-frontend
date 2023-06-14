export const botMessage = (message: Message): boolean =>
  message.type === "bot" ? true : false

export const userMessage = (message: Message): boolean =>
  message.type === "user" ? true : false

export const uniqueId = () => {
  return Math.round(Date.now() * Math.random())
}

export const createChatMessage = (
  message: string,
  options: string[],
  type: MessageType,
  time: Date
) => {
  return {
    message,
    options,
    type,
    id: uniqueId(),
    time: new Date(),
  }
}

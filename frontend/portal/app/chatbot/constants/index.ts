export interface Config {
  botName: string
  botAvatar: string
  userName?: string
  userAvatar: string
  userRole?: string
  withAvatars: boolean
}

export const chatConfig: Config = {
  botName: "Tutim",
  botAvatar: "https://cdn-icons-png.flaticon.com/512/4711/4711987.png",
  userName: "Kobe",
  userAvatar: "/avatars/03.png",
  userRole: "UI Designer",
  withAvatars: true,
}

//will be in local storage or in sever
//inutile static chat script
export const scriptHistory: Message[] = [
  {
    id: 0,
    message: `Hey, I'm ${chatConfig.botName}, Ask me about anything i'm here for you :)`,
    type: "bot",
    time: new Date(),
  },
  {
    id: 1,
    message: "What is up",
    type: "user",
    time: new Date(),
  },
  {
    id: 2,
    message: "happy happy joi joi",
    type: "bot",
    time: new Date(),
  },
  {
    id: 3,
    message: "you know me?",
    type: "user",
    time: new Date(),
  },
  {
    id: 4,
    message: "why should i care",
    type: "bot",
    time: new Date(),
  },
  {
    id: 5,
    message: "what is the time",
    options: ["11", "12", "13"],
    type: "user",
    time: new Date(),
  },
  {
    id: 6,
    message: "look at the clock",
    type: "bot",
    time: new Date(),
  },
  {
    id: 7,
    message: "why your not nice",
    type: "user",
    time: new Date(),
  },
  {
    id: 8,
    message: "just because i can HaHA",
    type: "bot",
    time: new Date(),
  },
]

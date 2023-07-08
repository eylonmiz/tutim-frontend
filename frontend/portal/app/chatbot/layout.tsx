import React from "react"

import ChatBox from "./components/popUpChat/ChatBox"
import ChatbotPopUp from "./components/popUpChat/ChatbotPopUp"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ChatBotLayout({ children }: RootLayoutProps) {
  return (
    <div>
      {children}
      <ChatbotPopUp />
      <ChatBox />
    </div>
  )
}

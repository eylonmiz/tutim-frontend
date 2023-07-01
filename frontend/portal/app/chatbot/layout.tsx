import React from "react"

import ChatBox from "./components/popUpChat/ChatBox"
import ChatbotPopUp from "./components/popUpChat/ChatbotPopUp"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ChatBotLayout({ children }: RootLayoutProps) {
  return (
    // <div className="flex h-screen items-center justify-center overflow-hidden bg-[#f2edf7] text-gray-800">
    //   <div className="flex h-full w-full flex-row overflow-x-hidden">
    <div>
      {children}
      <ChatbotPopUp />
      <ChatBox />
    </div>
    // </div>
  )
}

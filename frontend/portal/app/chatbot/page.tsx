import React from "react"

import ChatBot from "./components/ChatBot"
import ChatBotContainer from "./components/ChatBotContainer"
import Content from "./components/Content"
import { scriptHistory } from "./constants"

function page() {
  return (
    <div className="relative mx-auto h-screen w-full">
      chat
      <ChatBot />
    </div>
  )
}

export default page

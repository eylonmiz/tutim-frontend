import React from "react"

import ChatBotContainer from "./components/ChatBotContainer"
import Content from "./components/Content"
import { scriptHistory } from "./constants"

function page() {
  return (
    <div className="relative mx-auto h-screen w-full">
      chat
      <ChatBotContainer>
        🚸
        <Content messages={scriptHistory} />
      </ChatBotContainer>
    </div>
  )
}

export default page

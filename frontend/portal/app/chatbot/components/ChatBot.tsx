"use client"

import React, { useCallback, useMemo, useState } from "react"

import useChatbot from "../hooks/useChatbot"
import ChatBotContainer from "./ChatBotContainer"
import Content from "./Content"

const ChatBot = () => {
  const { messages, addMessage } = useChatbot()
  const memoizedMessages: Message[] = useMemo(() => messages, [messages])

  return (
    <>
      <ChatBotContainer>
        <Content messages={memoizedMessages} />
      </ChatBotContainer>
    </>
  )
}

export default ChatBot

"use client"

import React, { useCallback, useMemo, useState } from "react"

import useChatbot from "../hooks/useChatbot"
import useInput from "../hooks/useInput"
import { createUserMessage } from "../utils/chat"
import { isEmpty } from "../utils/isEmpty"
import ChatBotContainer from "./ChatBotContainer"
import Content from "./Content"
import FooterInput from "./footer/FooterInput"
import Input from "./footer/Input"
import SubmitButton from "./footer/SubmitButton"

const ChatBot = () => {
  const { messages, addMessage } = useChatbot()
  const [loading, setLoading] = useState<boolean>(false)
  const memoizedMessages: Message[] = useMemo(() => messages, [messages])

  const handleSendMessage = async () => {
    if (isEmpty(inputProps.value)) return
    setLoading((loading) => !loading)
    const userMessage = createUserMessage(inputProps.value)
    addMessage(userMessage)
    inputProps.clear()

    //ToDo - api call and add bot response to massage array.
  }

  const handleEnter = () => {
    console.log("Enter key pressed", inputProps)
    handleSendMessage()
  }

  const inputProps: InputRetuneType = useInput("", handleEnter)

  return (
    <>
      <ChatBotContainer>
        <Content messages={memoizedMessages} />
        <FooterInput>
          <Input {...inputProps} />
          <SubmitButton
            value={inputProps.value}
            handlemessage={handleSendMessage}
            isLoading={loading}
          />
        </FooterInput>
      </ChatBotContainer>
    </>
  )
}

export default ChatBot

"use client"

import React, { useMemo } from "react"

import useChatbot from "../../hooks/useChatbot"
import useInput from "../../hooks/useInput"
import ChatBotContainer from "./ChatBotContainer"
import Content from "./Content"
import FooterInput from "./FooterInput"
import Input from "./Input"
import SubmitButton from "./SubmitButton"

const ChatBot = () => {
  const inputProps: InputRetuneType = useInput("")
  const { messages, setMessages, onSubmit } = useChatbot()
  const memoizedMessages: Message[] = useMemo(() => messages, [messages])

  return (
    <>
      <ChatBotContainer>
        <Content messages={memoizedMessages} />
        <FooterInput>
          <Input {...inputProps} />
          <SubmitButton value={inputProps.value} />
        </FooterInput>
      </ChatBotContainer>
    </>
  )
}

export default ChatBot

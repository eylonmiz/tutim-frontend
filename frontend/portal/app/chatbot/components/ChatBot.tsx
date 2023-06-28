"use client"

import React, { useCallback, useMemo, useState } from "react"

import useChatbot from "../hooks/useChatbot"
import ChatBotContainer from "./ChatBotContainer"
import Content from "./Content"
import FooterInput from "./footer/FooterInput"
import Input from "./footer/Input"
import SubmitButton from "./footer/SubmitButton"

interface InputProps {
  value: string
  onChange: () => void
  clear: () => void
  ref: React.RefObject<HTMLInputElement>
}

const ChatBot = () => {
  const { messages, addMessage } = useChatbot()
  const [loading, setLoading] = useState<boolean>(false)
  const memoizedMessages: Message[] = useMemo(() => messages, [messages])

  const inputProps = {} as InputProps
  return (
    <>
      <ChatBotContainer>
        <Content messages={memoizedMessages} />
        <FooterInput>
          <Input {...inputProps} />
          <SubmitButton
            value={inputProps.value}
            handlemessage={() => console.log("do something")}
            isLoading={loading}
          />
        </FooterInput>
      </ChatBotContainer>
    </>
  )
}

export default ChatBot

"use client"

import React, { useCallback, useMemo, useState } from "react"

import useChatbot from "../../hooks/useChatbot"
import useInput from "../../hooks/useInput"
import { createChatMessage, createUserMessage } from "../../utils/chat"
import { isEmpty } from "../../utils/isEmpty"
import ChatBotContainer from "./ChatBotContainer"
import Content from "./Content"
import FooterInput from "./FooterInput"
import Input from "./Input"
import SubmitButton from "./SubmitButton"

const ChatBot = () => {
  const inputProps: InputRetuneType = useInput("")
  const { messages, addMessage, onSubmit } = useChatbot()
  const [loading, setLoading] = useState<boolean>(false)
  const memoizedMessages: Message[] = useMemo(() => messages, [messages])

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const handleSendMessage = useCallback(async () => {
    // (event: React.MouseEvent<HTMLButtonElement, React.MouseEvent>) => {
    // event.preventDefault()

    if (isEmpty(inputProps.value)) return
    setLoading((loading) => !loading)

    const userMessage = createUserMessage(inputProps.value)
    addMessage(userMessage)
    inputProps.clearInput()

    const fetchBotResponse = async () => {
      try {
        const url = "http://localhost:3001/shani2/api/basicChat"
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userMessage),
        })
        const data: { message: string; options?: string[] } =
          await response.json()
        console.log("data", data.message)
        if (data.message) {
          console.log(createChatMessage(data.message, "bot"))
          addMessage(createChatMessage(data.message, "bot"))
        }
        setLoading((loading) => !loading)
      } catch (error) {
        console.error(`Download error: ${error}`)
      }
    }

    fetchBotResponse()
  }, [addMessage, inputProps])

  return (
    <>
      <ChatBotContainer>
        <Content messages={memoizedMessages} />
        <FooterInput>
          <Input {...inputProps} handlemessage={handleSendMessage} />
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

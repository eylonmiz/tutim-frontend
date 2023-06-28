import React, { memo, useCallback, useEffect, useMemo, useState } from "react"

import { scriptHistory } from "../constants"
import { useLocalStorage } from "./useLocalStorage"

interface ChatBotReturnType {
  messages: Message[]
  addMessage: (m: Message) => void
}

{
  /* useChatbot Handles
1) loading of massages array 
2) set massages array  to a state, and updating the state 
3) updating the massage array 
*/
}
const useChatbot = (): ChatBotReturnType => {
  const [messages, setMessages] = useState<Message[]>([])
  const [storedMessages, setStoredMessages] = useLocalStorage<Message>(
    "chat-messages",
    scriptHistory
  )

  useEffect(() => {
    if (storedMessages.length === 0) setMessages(scriptHistory)
    else setMessages(storedMessages)
    return () => {
      //there is noting to clear
    }
  }, [])

  const addMessage = useCallback((newMessage: Message) => {
    setMessages((messages) => [...messages, newMessage])
    const updatedNames = [...storedMessages, newMessage]
    setStoredMessages(updatedNames)
  }, [])

  return {
    messages,
    addMessage,
  }
}

export default useChatbot

import React, { memo, useCallback, useEffect, useMemo, useState } from "react"

import { scriptHistory } from "../constants"

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

  useEffect(() => {
    if (messages.length === 0) setMessages(messages)
    return () => {
      //there is noting to clear
    }
  }, [])

  const addMessage = useCallback((newMessage: Message) => {
    setMessages((messages) => [...messages, newMessage])
  }, [])

  return {
    messages,
    addMessage,
  }
}

export default useChatbot

import React, { memo, useCallback, useEffect, useMemo, useState } from "react"

import { scriptHistory } from "../constants"

interface ChatBotReturnType {
  messages: Message[]
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  onSubmit: () => void
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
    if (scriptHistory.length != 0) setMessages(scriptHistory)
    return () => {
      //there is noting to clear
    }
  }, [])

  const onSubmit = useCallback(() => {
    // update  click or on keyWord Enter(code===13)
    console.log("Submit clicked")
    console.log("Current values:", messages)
  }, [messages])

  const addMessage = useCallback((newMessage: Message) => {
    setMessages((messages) => [...messages, newMessage])
  }, [])

  console.log("messages", messages)

  return {
    messages,
    setMessages,
    onSubmit,
    addMessage,
  }
}

export default useChatbot

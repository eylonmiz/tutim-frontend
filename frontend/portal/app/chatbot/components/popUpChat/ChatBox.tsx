"use client"

import React, { useCallback, useState } from "react"

import { Button } from "@/components/ui/button"

import ChatBot from "../ChatBot"
import ChatBoxModal from "./ChatBoxModal"

const ChatBox = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleBot = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  return (
    <div className="fixed bottom-0 w-full shadow md:right-3 md:w-1/2">
      <Button onClick={handleBot}>Chat with us! 🤖 </Button>
      {open && <ChatBoxModal />}
    </div>
  )
}

export default ChatBox

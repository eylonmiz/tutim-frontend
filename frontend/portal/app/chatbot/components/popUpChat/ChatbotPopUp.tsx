"use client"

import React, { useCallback, useState } from "react"

import ChatBoxModal from "./ChatBoxModal"
import StickyButton from "./StickyButton"

const ChatbotPopUp = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleBot = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  return (
    <section>
      <StickyButton onHandleClick={handleBot} />
      {open && (
        <div
          className="fixed bottom-20 right-28 flex w-full justify-end md:w-[80%]"
          onClick={() => console.log("close")}
        >
          <div className="w-8/12 rounded bg-white p-2">
            <h1 className="text-center text-xl font-semibold text-gray-700">
              Tutim Chat
            </h1>
            <ChatBoxModal hight={600} />
          </div>
        </div>
      )}
    </section>
  )
}

export default ChatbotPopUp

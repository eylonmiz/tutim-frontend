import React from "react"

import ChatBot from "../ChatBot"

const ChatBoxModal = () => {
  return (
    <div className="h-max overflow-auto">
      <div className="relative bottom-0 min-h-[500px] bg-gray-100">
        <div className="absolute bottom-0 left-0 w-full scroll-smooth hyphens-auto">
          <ChatBot />
        </div>
      </div>
    </div>
  )
}

export default ChatBoxModal

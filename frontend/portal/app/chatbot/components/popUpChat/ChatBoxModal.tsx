import React, { useEffect } from "react"

import ChatBot from "../ChatBot"

const ChatBoxModal: React.FC<{ hight: number }> = ({ hight = 500 }) => {
  const minHight =
    hight > window.innerWidth ? `min-h-full` : `min-h-[${hight.toString()}px]`

  return (
    <div className="h-max overflow-auto">
      <div className={`relative bottom-0 ${minHight} bg-gray-100`}>
        <div className="absolute bottom-0 left-0 w-full scroll-smooth hyphens-auto">
          <ChatBot />
        </div>
      </div>
    </div>
  )
}

export default ChatBoxModal

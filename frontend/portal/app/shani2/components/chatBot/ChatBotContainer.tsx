import React, { PropsWithChildren } from "react"

interface ChatBotContainerProps extends PropsWithChildren {
  children: React.ReactNode
}

const ChatBotContainer: React.FC<ChatBotContainerProps> = ({ children }) => {
  return (
    <div className="flex h-full w-full  flex-auto flex-col p-6">
      <div className="flex h-full flex-auto shrink-0 flex-col rounded-2xl bg-gray-100 p-4">
        {children}
      </div>
    </div>
  )
}

export default ChatBotContainer

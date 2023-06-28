import React, { PropsWithChildren } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { chatConfig } from "../../constants"

interface BotChatMessageProps extends PropsWithChildren {
  props: Message
}

const BotChatMessage: React.FC<BotChatMessageProps> = ({ props }) => {
  return (
    <div className="col-start-6 col-end-13 rounded-lg p-3">
      <div className="flex flex-row-reverse items-center justify-start">
        {chatConfig.withAvatars && (
          <Avatar className="flex h-10 w-10 overflow-hidden rounded-full bg-pink-500">
            <AvatarImage src={chatConfig.userAvatar} alt="Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        )}
        <div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
          <div>{props.message}</div>
        </div>
      </div>
    </div>
  )
}

export default BotChatMessage

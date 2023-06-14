import React, { PropsWithChildren } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { chatConfig } from "../../constants"

interface UserChatMessageProps extends PropsWithChildren {
  props: Message
}

const UserChatMessage: React.FC<UserChatMessageProps> = ({ props }) => {
  return (
    <div className="col-start-1 col-end-8 grid rounded-lg p-3">
      <div className="flex flex-row items-center">
        {chatConfig.withAvatars && (
          <Avatar className="flex h-10 w-10 overflow-hidden rounded-full bg-indigo-500">
            <AvatarImage src={chatConfig.userAvatar} alt="Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        )}
        <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
          <div>{props.message}</div>
        </div>
      </div>
    </div>
  )
}

export default UserChatMessage

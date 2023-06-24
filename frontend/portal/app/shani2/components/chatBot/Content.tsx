import React from "react"

import { botMessage } from "../../utils/chat"
import { isEmpty } from "../../utils/isEmpty"
import BotChatMessage from "./BotChatMessage"
import UserChatMessage from "./UserChatMessage"

const Content: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div className="mb-4 flex h-full flex-col overflow-x-auto">
      <div className="grid grid-cols-12 gap-y-2">
        {!isEmpty(messages) ? (
          messages.map((script) => {
            return botMessage(script) ? (
              <BotChatMessage props={script} key={script.id} />
            ) : (
              <UserChatMessage props={script} key={script.id} />
            )
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default React.memo(Content)

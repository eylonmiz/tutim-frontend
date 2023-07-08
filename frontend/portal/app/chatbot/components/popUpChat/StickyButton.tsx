import React, { useState } from "react"

import { Button } from "@/components/ui/button"

const StickyButton = (props: { onHandleClick: () => void }) => {
  return (
    <Button
      title="Chatbot"
      className="z-90 fixed bottom-10 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-pink-600 text-5xl drop-shadow-lg duration-300 hover:animate-bounce hover:bg-pink-700 hover:drop-shadow-2xl"
      onClick={props.onHandleClick}
    >
      🍓
    </Button>
  )
}

export default StickyButton

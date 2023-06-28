import React from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import ChatBot from "../ChatBot"
import StickyButton from "./StickyButton"

const ChatbotPopUp = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <StickyButton />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tutim</DialogTitle>
        </DialogHeader>
        <ChatBot />
      </DialogContent>
    </Dialog>
  )
}

export default ChatbotPopUp

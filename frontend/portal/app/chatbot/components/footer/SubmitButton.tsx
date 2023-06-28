"use client"

import React from "react"

import { Button } from "@/components/ui/button"

const styles = { gradientBg: "bg-gradient-to-r from-purple-500 to-pink-500" }

const SubmitButton: React.FC<{
  value: string
  handlemessage: () => void
  isLoading: boolean
}> = ({ value, handlemessage, isLoading }) => {
  const handleSendClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    handlemessage()
  }

  return (
    <div className="ml-4">
      <Button
        className={`flex shrink-0 items-center justify-center rounded-xl px-4 py-1 text-white ${styles.gradientBg}`}
        onClick={handleSendClick}
        disabled={isLoading}
      >
        <span className="hidden md:flex"> Send </span> 🍓
      </Button>
    </div>
  )
}

export default SubmitButton

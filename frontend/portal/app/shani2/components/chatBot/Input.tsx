"use client"

import React, { InputHTMLAttributes, KeyboardEvent, forwardRef } from "react"
import { Smile } from "lucide-react"

import { Button } from "@/components/ui/button"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  onChange: () => void
  handlemessage: () => void
  // ref: React.RefObject<HTMLInputElement>
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  const { ...inputProps } = props

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      inputProps.handlemessage()
    }
  }

  return (
    <>
      <div className="ml-4 grow">
        <div className="relative w-full">
          <input
            ref={ref}
            {...inputProps}
            onKeyPress={handleKeyPress}
            type="text"
            className="flex h-10 w-full rounded-xl border pl-4 focus:border-indigo-300 focus:outline-none"
          />
          <Button className="absolute right-0 top-0 flex h-full w-12 items-center justify-center text-gray-500">
            <Smile className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </>
  )
}

export default forwardRef(Input)

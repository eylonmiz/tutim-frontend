"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"

const useInput = (
  initialValue: string,
  onEnter?: () => void
): InputRetuneType => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(initialValue)

  const handleChange = useCallback(() => {
    if (inputRef.current) setValue(inputRef.current.value)
  }, [])

  const clear = useCallback(() => {
    setValue("")
  }, [])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" && onEnter) {
        onEnter()
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [onEnter])

  return {
    value,
    onChange: handleChange,
    ref: inputRef,
    clear,
  }
}

export default useInput

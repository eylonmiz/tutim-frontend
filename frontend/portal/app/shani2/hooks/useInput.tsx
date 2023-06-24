"use client"

import React, { useCallback, useRef, useState } from "react"

const useInput = (initialValue: string): InputRetuneType => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(initialValue)

  const handleChange = useCallback(() => {
    if (inputRef.current) setValue(inputRef.current.value)
  }, [])

  const clearInput = useCallback(() => {
    setValue("")
  }, [])

  return {
    value,
    onChange: handleChange,
    ref: inputRef,
    clearInput,
  }
}

export default useInput

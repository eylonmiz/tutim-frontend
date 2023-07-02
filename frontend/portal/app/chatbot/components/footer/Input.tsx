"use client"

import React, { InputHTMLAttributes, KeyboardEvent, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  onChange: () => void
  clear: () => void
  ref: React.RefObject<HTMLInputElement>
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  const { ...inputProps } = props

  return (
    <>
      <div className="ml-2 grow">
        <div className="relative w-full">
          <input
            ref={ref}
            type="text"
            value={inputProps.value}
            onChange={inputProps.onChange}
            className="flex h-10 w-full rounded-xl border pl-4 focus:border-indigo-300 focus:outline-none"
          />
        </div>
      </div>
    </>
  )
}

export default forwardRef(Input)

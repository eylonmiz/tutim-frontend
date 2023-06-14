"use client"

import React, { PropsWithChildren } from "react"

import { Button } from "@/components/ui/button"

import styles from "../../styles"

const SubmitButton: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className="ml-4">
      <Button
        className={`flex shrink-0 items-center justify-center rounded-xl px-4 py-1 text-white ${styles.gradientBg}`}
      >
        <span className="hidden md:flex"> Send </span> 🍓
      </Button>
    </div>
  )
}

export default SubmitButton

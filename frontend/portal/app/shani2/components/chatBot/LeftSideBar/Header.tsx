import React from "react"
import { MessageCircle } from "lucide-react"

import styles from "@/app/shani2/styles"

export default function Header() {
  return (
    <div className="flex h-full w-full flex-row items-center justify-center">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-[50%] ${styles.gradientBg}`}
      >
        <MessageCircle color="white" className="h-6 w-6" />
      </div>
      <div className="ml-2 text-2xl font-bold">
        <span className={`${styles.gradientText}`}>Tutim</span>
        Chat
      </div>
    </div>
  )
}

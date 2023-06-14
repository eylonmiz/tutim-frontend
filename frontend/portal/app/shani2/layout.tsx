import React from "react"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ChatBotLayout({ children }: RootLayoutProps) {
  return (
    <>
      {children}
      {/*TO DO - add component of left side sticky button that triggers chat popup  */}
    </>
  )
}

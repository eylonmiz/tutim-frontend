import React from "react"

interface ChatPageProps {
  children: React.ReactNode
}

export default function ChatPageLayout({ children }: ChatPageProps) {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-[#f2edf7] text-gray-800">
      <div className="flex h-full w-full flex-row overflow-x-hidden">
        {children}
      </div>
    </div>
  )
}

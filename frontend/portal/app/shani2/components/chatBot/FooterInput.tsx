import React from "react"

const FooterInput: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4">
      {children}
    </div>
  )
}

export default FooterInput

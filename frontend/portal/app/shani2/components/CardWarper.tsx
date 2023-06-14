import React from "react"

import { Card, CardContent } from "@/components/ui/card"

const CardWarper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Card className="max-w-sm rounded border border-gray-200 bg-gradient-to-r from-purple-500 to-blue-500 p-3 shadow">
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default CardWarper

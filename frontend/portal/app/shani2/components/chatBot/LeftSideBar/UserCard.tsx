import React from "react"
import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { chatConfig } from "@/app/shani2/constants"

const UserCard = () => {
  return (
    <Card className="mt-4 flex flex-col items-center rounded-lg bg-purple-100 px-4 py-6">
      <CardHeader className=" flex items-center">
        <Avatar className="h-20 w-20 overflow-hidden rounded-full">
          <AvatarImage src={chatConfig.userAvatar} alt="Avatar" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
        <CardTitle>{chatConfig?.userName ?? "You"}</CardTitle>
      </CardHeader>
      <CardContent>
        {chatConfig?.userRole && (
          <div className="text-xs text-gray-500">{chatConfig?.userRole}</div>
        )}
      </CardContent>
    </Card>
  )
}

export default UserCard

"use client"

import React from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const ActivitiesList: string[] = [
  "activity 1",
  "activity 2",
  "activity 3",
  "activity 4",
  "activity 5",
]

const Activity: React.FC<{
  activity: string
  onHandelActivity: (props: string) => any
}> = ({ activity, onHandelActivity }) => {
  return (
    <Button
      variant="ghost"
      className="flex flex-row items-center justify-start rounded-xl p-2 hover:bg-gray-100"
      onClick={() => onHandelActivity(activity)}
    >
      <Avatar className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200">
        <AvatarFallback> {activity[activity.length - 1]}</AvatarFallback>
      </Avatar>

      <div className="ml-2 text-sm font-semibold">{activity}</div>
    </Button>
  )
}

const Activities: React.FC<{ onHandelActivity: (props: string) => any }> = ({
  onHandelActivity,
}) => {
  return (
    <div className="-mx-2 mt-4 flex h-48 flex-col space-y-1 overflow-y-auto">
      {ActivitiesList.length != 0 ? (
        ActivitiesList.map((activity) => (
          <Activity
            key={activity}
            activity={activity}
            onHandelActivity={onHandelActivity}
          />
        ))
      ) : (
        <div className="text-center text-sm text-gray-500">No Items</div>
      )}
    </div>
  )
}

export default Activities

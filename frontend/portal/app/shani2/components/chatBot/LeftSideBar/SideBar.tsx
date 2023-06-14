"use client"

import React from "react"

import Activities from "./Activities"
import Header from "./Header"
import UserCard from "./UserCard"

export default function SideBar() {
  return (
    <div className="hidden w-64 shrink-0 flex-col bg-[#fcf8ff] p-6 md:flex">
      <Header />
      <UserCard />

      <div className="mt-8 flex flex-col">
        <div className="flex flex-row items-center justify-between text-xs">
          <span className="font-bold">Last Actives</span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300">
            4
          </span>
        </div>
        <Activities
          onHandelActivity={(props: string) =>
            console.log(`do somting with ${props}`)
          }
        />
      </div>
    </div>
  )
}

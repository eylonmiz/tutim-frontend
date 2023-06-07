"use client"

import React from "react"

import "@/styles/globals.css"
import "./styles/styles.css"
import { Dialogs, FormWithImg, Hero, Navbar } from "./components"

function page() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="content_bg">
          <Navbar />
          <Hero />
        </div>
        <FormWithImg />
        <Dialogs />
      </div>
    </>
  )
}

export default page

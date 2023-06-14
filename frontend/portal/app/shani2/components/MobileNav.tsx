"use client"

import React from "react"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import { AlignRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { logo } from "../assets"
import { navLinks } from "../constants"

const PATH = "shani2"

const MobileNav = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <AlignRight
            className="h-[28px] w-[28px]"
            color="pink"
            strokeWidth="3"
            onClick={() => setOpen(!open)}
          />
        </Button>
      </SheetTrigger>
      <SheetContent size="xl" position="left" className="pr-0">
        <Link
          as={"image"}
          href={`/${PATH}/`}
          className="flex items-center"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <Image
            src={logo}
            width={500}
            height={500}
            alt="logo"
            className="mr-2 h-9 w-9"
          />
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {navLinks.map(
              (item) =>
                item.href && (
                  <Link key={item.href} href={item.href}>
                    {item.title}
                  </Link>
                )
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav

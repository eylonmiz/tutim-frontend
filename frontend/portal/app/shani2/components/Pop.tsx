"use client"

import React from "react"
import * as Popover from "@radix-ui/react-popover"

const Pop: React.FC = (): JSX.Element => {
  return (
    <Popover.Root>
      <Popover.Trigger>Open</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>Hello</Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default Pop

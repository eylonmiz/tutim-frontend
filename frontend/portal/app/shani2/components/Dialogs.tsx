import React from "react"

import { Card } from "@/components/ui/card"
import { DialogDemo } from "@/components/examples/dialog/demo"

import styles from "../styles"
import CustomDialog from "./CustomDialog"
import Form from "./Form"

function Dialogs() {
  return (
    <Card
      className={`${styles.innerWidth} mx-auto flex flex-[0.95] flex-col justify-center ${styles.flexCenter} gap-8 bg-gradient-to-r from-blue-950 to-blue-500 p-3`}
    >
      <DialogDemo />
      <CustomDialog title="ClickME" onSubmit={(e) => console.log(e)}>
        <Form />
      </CustomDialog>
    </Card>
  )
}

export default Dialogs

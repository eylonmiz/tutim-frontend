import React from "react"
import Image from "next/image"

import { whatsNew } from "../assets"
import styles from "../styles"
import CardWarper from "./CardWarper"
import Form from "./Form"

function FormWithImg() {
  return (
    <section className={`${styles.paddings} `}>
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
      >
        <div
          className={`flex flex-[0.95] flex-col justify-center ${styles.flexCenter}`}
        >
          <CardWarper>
            <h4 className="text-white">Whats New?</h4>
            <Form />
          </CardWarper>
        </div>
        <div className={`flex-1 ${styles.flexCenter}`}>
          <Image
            src={whatsNew}
            width={500}
            height={500}
            alt="get-started"
            className="h-[70%] w-[70%] object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default FormWithImg

import React from "react"
import Image from "next/image"

import { strawberries } from "../assets"
import styles from "../styles"

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`${styles.paddings} z-10 flex flex-col items-center justify-center`}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          Shani &{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Tutim
          </span>
        </h1>
        <p
          className={`${styles.heroSubText} ${styles.paddings} mt-2 text-center text-white`}
        >
          @@@@@@ @@@@ @@@@@ @@@@@@ @@@ <br className="hidden sm:block" />
          @@@ @@@ @@@@@ @@@@ @@@@@@ @@@@@@ @@@@ @
        </p>

        <div className={`flex-1 ${styles.flexCenter}`}>
          <Image
            src={strawberries}
            width={500}
            height={500}
            alt="get-started"
            className="h-[50%] w-[50%] object-contain"
          />
          <Image
            src={strawberries}
            width={500}
            height={500}
            alt="get-started"
            className="h-[50%] w-[50%] object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

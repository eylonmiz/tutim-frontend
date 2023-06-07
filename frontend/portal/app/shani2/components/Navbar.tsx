"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { logo } from "../assets"
import { NavLinks, navLinks } from "../constants"
import useScrolled from "../hooks/useScrolled"
import styles from "../styles"
import MobileNav from "./MobileNav"

const PATH = "shani"

const Navbar = () => {
  const [active, setActive] = useState<NavLinks | string>("")
  const scrolled = useScrolled()

  return (
    <header>
      <nav
        className={`${
          styles.xPaddings
        } fixed top-0 z-20 flex w-full items-center py-5 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <Link
            href={`/${PATH}/`}
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0)
            }}
          >
            <Image
              src={logo}
              width={500}
              height={500}
              alt="logo"
              className="h-9 w-9"
            />
            <p className="flex cursor-pointer text-[18px] font-bold text-purple-700 ">
              Shani &nbsp;
              <span className="hidden md:block"> | Tutim</span>
            </p>
          </Link>

          <ul className="hidden list-none flex-row gap-10 md:flex">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? "relative text-purple-600 after:-bottom-2 after:h-1 after:w-[100%] after:bg-pink-500"
                    : "text-purple-700"
                } relative cursor-pointer text-[18px] font-medium transition after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-0 after:bg-pink-500 hover:text-purple-600 hover:after:w-[100%] hover:after:transition-all hover:after:duration-500`}
                onClick={() => setActive(nav.title)}
              >
                <Link key={nav.id} href={`${PATH}/${nav.id}`}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          <MobileNav />
        </div>
      </nav>
    </header>
  )
}

export default Navbar

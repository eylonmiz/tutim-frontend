import { NextResponse } from "next/server"

import { chatScript } from "./script"

export async function GET() {
  return NextResponse.json({ chatScript })
}

export async function POST(request: Request) {
  const data: Message = await request.json()
  const { id, message, type } = data

  if (type === "bot") return NextResponse.json({ massage: "only user type" })
  const script = chatScript.find((el) => el.question === message)
  if (!script)
    return NextResponse.json({
      massage: "Random Replay fom the bot, this is not in the script",
    })

  return NextResponse.json({ message: script.answer })
}

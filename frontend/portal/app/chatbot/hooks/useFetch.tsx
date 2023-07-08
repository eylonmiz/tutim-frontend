import { useCallback, useEffect, useState } from "react"

interface ApiBotResponse<T> {
  data: { message: string; options?: string[] } | null
  error: string | null
  postRequest: (url: string, body: Message) => Promise<void>
  clear: () => void
}

function useFetch<T>(): ApiBotResponse<T> {
  const [data, setData] = useState<{
    message: string
    options?: string[]
  } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const postRequest = async (url: string, body: Message) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
      if (!response.ok) {
        setError("response error from api")
      }
      const json: { message: string; options?: string[] } =
        await response.json()
      console.log(json)

      setData(json)
    } catch (error) {
      setError("An error occurred while making the request.")
    }
  }

  const clear = useCallback(() => {
    setData(null)
    setError(null)
  }, [])

  return { data, error, postRequest, clear }
}
export default useFetch

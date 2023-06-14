type MessageType = "bot" | "user"

interface BaseMessage {
  message: string
  options?: string[] //specified to bot type, e.g:choose from ['java', 'python', 'cpp']
  type: MessageType
  id: number
  time: Date
}

interface Message extends BaseMessage {
  loading?: boolean
  delay?: number
  withAvatar?: boolean
}

interface InputRetuneType extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  onChange: () => void
  ref: React.RefObject<HTMLInputElement>
}

//for api
namespace StatusCode {
  enum Error {
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    ServerError = 500,
  }
  enum Success {
    OK = 200,
    Created = 201,
    Accepted = 202,
    Content = 204,
  }
}

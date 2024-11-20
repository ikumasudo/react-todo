import { useEffect, useState } from "react"
import pb from "./lib/pb"

function App() {
  const [msg, setMsg] = useState("")

  useEffect(() => {
    async function healthCheck() {
      const res = await pb.health.check()
      console.log(res)
      setMsg(res.message)
    }
    healthCheck()
  }, [])

  return (
    <>
      <h1>Hello world!</h1>
      <p>message from pocketbase: {msg}</p>
    </>
  )
}

export default App

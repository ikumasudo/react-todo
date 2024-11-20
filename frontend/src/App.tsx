import { useEffect, useState } from "react"
import pb from "./lib/pb"

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  description: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function fetchTodos() {
      const res = await pb.collection("todo").getFullList<Todo>()
      setTodos(res)
    }
    fetchTodos()
  }, [])

  return (
    <>
      <ol>
        {todos.map(todo => (
          <li>
            <span>{todo.completed ? "✓" : "□"}</span>
            <span key={todo.id}>{todo.title}</span>
            <br />
            <small>{todo.description}</small>
          </li>
        ))}
      </ol>
    </>
  )
}

export default App

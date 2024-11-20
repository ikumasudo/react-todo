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

  async function fetchTodos() {
    const res = await pb.collection("todo").getFullList<Todo>()
    setTodos(res)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      title: formData.get('title'),
      description: formData.get('description'),
    };

    await pb.collection("todo").create({
      title: data.title,
      completed: false,
      description: data.description
    })

    await fetchTodos()
    form.reset()
  };

  useEffect(() => {
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

      <form onSubmit={handleSubmit}>
        <input name="title" />
        <input name="description" />
        <button type="submit">追加</button>
      </form>
    </>
  )
}

export default App

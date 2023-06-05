import './styles/global.css'
import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header'
import { TaskForm } from "./components/Tasks/TaskForm";
import { TaskList } from "./components/Tasks/TaskList";

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks")
    if (tasksFromLocalStorage) {
      setTasks(JSON.parse(tasksFromLocalStorage))
    }
  }, [])

  const addTask = (task) => {
    setTasks([...tasks, task])
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  }

  return (
    <>
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App

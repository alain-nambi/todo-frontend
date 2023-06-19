// Import the global CSS file and required React components
import './styles/global.css'
import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header'
import { TaskForm } from "./components/Tasks/TaskForm";
import { TaskList } from "./components/Tasks/TaskList";

function App() {
  // Get tasks form localStorage
  const tasksFromLocalStorage = localStorage.getItem("tasks")

  // Create a state variable to store tasks and fetch existing ones from local storage
  const [tasks, setTasks] = useState(() => {
    return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : []
  })

  // Use useEffect to fetch tasks from local storage and update state when component mounts
  useEffect(() => {
    if (tasksFromLocalStorage) {
      setTasks(JSON.parse(tasksFromLocalStorage))
    }
  }, [])

  // Define a function to add a new task and save it to local storage
  const addTask = (task) => {
    const updatedTasks = [...tasks, task]
    setTasks(updatedTasks)
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Render the header, task form and task list components
  return (
    <>
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
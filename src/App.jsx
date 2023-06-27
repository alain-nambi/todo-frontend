// Import the global CSS file and required React components
import "./styles/global.css";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { TaskForm } from "./components/Tasks/TaskForm";
import { TaskList } from "./components/Tasks/TaskList";

import { v4 as uuidv4 } from "uuid";

// Utilities
import { parseTimeStamp } from "./utilities/globalFunctions";
import { LOCAL_STORAGE_TASKS_KEY } from "./utilities/globalVariables";

function App() {
  // Create a state variable to store tasks and fetch existing ones from local storage
  const [tasks, setTasks] = useState([]);

  const loadSavedTasks = () => {
    // Retrieve item with key LOCAL_STORAGE_TASKS_KEY from local storage and convert it from JSON to an array of JS objects using JSON.parse
    const taskSaved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY));
    // If taskSaved is not null or undefined, update tasks state with its value
    if (taskSaved) {
      setTasks(taskSaved);
    }
  };

  const setTaskAndSave = (newTask) => {
    // Update tasks state with newTask, then save it to local storage by updating item with key LOCAL_STORAGE_TASKS_KEY with the stringified newTask using JSON.stringify
    setTasks(newTask);
    localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(newTask));
  };

  // Define a function to add a new task and save it to local storage
  const addTask = (task) => {
    // Add a new task object to tasks state array containing a unique id generated with uuidv4, title from task.title, date with the current timestamp converted to a human-readable string using parseTimeStamp from globalFunctions, and default isCompleted value of false
    setTaskAndSave([
      ...tasks,
      {
        id: uuidv4(),
        title: task.title,
        date: parseTimeStamp(Date.now()), // Store the current timestamp as a human-readable date string
        isCompleted: false,
      },
    ]);
  };
  
  // Use useEffect to fetch tasks from local storage and update state when component mounts
  useEffect(() => {
    loadSavedTasks();
  }, []);


  // Render the header, task form and task list components
  return (
    <>
      <Header />
      <TaskForm handleAddTask={addTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
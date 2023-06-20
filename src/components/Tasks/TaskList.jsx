// Importing necessary dependencies
import styles from "./tasks.module.css";
import { Checkbox, Button } from "@material-tailwind/react";
import { CiEdit, CiTrash } from "react-icons/ci";

// Responsive Pages
import { useMediaQuery } from "react-responsive";

// Creating TaskList component
export function TaskList({ tasks }) {
  // Use responsive media queries to determine if device is desktop/laptop or tablet/mobile
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    // Using flexbox to align list items vertically
    <ul className={`flex flex-col text-center ${isTabletOrMobile && 'm-3'}`}>
      {/* Mapping over each task in array */}
      {tasks.map((task, taskIndex) => (
        
        <li key={taskIndex} className="mb-2">

          {/* Adding CSS class to taskList div */}
          <div className={`${styles.taskList} mb-1 flex items-center justify-between rounded-md`}>

            {/* Rendering the Checkbox component */}
            <Checkbox key={taskIndex} color="blue" />

            {/* Displaying task title */}
            <span>{task.title}</span>

            {/* Adding gap between buttons */}
            <div className="flex items-center gap-2">

              {/* Adding Edit button */}
              <Button variant="gradient" title="Modifier" className="p-2" color="blue">
                {/* Rendering the Edit icon */}
                <CiEdit size={20} />
              </Button>

              {/* Adding Delete button */}
              <Button variant="gradient" title="Supprimer" className="p-2" color="red">
                {/* Rendering the Trash icon */}
                <CiTrash size={20} />
              </Button>

            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
import React from "react";

// Importing necessary dependencies
import styles from "./tasks.module.css";
import { Checkbox, Button } from "@material-tailwind/react";
import { CiEdit, CiTrash } from "react-icons/ci";

export const TaskItem = ({ task }) => {
  return (
    <li key={task.id} className="mb-2">
      <div
        className={` ${styles.taskList} mb-1 flex items-center justify-between rounded-md cursor-pointer`}
      >
        <Checkbox color="blue" />

        {/* Displaying task title */}
        <span>{task.title}</span>

        {/* Adding gap between buttons */}
        <div className="flex items-center gap-2">
          {/* Adding Edit button */}
          <Button
            variant="gradient"
            title="Modifier"
            className="p-2"
            color="blue"
          >
            <CiEdit size={20} />
          </Button>

          {/* Adding Delete button */}
          <Button
            variant="gradient"
            title="Supprimer"
            className="p-2"
            color="red"
          >
            <CiTrash size={20} />
          </Button>
        </div>
      </div>
    </li>
  );
};

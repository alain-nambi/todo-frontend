import { React, useEffect, useState } from "react";

// Importing necessary dependencies
import styles from "./tasks.module.css";
import { Checkbox, Button } from "@material-tailwind/react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { DeleteTaskModal } from "../Modal/Modal";

export const TaskItem = ({ task, onDelete, onComplete }) => {
  const [openDeleteTaskModal, setOpenDeleteTaskModal] = useState(false);

  // Function to toggle the delete task modal
  const handleOpenDeleteTaskModal = () => {
    setOpenDeleteTaskModal(!openDeleteTaskModal);
  };

  return (
    <>
      {/* Delete Task Modal */}
      <DeleteTaskModal
        task={task}
        openDeleteTaskModal={openDeleteTaskModal}
        handleOpenDeleteTaskModal={handleOpenDeleteTaskModal}
        onDelete={onDelete}
      />

      {/* Task item */}
      <li key={task.id} className="mb-2">
        <div
          className={` ${styles.taskList} mb-1 flex items-center justify-between rounded-md cursor-pointer bg-blue-gray-500`}
        >
          {/* Checkbox for task completion */}
          <Checkbox
            color="blue"
            checked={task.isCompleted ? true : false}
            onClick={() => onComplete(task.id)}
          />

          {/* Displaying task title */}
          <span
            className={task.isCompleted ? "line-through" : ""}
            onClick={() => onComplete(task.id)}
          >
            {task.title}
          </span>

          {/* Buttons section */}
          <div className="flex items-center gap-2">
            {/* Edit button */}
            <Button
              variant="gradient"
              title="Modifier"
              className="p-2"
              color="blue"
            >
              <CiEdit size={20} />
            </Button>

            {/* Delete button */}
            <Button
              variant="gradient"
              title="Supprimer"
              className="p-2"
              color="red"
              onClick={handleOpenDeleteTaskModal}
            >
              <CiTrash size={20} />
            </Button>
          </div>
        </div>
      </li>
    </>
  );
};

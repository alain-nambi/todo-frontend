import { React, useEffect, useState } from "react";

// Importing necessary dependencies
import styles from "./tasks.module.css";
import { Checkbox, Button } from "@material-tailwind/react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { DeleteTaskModal, UpdateTaskModal } from "../Modal/Modal";
import { useMediaQuery } from "react-responsive";

export const TaskItem = ({ task, onDelete, onComplete, onUpdate }) => {
  const [openDeleteTaskModal, setOpenDeleteTaskModal] = useState(false);
  const [openUpdateTaskModal, setOpenUpdateTaskModal] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  // Function to toggle the delete task modal
  const handleOpenDeleteTaskModal = () => {
    setOpenDeleteTaskModal(!openDeleteTaskModal);
  };

  const handleOpenUpdateTaskModal = () => {
    setOpenUpdateTaskModal(!openUpdateTaskModal)
  }

  return (
    <>
      {/* Delete Task Modal */}
      <DeleteTaskModal
        task={task}
        openDeleteTaskModal={openDeleteTaskModal}
        handleOpenDeleteTaskModal={handleOpenDeleteTaskModal}
        onDelete={onDelete}
      />

      {/* Update Task Modal */}
      <UpdateTaskModal
        task={task}
        openUpdateTaskModal={openUpdateTaskModal}
        handleOpenUpdateTaskModal={handleOpenUpdateTaskModal}
        onUpdate={onUpdate}
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
            onChange={() => onComplete(task.id)}
          />

          {/* Displaying task title */}
          <span
            className={`${task.isCompleted ? "line-through" : ""} w-full ${isMobile && "text-xs"}`}
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
              onClick={handleOpenUpdateTaskModal}
              disabled={task.isCompleted ? true : false}
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

import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../Language/Language";
import { Button } from "@material-tailwind/react";
import styles from "./tasks.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function TaskForm({ handleAddTask }) {
  // Declare state for new task and set initial values
  const [newTask, setNewTask] = useState({ title: "", date: null });

  // Use responsive media queries to determine if device is desktop/laptop or tablet/mobile
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  // Set up internationalization using react-i18next
  const { t } = useTranslation("common");

  // Event handler for input change - updates the new task input state when the input value changes
  function handleInputChange(event) {
    setNewTask({ title: event.target.value });
  }

  // Event handler for form submit - adds new task and resets input state
  function handleSubmit(event) {
    event.preventDefault();

    if (newTask.title.trim() != "") {
      handleAddTask(newTask);
      setNewTask({ title: "" });

      toast(`Tâche ${newTask.title} créee`, {
        type: "success",
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast("Le nom du tâche ne doit pas être vide", {
        type: "warning",
        position: "top-right",
      });
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={`flex justify-center ${isTabletOrMobile && "m-3"}`}>
        <form onSubmit={handleSubmit} className={styles.taskForm}>
          <LanguageSelector />

          <div className={styles.taskFormContainer}>
            <input
              type="text"
              placeholder={t("add_task")}
              onChange={handleInputChange}
              value={newTask.title}
            />

            {/* Render mobile/tablet button if on smaller viewport */}
            {isTabletOrMobile && (
              <Button color="blue" type="submit" ripple={false}>
                {t("create")}
              </Button>
            )}

            {/* Render desktop/laptop button if on larger viewport */}
            {isDesktopOrLaptop && (
              <Button color="blue" type="submit" ripple={false}>
                {t("create")}
              </Button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

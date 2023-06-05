import React from "react";
import { useState } from "react";

// Icons
import { AiOutlineSend } from "react-icons/ai";

// Responsive Pages
import { useMediaQuery } from "react-responsive";

// Internationalization
import { useTranslation } from "react-i18next";

// Components
import { Language } from "../Language/Language";

// CSS
import styles from "./tasks.module.css";

export function TaskForm({ addTask }) {
  // Declare state for new task and set initial values
  const [newTask, setNewTask] = useState({ title: "", date: null });

  // Use responsive media queries to determine if device is desktop/laptop or tablet/mobile
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  // Set up internationalization using react-i18next
  const [t, i18n] = useTranslation("common");

  // Function to convert a timestamp into a human-readable date string
  function parseTimeStamp(timestamp) {
    const currentDateToString = new Date(timestamp);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const localeDateString = currentDateToString.toLocaleDateString(
      "fr-FR",
      options
    );
    const localeTimeString = currentDateToString.toLocaleTimeString("fr-FR");
    return `${localeDateString}, ${localeTimeString}`;
  }

  // Event handler for input change - updates the new task input state when the input value changes
  function handleInputChange(event) {
    setNewTask({
      ...newTask,
      title: event.target.value,
      date: parseTimeStamp(Date.now()), // Store the current timestamp as a human-readable date string
    });
  }

  // Event handler for form submit - adds new task and resets input state
  function handleSubmit(event) {
    event.preventDefault();

    addTask(newTask);

    setNewTask({ title: "", date: null });
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className={styles.taskForm}>
        <Language />

        <div className={styles.taskFormContainer}>
          <input
            type="text"
            placeholder={t("add_task")}
            onChange={handleInputChange}
            value={newTask.title}
          />

          {/* Render mobile/tablet button if on smaller viewport */}
          {isTabletOrMobile && (
            <button className={styles.taskFormButtonMobile}>
              <AiOutlineSend size={25} />
            </button>
          )}

          {/* Render desktop/laptop button if on larger viewport */}
          {isDesktopOrLaptop && (
            <button className={styles.taskFormButtonLaptop}>
              <span>{t("create")}</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

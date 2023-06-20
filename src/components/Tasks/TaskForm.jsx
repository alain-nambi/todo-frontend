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

export function TaskForm({ handleAddtask }) {
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

    handleAddtask(newTask);

    setNewTask({ title: "" });
  }

  return (
    <div className={`flex justify-center ${isTabletOrMobile && 'm-3'}`}>
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
            <button type="submit" className={styles.taskFormButtonMobile}>
              <AiOutlineSend size={25} />
            </button>
          )}

          {/* Render desktop/laptop button if on larger viewport */}
          {isDesktopOrLaptop && (
            <button type="submit" className={styles.taskFormButtonLaptop}>
              <span>{t("create")}</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

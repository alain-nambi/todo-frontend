import React from "react";
import { useState } from "react";
import styles from "./tasks.module.css";
import { AiOutlineSend } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import { Language } from "../Language/Language";

export function HandleTask() {
  const [taskInput, setTaskInput] = useState("");

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [t, i18n] = useTranslation("common");

  function handleInputChange(event) {
    // update the task input state when the input value changes
    setTaskInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // clear the task input state when the form is submitted
    setTaskInput("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <Language />

      <div className={styles.taskFormContainer}>
        <input
          type="text"
          placeholder={t("add_task")}
          onChange={handleInputChange}
          value={taskInput}
        />

        {isTabletOrMobile && (
          <button className={styles.taskFormButtonMobile}>
            <AiOutlineSend size={25} />
          </button>
        )}

        {isDesktopOrLaptop && (
          <button className={styles.taskFormButtonLaptop}>
            <span>{t("create")}</span>
          </button>
        )}
      </div>
    </form>
  );
}

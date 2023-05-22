import React from 'react';
import { useState, useEffect } from 'react';
import ReactFlagsSelect from "react-flags-select";
import styles from "./header.module.css";
import globalLanguages from '../../utilities/multipleLanguage';

export function Header() {
  const { form } = globalLanguages;
  const {placeholder, button} = form;
  const [placeholderLang, setPlaceholderLang] = useState(placeholder.en);
  const [buttonSpanLang, setButtonSpanLang] = useState(button.span.en);
  const [taskInput, setTaskInput] = useState("");
  const CURRENT_LANG = localStorage.getItem("currentLang") || "US";

  useEffect(() => {
    // Update placeholder and button text based on the selected language
    switch (CURRENT_LANG) {
      case "US":
        setPlaceholderLang(placeholder.en);
        setButtonSpanLang(button.span.en);
        break;

      case "FR":
        setPlaceholderLang(placeholder.fr);
        setButtonSpanLang(button.span.fr);
        break;

      case "MG":
        setPlaceholderLang(placeholder.mg);
        setButtonSpanLang(button.span.mg);
        break;

      default:
        setPlaceholderLang(placeholder.en);
        setButtonSpanLang(button.span.en);
        break;
    }
  }, [CURRENT_LANG]); // re-run effect when CURRENT_LANG changes

  function handleChangeLanguage(countryCode) {
    // update the currently selected language in local storage
    localStorage.setItem("currentLang", countryCode);

    // update placeholder and button text based on the selected language
    switch (countryCode) {
      case "US":
        setPlaceholderLang(placeholder.en);
        setButtonSpanLang(button.span.en);
        break;

      case "FR":
        setPlaceholderLang(placeholder.fr);
        setButtonSpanLang(button.span.fr);
        break;

      case "MG":
        setPlaceholderLang(placeholder.mg);
        setButtonSpanLang(button.span.mg);
        break;

      default:
        setPlaceholderLang(placeholder.en);
        setButtonSpanLang(button.span.en);
        break;
    }
  }

  function OnChangeTaskInput(event) {
    // update the task input state when the input value changes
    setTaskInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // clear the task input state when the form is submitted
    setTaskInput("");
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Todo App</h1>
      </div>

      <form onSubmit={handleSubmit} className={styles.taskForm}>
        <ReactFlagsSelect
          className={styles.FlagsSelectOption}
          selected={CURRENT_LANG}
          onSelect={handleChangeLanguage}
          countries={["US", "FR", "MG"]}
          customLabels={{ US: "EN", FR: "FR", MG: "MG" }}
        />

        <input type="text" placeholder={placeholderLang} onChange={OnChangeTaskInput} value={taskInput} />

        <button className={styles.taskFormButton}>
          {buttonSpanLang}
        </button>
      </form>
    </header>
  );
}
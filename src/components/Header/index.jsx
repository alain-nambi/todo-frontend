import React from 'react';
import { useState, useEffect } from 'react';
import ReactFlagsSelect from "react-flags-select";
import styles from "./header.module.css";
import globalLanguages from '../../utilities/multipleLanguage';
import { AiOutlineSend } from "react-icons/ai";

import { useMediaQuery } from 'react-responsive'
import {useTranslation} from "react-i18next";

export function Header() {
  const [taskInput, setTaskInput] = useState("");
  const CURRENT_LANG = localStorage.getItem("currentLang") || "US";

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

  const [t, i18n] = useTranslation('common'); 

  useEffect(() => {
    // Update placeholder and button text based on the selected language
    switch (CURRENT_LANG) {
      case "US":
        i18n.changeLanguage('en')
        break;

      case "FR":
        i18n.changeLanguage('fr')
        break;

      case "MG":
        i18n.changeLanguage('mg')
        break;

      default:
        i18n.changeLanguage('en')
        break;
    }
  }, [CURRENT_LANG]); // re-run effect when CURRENT_LANG changes

  function handleChangeLanguage(countryCode) {
    // update the currently selected language in local storage
    localStorage.setItem("currentLang", countryCode);

    // update placeholder and button text based on the selected language
    switch (countryCode) {
      case "US":
        i18n.changeLanguage('en')
        break;

      case "FR":
        i18n.changeLanguage('fr')
        break;

      case "MG":
        i18n.changeLanguage('mg')
        break;

      default:
        i18n.changeLanguage('en')
        break;
    }
  }

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

        <div className={styles.taskFormContainer}>
          <input 
            type="text" 
            placeholder={t('add_task')} 
            onChange={handleInputChange} 
            value={taskInput} 
          />

          {
            isTabletOrMobile &&
            <button className={styles.taskFormButtonMobile}>
              <AiOutlineSend size={25} />
            </button>
          }

          {
            isDesktopOrLaptop &&
            <button className={styles.taskFormButtonLaptop}>
              <span>{t('create')}</span>
            </button>
          }
        </div>
      </form>
    </header>
  );
}
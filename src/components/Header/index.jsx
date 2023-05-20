import React from 'react'
import { useState, useEffect } from 'react'

import TaskLogo from "../../assets/task-deadline-4721444-3926032.webp"
import styles from "./header.module.css"
import globalLanguages from '../../utilities/multipleLanguage';

export function Header() {
  const [placeholderLang, setPlaceholderLang] = useState(globalLanguages.form.placeholder.en)

  const CURRENT_LANG = localStorage.getItem("currentLang")

  useEffect(() => {
    CURRENT_LANG === "en" && setPlaceholderLang(globalLanguages.form.placeholder.en)
    CURRENT_LANG === "fr" && setPlaceholderLang(globalLanguages.form.placeholder.fr)
    CURRENT_LANG === "mg" && setPlaceholderLang(globalLanguages.form.placeholder.mg)
  }, [])

  function handleChangeLanguage(event) {
    localStorage.setItem("currentLang", event.target.value)

    event.target.value === "en" && setPlaceholderLang(globalLanguages.form.placeholder.en)
    event.target.value === "fr" && setPlaceholderLang(globalLanguages.form.placeholder.fr)
    event.target.value === "mg" && setPlaceholderLang(globalLanguages.form.placeholder.mg)
  }

  return (
    <header className={styles.header}>
      <img
        src={TaskLogo}
        width={50}
        alt="TaskLogo"
      />

      <span>TODO</span>

      <form>
        <input type="text" placeholder={placeholderLang} />
      </form>

      <select 
        name="change-language" 
        id="changeLanguage" 
        onChange={handleChangeLanguage}  
        defaultValue={CURRENT_LANG}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="mg">Malagasy</option>
      </select>
    </header>
  )
}
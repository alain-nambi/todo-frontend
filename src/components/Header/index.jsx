import React from 'react'
import { useState, useEffect } from 'react'

import TaskLogo from "../../assets/task-deadline-4721444-3926032.webp"
import styles from "./header.module.css"
import globalLanguages from '../../utilities/multipleLanguage';

import { AiOutlinePlusCircle } from 'react-icons/ai';

export function Header() {
  const [placeholderLang, setPlaceholderLang] = useState(globalLanguages.form.placeholder.en)
  const [buttonSpanLang, setButtonSpanLang] = useState(globalLanguages.form.button.span.en)
  const [taskInput, setTaskInput] = useState("")

  const CURRENT_LANG = localStorage.getItem("currentLang")

  useEffect(() => {
    switch (CURRENT_LANG) {
      case "en":
        setPlaceholderLang(globalLanguages.form.placeholder.en)
        setButtonSpanLang(globalLanguages.form.button.span.en)
        break;
    
      case "fr":
        setPlaceholderLang(globalLanguages.form.placeholder.fr)
        setButtonSpanLang(globalLanguages.form.button.span.fr)
        break;
      
      case "mg":
        setPlaceholderLang(globalLanguages.form.placeholder.mg)
        setButtonSpanLang(globalLanguages.form.button.span.mg)
    }
  }, [])

  function handleChangeLanguage(event) {
    localStorage.setItem("currentLang", event.target.value)

    switch (event.target.value) {
      case "en":
        setPlaceholderLang(globalLanguages.form.placeholder.en)
        setButtonSpanLang(globalLanguages.form.button.span.en)
        break;
    
      case "fr":
        setPlaceholderLang(globalLanguages.form.placeholder.fr)
        setButtonSpanLang(globalLanguages.form.button.span.fr)
        break;
      
      case "mg":
        setPlaceholderLang(globalLanguages.form.placeholder.mg)
        setButtonSpanLang(globalLanguages.form.button.span.mg)
    }
  }

  function OnChangeTaskInput(event) {
    setTaskInput(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    setTaskInput("")
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          src={TaskLogo}
          width={50}
          alt="TaskLogo"
        />

        <h1 className={styles.title}>todo</h1>
      </div>

      <form onSubmit={handleSubmit} className={styles.taskForm}>
        <select 
          name="change-language" 
          id="changeLanguage" 
          onChange={handleChangeLanguage}  
          defaultValue={CURRENT_LANG}
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="mg">MG</option>
        </select>

        <input type="text" placeholder={placeholderLang} onChange={OnChangeTaskInput} value={taskInput} />

        <button>{buttonSpanLang} <AiOutlinePlusCircle size={20}/></button>
      </form>

     
    </header>
  )
}
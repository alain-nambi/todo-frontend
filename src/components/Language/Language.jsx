import React from "react";
import { useEffect } from "react";

// React Flags Selection
import ReactFlagsSelect from "react-flags-select";

// CSS
import styles from "./language.module.css";

// Internationalization
import { useTranslation } from "react-i18next";

export function Language() {
  const CURRENT_LANG = localStorage.getItem("currentLang") || "US";
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    // Update placeholder and button text based on the selected language
    switch (CURRENT_LANG) {
      case "US":
        i18n.changeLanguage("en");
        break;

      case "FR":
        i18n.changeLanguage("fr");
        break;

      case "MG":
        i18n.changeLanguage("mg");
        break;

      default:
        i18n.changeLanguage("en");
        break;
    }
  }, [CURRENT_LANG]); // re-run effect when CURRENT_LANG changes

  function handleChangeLanguage(countryCode) {
    // update the currently selected language in local storage
    localStorage.setItem("currentLang", countryCode);

    // update placeholder and button text based on the selected language
    switch (countryCode) {
      case "US":
        i18n.changeLanguage("en");
        break;

      case "FR":
        i18n.changeLanguage("fr");
        break;

      case "MG":
        i18n.changeLanguage("mg");
        break;

      default:
        i18n.changeLanguage("en");
        break;
    }
  }

  return (
    <ReactFlagsSelect
      className={styles.FlagsSelectOption}
      selected={CURRENT_LANG}
      onSelect={handleChangeLanguage}
      countries={["US", "FR", "MG"]}
      customLabels={{ US: "EN", FR: "FR", MG: "MG" }}
    />
  );
}

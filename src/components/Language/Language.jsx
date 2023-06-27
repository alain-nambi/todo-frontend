import React, { useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";

// CSS module for styling components
import styles from "./language.module.css"; 

// Import constant variable to use as a key in localStorage
import { LOCAL_STORAGE_LANG_KEY } from "../../utilities/globalVariables"; 

// Import hook from react-i18next library for internationalization
import { useTranslation } from "react-i18next"; 

export const LanguageSelector = () => {
  // Get current language from localStorage or set to default value "US"
  const currentLang = localStorage.getItem(LOCAL_STORAGE_LANG_KEY) || "US";

  // Initialize translation function from react-i18next with namespace "common"
  const { i18n } = useTranslation("common"); 

  // Function to change the language based on user choice
  const setLanguage = (choice) => {
    switch (choice) {
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
  };

  // Set initial language on component mount
  useEffect(() => {
    setLanguage(currentLang);
  }, [currentLang]);

  // Function to update the language choice in localStorage and trigger language change
  const handleLanguageChange = (countryCode) => {
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, countryCode);
    setLanguage(countryCode);
  };

  return (
    <ReactFlagsSelect
      // Apply CSS module class name for styling
      className={styles.LanguageSelector} 
      selected={currentLang}
      onSelect={handleLanguageChange}
      countries={["US", "FR", "MG"]}
      // Customize labels for language choices
      customLabels={{ US: "EN", FR: "FR", MG: "MG" }}
    />
  );
};
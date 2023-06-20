// Import React and ReactDOM for use in this file
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import the main App component that we'll be rendering
import App from './App.jsx'

// Import I18nextProvider and i18next for internationalization
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

// Import JSON files containing translations for different languages
import en_lang from "./translations/en/en.json";
import fr_lang from "./translations/fr/fr.json";
import mg_lang from "./translations/mg/mg.json";

// Initialize i18next with our translation resources and language settings
i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    en: {
      common: en_lang               // 'common' is our custom namespace
    },
    fr: {
      common: fr_lang
    },
    mg: {
      common: mg_lang
    }
  },
});

// Render our main app component inside an I18nextProvider component, wrapped in StrictMode
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)

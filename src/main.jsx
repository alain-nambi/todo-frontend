import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import en_lang from "./translations/en/en.json";
import fr_lang from "./translations/fr/fr.json";
import mg_lang from "./translations/mg/mg.json";

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)

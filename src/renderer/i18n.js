import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./../../locales/en/translation.json";
import frTranslations from "./../../locales/fr/translation.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
let resources = {};

// Loop through all the folders in the locales folder and load the json files
const locales = require.context('./../../locales', true, /translation\.json$/);
locales.keys().forEach((key) => {
  const locale = key.split('/')[1];
  resources[locale] = {
    translation: locales(key)
  };
});

console.log(resources);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
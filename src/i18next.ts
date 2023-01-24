import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "./translation/english/translation.json";
import translationGerman from "./translation/german/translation.json";
import translationRussian from "./translation/russian/translation.json";

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

//---Using translation
const resources = {
    en: {
        translation: translationEnglish,
    },
    de: {
        translation: translationGerman,
    },
    ru: {
        translation: translationRussian,
    },
};

//---Using different namespaces
// const resources = {
//   en: {
//     home: translationEnglish,
//   },
//   de: {
//     home: translationSpanish,
//   },
//   ru: {
//     home: translationRussian,
//   },
// };

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  returnNull: false,
});

export default i18next;

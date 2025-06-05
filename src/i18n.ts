import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        "weather app": "app de clima",
        "Select your city": "Elige tu ciudad",
        "Min": "Mín",
        "Max": "Máx",
        "London": "Londres",
        "Singapore": "Singapur",
        "Toronto": "Toronto",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
